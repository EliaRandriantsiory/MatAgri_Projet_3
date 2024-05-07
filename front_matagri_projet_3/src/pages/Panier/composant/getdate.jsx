import { distance } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const TAUX_MUTUALISATION = -12;

function DevisForm() {
  const [prixLocationParJour, setPrixLocationParJour] = useState(0);
  const [dateDebut, setDateDebut] = useState(new Date());
  const [dateFin, setDateFin] = useState(new Date());
  const [nbJoursLocation, setNbJoursLocation] = useState(0);
  const [devisFinal, setDevisFinal] = useState(0);
  const [distance, setDistance] = useState(0);
  const [nbMateriels, setNbMateriels] = useState(0);

  // Charger les données sauvegardées dans le Local Storage au montage du composant
  useEffect(() => {
    const savedData = localStorage.getItem('devisForm');
    if (savedData) {
      const { prixLocationParJour, dateDebut, dateFin } = JSON.parse(savedData);
      setPrixLocationParJour(prixLocationParJour);
      setDateDebut(new Date(dateDebut));
      setDateFin(new Date(dateFin));
    }
  }, []);

  // Sauvegarder les données dans le Local Storage lors de chaque modification
  useEffect(() => {
    const dataToSave = { prixLocationParJour, dateDebut, dateFin };
    localStorage.setItem('devisForm', JSON.stringify(dataToSave));
  }, [prixLocationParJour, dateDebut, dateFin]);

  // Calculer le nombre de jours de location
  useEffect(() => {
    const diffInMs = Math.abs(dateFin - dateDebut);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    setNbJoursLocation(Math.ceil(diffInDays));
  }, [dateDebut, dateFin]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'number' ? parseFloat(target.value) : target.value;
    const name = target.name;

    switch (name) {
      case 'prixLocationParJour':
        setPrixLocationParJour(value);
        break;
      case 'dateDebut':
        setDateDebut(new Date(value));
        break;
      case 'dateFin':
        setDateFin(new Date(value));
        break;
        case 'distance':
            setDistance(value);
            break;
          case 'nbMateriels':
            setNbMateriels(value);
            break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const coutLocationTotal = prixLocationParJour * nbJoursLocation * nbMateriels;
    const coutTransportTotal = distance * 2000;
    const coutTransportMutualise = coutTransportTotal * (1 - TAUX_MUTUALISATION / 100);
    const devis = coutLocationTotal + coutTransportMutualise;

    setDevisFinal(devis);
    setPrixLocationParJour(""); // Reset values after submit (optional)
    setDateDebut(new Date()); // Reset values after submit (optional)
    setDateFin(new Date()); // Reset values after submit (optional)
    setNbMateriels(""); // Assuming nbMateriels remains after submit
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
          <input type="date" name="dateDebut" value={dateDebut.toISOString().split('T')[0]} onChange={handleChange} />
        </label>
        <label>
          Date de fin :
          <input type="date" name="dateFin" value={dateFin instanceof Date ? dateFin.toISOString().split('T')[0] : ''} onChange={handleChange} />
        </label>
        <label>
          Nombre de matériels :
          <input type="number" name="nbMateriels" value={nbMateriels} onChange={handleChange} />
        </label>
        <label>
          Distance (km) :
          <input type="number" name="distance" value={distance} onChange={handleChange} />
        </label>
        <button type="submit">Calculer le devis</button>
      </form>
      {devisFinal > 0 && <p>Le devis final est de : {devisFinal} Ariary
</p>}
    </div>
  );
}

export default DevisForm;