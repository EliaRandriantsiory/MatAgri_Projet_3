import axios from "axios";
import { useEffect, useState } from "react";

function LocalisationFournisseur({materielItem}) {
    // console.log(materielItem)
    const [currentFournisseur, setCurrentFournisseur] = useState({})

    useEffect(() => {
        axios
        .get(
          "http://localhost:8082/api/home/getFournisseur?idFournisseur="+materielItem.id_user
        )
        .then((response) => {
            setCurrentFournisseur(response.data)    
            console.log(response.data)
        //   setListMateriel(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },[])
    
    return ( 
        <h8><b>Localisation : </b><label style={{textTransform:"capitalize"}} >{currentFournisseur.region}</label></h8>
     );
}

export default LocalisationFournisseur;