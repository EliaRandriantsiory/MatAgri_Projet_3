import axios from "axios";
import { useEffect, useState } from "react";

const TAUX_MUTUALISATION = -12;

function DevisForm() {
  const [prixLocationParJour, setPrixLocationParJour] = useState(0);
  const [dateDebut, setDateDebut] = useState(new Date());
  const [dateFin, setDateFin] = useState(new Date());
  const [nbJoursLocation, setNbJoursLocation] = useState(0);
  const [devisFinal, setDevisFinal] = useState(0);
  const [distance, setDistance] = useState(0);
  const [nbMateriels, setNbMateriels] = useState(0);

  useEffect(() => {
    const savedData = localStorage.getItem("devisForm");
    if (savedData) {
      const { prixLocationParJour, dateDebut, dateFin } = JSON.parse(savedData);
      setPrixLocationParJour(prixLocationParJour);
      setDateDebut(new Date(dateDebut));
      setDateFin(new Date(dateFin));
    }
  }, []);

  useEffect(() => {
    const dataToSave = { prixLocationParJour, dateDebut, dateFin };
    localStorage.setItem("devisForm", JSON.stringify(dataToSave));
  }, [prixLocationParJour, dateDebut, dateFin]);

  useEffect(() => {
    const diffInMs = Math.abs(dateFin - dateDebut);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    setNbJoursLocation(Math.ceil(diffInDays));
  }, [dateDebut, dateFin]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const coutLocationTotal =
      prixLocationParJour * nbJoursLocation * nbMateriels;
    const coutTransportTotal = distance * 2000;
    const coutTransportMutualise =
      coutTransportTotal * (1 + TAUX_MUTUALISATION / 100);
    const devis = coutLocationTotal + coutTransportMutualise;

    setDevisFinal(devis);

    try {
      const response = await axios.post(
        "http://localhost:8082/api/panier/mutual",
        {
          distance: distance,
          totalPrice_mutualisation: devis,
          // Include other required fields for your Mutualisation entity here (refer to your backend API documentation)
        }
      );

      console.log("Devis submitted successfully:", response.data);
      // Handle successful response (e.g., display a confirmation message)
    } catch (error) {
      console.error("Error submitting devis:", error);
      // Handle errors (e.g., display an error message)
    }
  };

  const handleChange = (event) => {
    const target = event.target;
    const value =
      target.type === "number" ? parseFloat(target.value) : target.value;
    const name = target.name;

    switch (name) {
      case "prixLocationParJour":
        setPrixLocationParJour(value);
        break;
      case "dateDebut":
        setDateDebut(new Date(value));
        break;
      case "dateFin":
        setDateFin(new Date(value));
        break;
      case "distance":
        setDistance(value);
        break;
      case "nbMateriels":
        setNbMateriels(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Calcul de devis</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Prix de location par jour (Ariary) :
          <input
            type="number"
            name="prixLocationParJour"
            value={prixLocationParJour}
            onChange={handleChange}
          />
        </label>
        <label>
          Date de début :
          <input
            type="date"
            name="dateDebut"
            value={dateDebut.toISOString().split("T")[0]}
            onChange={handleChange}
          />
        </label>
        <label>
          Date de fin :
          <input
            type="date"
            name="dateFin"
            value={
              dateFin instanceof Date ? dateFin.toISOString().split("T")[0] : ""
            }
            onChange={handleChange}
          />
        </label>
        <label>
          Nombre de matériels :
          <input
            type="number"
            name="nbMateriels"
            value={nbMateriels}
            onChange={handleChange}
          />
        </label>
        <label>
          Distance (km) :
          <input
            type="number"
            name="distance"
            value={distance}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Soumettre le devis</button>
      </form>
      {devisFinal > 0 && <p>Le devis final est de : {devisFinal} Ariary</p>}
    </div>
  );
}

export default DevisForm;
