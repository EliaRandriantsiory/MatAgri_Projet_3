import React, { useState } from "react";

const MaterielFilter = () => {
  const [selectedValue, setSelectedValue] = useState("");

  // Fonction de gestion du changement de valeur du dropdown
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <li>
      <div>
        <label htmlFor="materiel"> Materiels </label>
        <select id="materiel" value={selectedValue} onChange={handleChange}>
          <option value="">Tous</option>
          <option value="tracteur">Tracteur</option>
          <option value="cubotat">Cubotat</option>
          <option value="remorque">Remorque</option>
        </select>
      </div>
    </li>
  );
};

export default MaterielFilter;
