import { Link } from "react-router-dom";
import ProductBox from "../Produitcomponents/cartesProduitCompnent";
import { useEffect, useState } from "react";
function CardProduct({ listMateriels }) {
  const [listMateriel, setListMateriel] = useState([]);
  useEffect(() => {
    setListMateriel(listMateriels)
  })
  
  
  return (
    <>
    {listMateriels.map((materialItem, index) => (
      {/* <ProductBox key={index} materielItem={materialItem} /> */}
    ))}
    </>
    
    
  );
};

export default CardProduct;

