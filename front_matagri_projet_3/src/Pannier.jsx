
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Pannier() {

  const [data, setData] = useState([]);
 
  useEffect(() => {     
    // INITIALISATION DATA MATERIEL     
    axios.get("http://localhost:8082/api/panier/listePannier")       
    .then((response) => {
      setData(response.data);
      console.log(response.data)           
     })       
    .catch((error) => {
      console.error(error);       
    }); 
    }, []);

  return (
    <div>
      bonjour
      {data.length > 0 ? (
        data.map((commande) => (
          <div key={commande.idCommande}>
            <p>Total Price: {commande.totalPrice}</p>
            <p>Distance: {commande.distance}</p>
            <p>Start Date: {commande.startDate}</p>
            <p>End Date: {commande.endDate}</p>
            <p>Nom du matériel : {commande.materiels.nomMat}</p>
            <p>Description du matériel : {commande.materiels.descriptionMat}</p>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Pannier;
