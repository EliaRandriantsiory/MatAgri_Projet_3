import { useState, useEffect } from "react";
import axios from "axios";

function MaterielFilter() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [materiels, setMateriels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMateriels = async () => {
      try {
        const response = await axios.get("http://localhost:8082/api/materiels/filter");
        setMateriels(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMateriels();
  }, []);

  const handleChange = async (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="">Sélectionnez une catégorie</option>
        <option value="tracteur">Tracteur</option>
        <option value="Kubota">Kubota</option>
        {/* Ajoutez d'autres options selon vos catégories */}
      </select>

      {error && <p>Une erreur s'est produite: {error}</p>}

      <ul>
        {materiels.map((materiels) => (
          <li key={materiels.categoriMat}>{materiels.categoriMatnom}</li>
          // Ajoutez d'autres éléments à afficher selon vos besoins
        ))}
      </ul>
    </div>
  );
}

export default MaterielFilter;
