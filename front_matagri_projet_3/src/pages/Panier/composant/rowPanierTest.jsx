import React, { useEffect, useState } from "react";
import Reserver from "../Reserver";
import PrintTextPrix from "../../../components/textComponent/printPrix";

function RowPanierComponent({ materielItem_ }) {

    
  const [materielItem, setMaterielItem] = useState({});
  const [prixTotal, setPrixTotal] = useState(0);
  const [qt, setQt] = useState();
  const [matPanier, setMatPanier] = useState({})
  const [nomMat, setNomMat] = useState()

//   useEffect(() => {
//     if (materielItem_ !== null) {
//       setMaterielItem(materielItem_);
//     } else {
//     }
//   }, []);
  useEffect(() => {
    // console.log(materielItem)
    // console.log("bonjour")
    setQt(materielItem_.quantity)
    setMatPanier(materielItem_.materiel)
    setNomMat(materielItem_.nomMat)
    setPrixTotal((materielItem_.materiel.prixMAt)*materielItem_.quantity)
    // console.log(materielItem_)
    
    // console.log(materielItem_.materiel)
  },[])
//   useEffect(() => {
//     // console.log(materielItem.quantity);
//   }, [materielItem]);
  //   console.log(materielItem);

  const handleNomProductsChange = (event) => {
    console.log(event.target.value);
  };
  const handleQuantityChange = (event) => {
    let qtt = event.target.value;
    setPrixTotal(qtt * materielItem_.materiel.prixMAt);
  };
  const handlePrixChange = (event) => {
    console.log(event.target.value);
  };
  const handleTotalChange = (event) => {
    console.log(event.target.value);
  };
  const CheckCommande = () =>{
    console.log(materielItem_)
  }
  // console.log(materielItem.imagePath);
  //console.log(nomMat)
  return (
    <tr onClick={CheckCommande}>
      <td>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
            JSON.parse(materielItem_.materiel.imagePath)[0]
          }`}
          width={150}
          className="img-fluid blur-up lazyload bg-img"
        />
      </td>
      <td>{materielItem_.materiel.nomMat}</td>
      <td>
        <div className="qty-box">
          <div className="input-group">
            <input
              type="number"
              name="quantity"
              className="form-control input-number"
              defaultValue={materielItem_.quantity}
              onChange={handleQuantityChange}
              min={1}
            />
          </div>
        </div>
      </td>
      <td>
        {/* {prixTotal} */}

        <PrintTextPrix TextPrix={materielItem_.materiel.prixMAt} monnai={"MLG"} />
      </td>
      <td>
        <div>
          <Reserver />
          {/* 2 jour */}
        </div>
      </td>
      <td>
        {/* {prixTotal} */}
        <PrintTextPrix TextPrix={prixTotal} monnai={"MLG"} />
      </td>
      <td>
        <a href="#" className="icon">
          <i className="ti-close"></i>
        </a>
      </td>
    </tr>
  );
}

export default RowPanierComponent;
