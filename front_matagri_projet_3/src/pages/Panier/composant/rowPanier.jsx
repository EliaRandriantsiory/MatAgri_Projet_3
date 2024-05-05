import React, { useEffect, useState } from "react";
import Reserver from "../Reserver";
import PrintTextPrix from "../../../components/textComponent/printPrix";
import PrintPrixUser from "../../../components/textComponent/printPrixUser";
import ReserverPanier from "../reserverAddPanier";
import PrintDetailTechMat from "../../../components/textComponent/printDescTechMateriel";

function RowPanierComponent({
  materielItem_,
  index,
  updatePanierMatData,
  handleCloseRowPanier,
  // handleQuantityChange
}) {
  const [materielItem, setMaterielItem] = useState({});
  const [qt, setQt] = useState();
  const [matPanier, setMatPanier] = useState({});
  const [nomMat, setNomMat] = useState();
  const [prixTotal, setPrixTotal] = useState(0);
  const [nombreJourLocation, setNombreJourLocation] = useState(1);

  // const [sommePrix,setsommePrix] = useState(0)
  useEffect(() => {
    if (materielItem_ !== null) {
      setQt(materielItem_.quantity);
      setMatPanier(materielItem_.materiel);
      setNomMat(materielItem_.nomMat);

      setPrixTotal(materielItem_.materiel.prixMAt * materielItem_.quantity);
      // setsommePrix(sommePrix+prixTotal)
      // console.log(sommePrix+prixTotal)
    }
  }, []);

  useEffect(() => {
    // materielItem_=materielItem_.quantity=qt
    // console.log(materielItem_)
    updatePanierMatData(index, materielItem_,qt , prixTotal, nombreJourLocation);
  }, [prixTotal]);

  const handleNbrJourChange = (event) => {
    setNombreJourLocation(event.target.value);
    setPrixTotal(qt * materielItem_.materiel.prixMAt * nombreJourLocation);
  };

  const handleNomProductsChange = (event) => {
    console.log(event.target.value);
  };


  const handlePrixChange = (event) => {
    console.log(event.target.value);
  };
  const handleTotalChange = (event) => {
    console.log(event.target.value);
  };
  const CheckCommande = () => {
    // console.log(materielItem_);
  };
  const handleQuantityChange = (event) => {
    let qtt = event.target.value;
    // console.log(qtt)
    setQt(qtt);
    setPrixTotal(qtt * materielItem_.materiel.prixMAt * nombreJourLocation);
  };
  if (materielItem_ !== null) {
    return (
      <tr onClick={CheckCommande}>
        
        <td>
      
          <div
            style={{
              display: "flex",
              width:"20vw",
              flexDirection: "row",
              alignItems:"start"
            }}
          >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
              JSON.parse(materielItem_.materiel.imagePath)[0]
            }`}
            width={150}
            className="img-fluid blur-up lazyload bg-img"
          /><br />
          <div>
          <b className="text-capitalize">{materielItem_.materiel.nomMat}</b>
            <br />
            <PrintDetailTechMat
                  desctechMat={materielItem_.materiel.techniqueMat}
                />
            
          </div>
            
          </div>
        </td>
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

          <PrintPrixUser
            TextPrix={materielItem_.materiel.prixMAt}
            monnai={"MLG"}
          />
        </td>
        <td>
          <div>
          <ReserverPanier />
            {/* <Reserver /> */}
            {/* <input
              type="number"
              name="quantity"
              className="form-control input-number"
              defaultValue={nombreJourLocation}
              onChange={handleNbrJourChange}
              min={1}
            /> */}
          </div>
        </td>
        <td>
          manakara
        </td>
        <td>
          {/* {prixTotal} */}
          <PrintPrixUser TextPrix={prixTotal} monnai={"MLG"} />
        </td>
        <td>
          {/* <input className="icon ti-close" onClick={handleCloseRowPanier} /> */}
          <a className="icon" onClick={() => handleCloseRowPanier(index)}>
            <i className="ti-close"></i>
          </a>
        </td>
      </tr>
    );
  } else {
    return <></>;
  }
}

export default RowPanierComponent;
