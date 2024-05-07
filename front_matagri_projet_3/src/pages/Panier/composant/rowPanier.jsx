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
  const [qt, setQt] = useState(1);
  const [prixMat, setPrixMat] = useState()
  const [matPanier, setMatPanier] = useState({});
  const [nomMat, setNomMat] = useState();
  const [prixTotal, setPrixTotal] = useState(0);
  const [nombreJourLocation, setNombreJourLocation] = useState(1);
  const [startDateCrenau, setStartDateCrenau] = useState("")
  const [endDateCrenau, setEndDateCrenau] = useState("")

  // const [sommePrix,setsommePrix] = useState(0)
  useEffect(() => {
    if (materielItem_ !== null) {
      setQt(materielItem_.quantity);
      setMatPanier(materielItem_.materiel);
      setNomMat(materielItem_.nomMat);
      setMatPanier(materielItem_)
      setPrixMat(materielItem_.materiel.prixMAt)
      setStartDateCrenau(materielItem_.startDate)
      setEndDateCrenau(materielItem_.endDate)

      setPrixTotal(prixMat * qt*(calculeDifferenceDate(startDateCrenau,endDateCrenau)+1));
      // setsommePrix(sommePrix+prixTotal)
      
      // console.log(sommePrix+prixTotal)
    }
  }, []);

  useEffect(() => {

    setPrixTotal(prixMat * qt*(calculeDifferenceDate(startDateCrenau,endDateCrenau)+1));
  },[endDateCrenau,startDateCrenau])

  useEffect(() => {
    console.log(qt)
    // materielItem_.quantity=qt
    // console.log(materielItem_)
    updatePanierMatData(index, materielItem_,qt , prixTotal,startDateCrenau, endDateCrenau);
  }, [prixTotal]);

  function calculeDifferenceDate(startDateString, endDateString) {
    const startDateParts = startDateString.split("/");
    const startDate = new Date(
      parseInt(startDateParts[2]),
      parseInt(startDateParts[1]) - 1,
      parseInt(startDateParts[0])
    );
    const endDateParts = endDateString.split("/");
    const endDate = new Date(
      parseInt(endDateParts[2]),
      parseInt(endDateParts[1]) - 1,
      parseInt(endDateParts[0])
    );

    // Calculer la différence en millisecondes
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

    // Convertir la différence en jours
    const differenceInDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    // console.log(differenceInDays)
    return differenceInDays;
  }

  const handleNbrJourChange = (event) => {
    setNombreJourLocation(event.target.value);
    console.log(calculeDifferenceDate(materielItem_.startDate,materielItem_.endDate)+1)
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

    setQt(qtt);

    
    //console.log(materielItem_)
    // console.log(materielItem_.materiel.prixMAt)
    const {prixMAt} = {...materielItem_.materiel}
    console.log(startDateCrenau+endDateCrenau)
    console.log( calculeDifferenceDate(startDateCrenau,endDateCrenau)+1)

    setPrixTotal(qtt * materielItem_.materiel.prixMAt * (calculeDifferenceDate(startDateCrenau,endDateCrenau)+1));
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
          <ReserverPanier setStartDateCrenau={setStartDateCrenau} setEndDateCrenau={setEndDateCrenau} />
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
