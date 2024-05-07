import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ReserverPanier from "../../pages/Panier/reserverAddPanier";
import PrintDetailTechMat from "../textComponent/printDescTechMateriel";
import PrintPrixUser from "../textComponent/printPrixUser";
function AjoutPanier({ materialItem }) {
  const [quantity, setQuantity] = useState(1);
  const [distance, setDistance] = useState("");
  const [listPanierMat, setListPanierMat] = useState([]);
  const [panierMAt, setPanierMat] = useState({});

  const [notif, setNotif] = useState();

  const [lieuExploitation, setLieuExploitation] = useState("");

  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showDescMat, setShowDescMat] = useState(false);

  const handleOpenCalendar = () => {
    setShowDescMat(true);
  };
  const handleCloseDescMat = () => {
    setShowDescMat(false);
  };

  const handleConfirmSelection = () => {
    setShowDescMat(false);
  };

  const handleLieuExploitationChange = (event) => {
    setLieuExploitation(event.target.value);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  
  const handleOnClickAddCard = (event) => {
    setPanierMat({
      materiel: {
        materielId: materialItem.materielId,
        categorieMat: materialItem.categorieMat,
        nomMat: materialItem.nomMat,
        stockMat: materialItem.stockMat,
        descriptionMat: materialItem.descriptionMat,
        techniqueMat: materialItem.techniqueMat,
        imagePath: materialItem.imagePath,
        id_user: materialItem.id_user,
        prixMAt: materialItem.prixMAt,
      },
      users: {},
      quantity: 2,
      startDate: "15/11/2024",
      endDate: "25/11/2024",
    });
  };
  const handleValidationClick = async () => {
    handleCloseDescMat()
    
  };
// console.log(materialItem)
  return (
    <div>
      <a onClick={handleOpenCalendar}>
        <i className="ti-search" aria-hidden="true" />
      </a>

      <Modal
        show={showDescMat}
        onHide={handleCloseDescMat}
        backdrop="static"
        keyboard={false}
        className="modal-xl"
        // style={{ width: "80vw" }}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Sélectionner une plage de dates</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{display: "flex",alignItems:"center" , justifyContent:"center", flexDirection: "row"}} >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                  JSON.parse(materialItem.imagePath)[0]
                }`}
                style={{ width: "35vw", height: "50vh" }}
                className="img-fluid blur-up lazyload bg-img"
              />
            </div>
<br/>
            <div className="product-right">
            <h2><b>{materialItem.nomMat}</b></h2>
              <h2 className="product-title">Description</h2>
                <p>{materialItem.descriptionMat}</p>
                <br/>
                <h2 className="product-title">Description technique matériel</h2>
                {/* <p>{materialItem.techniqueMat}</p>
                 */}
                 <PrintDetailTechMat desctechMat={materialItem.techniqueMat} />
                <br/>
                <h2 className="product-title">Taux journalière : <PrintPrixUser TextPrix={materialItem.prixMAt} monnai={"MLG"} /></h2>
                <br/>

                <div className="border-product">
              
              <div>
              <label hidden className=""> Entrer votre plage de date : </label>
              <ReserverPanier />
              </div>
              <br />
              <div className="d-flex align-items-start"  >
                <label className="d-block mb-2" >
                {/* style={{display: "flex",alignItems:"center" , justifyContent:"center", flexDirPriion: "row"}} */}
                  Entrer votre lieu d'exploitation&nbsp;&nbsp;
                </label>
                <div className="d-flex">
                  {/* <MyComponent
                        handleLieuExploitationChange={
                          handleLieuExploitationChange
                        }
                      /> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Lieu d'exploitation"
                    style={{ opacity: 0.7, fontSize: "0.9rem" }}
                    value={lieuExploitation}
                    onChange={handleLieuExploitationChange}
                  />
                  <button
                    className="btn btn-solid"
                    disabled={
                      lieuExploitation === "" || lieuExploitation.length === 0
                        ? true
                        : false
                    }
                    onClick={() => handleValidationClick()}
                    style={{ border: "none" }}
                  >
                    Valider
                  </button>
                </div>
              </div>
              <label className="d-block mb-2">
                Votre distance est de :{distance ? distance : ""}
              </label>

              <br />
              </div>
              {/* <div className="product-buttons">
                    <button
                      onClick={handleOnClickAddCard}
                      className="btn btn-solid"
                    >
                      Ajouter au panier
                    </button>
                  </div> */}
            </div>

            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "brown", border: "none" }}
            onClick={handleCloseDescMat}
          >
            Fermer
          </Button>
          <Button
            className="btn-solid btn-xs"
            style={{ border: "none" }}
            onClick={() => handleValidationClick()}
            // onClick={handleConfirmSelection}
          >
            <ShoppingCartIcon /> Ajouter au panier
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {selectedDates[0] && (
        <div>
          <p>
            Intervalle de dates sélectionné :{" "}
            {selectedDates[0].startDate.toLocaleDateString()} -{" "}
            {selectedDates[0].endDate.toLocaleDateString()}
          </p>
          <p>
            Nombre de jours :{" "}
            
          </p>
        </div>
      )} */}
    </div>
  );
}

export default AjoutPanier;
