import axios from "axios";
import { useEffect, useState } from "react";

function CalculeDistancePointToPoint({ lieuExploitation, materialItem }) {
  const [distance, setDistance] = useState();
  const [materialItem, setMaterielItem] = useState();
  const [lieuExploitation, setLieuExploitation] = useState();
  useEffect(() => {
    setMaterielItem(materialItem)
    setLieuExploitation(lieuExploitation)
  }, []);

  return <label>bonjour</label>;
}

export default CalculeDistancePointToPoint;



//   try {
//     const response = axios.post(
//       `http://localhost:8082/distance/calculate/${materialItem?.materielId}`,
//       {
//         destination: lieuExploitation,
//       }
//     );
//     if (response.status === 200) {
//       setDistance(response.data);
//     }
//   } catch (error) {
//     return "Une erreur s'est produite lors du calcul de la distance";
//   }