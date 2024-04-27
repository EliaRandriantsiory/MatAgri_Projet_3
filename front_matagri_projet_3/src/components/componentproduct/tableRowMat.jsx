import React, { useEffect, useState } from "react";
import Modification from "./modification";
import SupprimerMateriel from "./suppressionMateriel";
import { json } from "react-router-dom";
import ViewImgTable from "../viewImgMatFournisseur";

function TableRow  ({materielItem}){
  const [images, setImages] = useState([])
  // console.log("affiche materiel item"+materielItem.materielId)

  useEffect(() => {
    if(JSON.parse(materielItem.imagePath)){

      
      setImages(JSON.parse(materielItem.imagePath))
    }
  },[])
  useEffect(() => {
    
  },[])

  return (
      <tr>
        <th scope="row">
        {
          images.map(image =>
            <img className="blur-up lazyloaded" src={`${process.env.PUBLIC_URL}/assets/images/materiels/${image}`} width={50}/>
          )
        }
        </th>
        <td>{materielItem.nomMat}</td>
        <td>{materielItem.categorieMat} </td>
        <td className="fw-bold text-theme">{materielItem.prixMAt} Ar</td>
        <td>{materielItem.stockMat}</td>
        <td>
          <Modification materielItem={{...materielItem}} />
          <SupprimerMateriel materielItem={{...materielItem}} />
        </td>
      </tr>
    );
    
  };
  export default TableRow;
