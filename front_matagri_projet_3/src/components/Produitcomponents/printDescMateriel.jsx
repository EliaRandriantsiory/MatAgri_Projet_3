import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckIcon from "@mui/icons-material/Check";
import { DateRange, DateRangePicker } from "react-date-range";
import ReserverPanier from "../../pages/Panier/reserverAddPanier";
import MyComponent from "../textComponent/testsaisiautomatique";
import axios from "axios";
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
  const [showCalendar, setShowCalendar] = useState(false);

  const handleOpenCalendar = () => {
    setShowCalendar(true);
  };
  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  const handleConfirmSelection = () => {
    setShowCalendar(false);
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
    try {
      const response = await axios.post(
        `http://localhost:8082/distance/calculate/${materialItem?.materielId}`,
        {
          destination: lieuExploitation,
        }
      );
      if (response.status === 200) {
        setDistance(response.data);
        return response.data;
      }
    } catch (error) {
      return "Une erreur s'est produite lors du calcul de la distance";
    }
  };

  return (
    <div >
      <a onClick={handleOpenCalendar}>
        <i className="ti-search" aria-hidden="true" />
      </a>

      <Modal
        show={showCalendar}
        onHide={handleCloseCalendar}
        backdrop="static"
        keyboard={false}
        className="modal-xl"
        // style={{ width: "80vw" }}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Sélectionner une plage de dates</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          {/* <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <br /> */}

            <div className="row" >
            <img hidden
                    src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                      JSON.parse(materialItem.imagePath)[0]
                    }`}
                    width={700}
                    height={10}
                    className="img-fluid blur-up lazyload bg-img"
                  />
                  <br />

<div className="product-right">
                  <h2 className="product-title">Infos supplémentaire</h2>
                  <div className="border-product">
                    <h2>{materialItem.name}</h2>
                    <p>{materialItem.descriptionMat}</p>
                  </div>
                  <label className=""> Entrer votre plage de date :</label>
                  <ReserverPanier />
                  <br />

                  {/* <label className="">
                      Entrer votre lieu d'exploitation :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lieu d'exploitation"
                      style={{ opacity: 0.7, fontSize: "0.9rem" }}
                    /> */}

                  <div className="d-flex align-items-start">
                    <label className="d-block mb-2">
                      Entrer votre lieu d'exploitation :
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
                          lieuExploitation === "" ||
                          lieuExploitation.length === 0
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
                  {/* Quantité */}
                  <div className="product-description border-product">
                    <h6 className="product-title">Quantité</h6>
                    <div className="qty-box">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <button
                            type="button"
                            className="btn quantity-left-minus"
                            onClick={decrementQuantity}
                          >
                            <i className="ti-angle-left" />
                          </button>{" "}
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          className="form-control input-number"
                          value={quantity}
                          defaultValue={1}
                          readOnly
                        />{" "}
                        <span className="input-group-prepend">
                          <button
                            type="button"
                            className="btn quantity-right-plus"
                            onClick={incrementQuantity}
                          >
                            <i className="ti-angle-right" />
                          </button>
                        </span>
                      </div>
                    </div>
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

              {/* <div className="col-lg-6 col-xs-12">
                <div className="quick-view-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                      JSON.parse(materialItem.imagePath)[0]
                    }`}
                    width={700}
                    height={1000}
                    className="img-fluid blur-up lazyload bg-img"
                  />
                </div>
              </div>
              <div className="col-lg-6 rtl-text">
                <div className="product-right">
                  <h2 className="product-title">Infos supplémentaire</h2>
                  <div className="border-product">
                    <h2>{materialItem.name}</h2>
                    <p>{materialItem.descriptionMat}</p>
                  </div>
                  <label className=""> Entrer votre plage de date :</label>
                  <ReserverPanier />
                  <br />

                  <label className="">
                      Entrer votre lieu d'exploitation :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lieu d'exploitation"
                      style={{ opacity: 0.7, fontSize: "0.9rem" }}
                    />

                  <div className="d-flex align-items-start">
                    <label className="d-block mb-2">
                      Entrer votre lieu d'exploitation :
                    </label>
                    <div className="d-flex">
                       <MyComponent
                        handleLieuExploitationChange={
                          handleLieuExploitationChange
                        }
                      /> 
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
                          lieuExploitation === "" ||
                          lieuExploitation.length === 0
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
                  
                  <div className="product-description border-product">
                    <h6 className="product-title">Quantité</h6>
                    <div className="qty-box">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <button
                            type="button"
                            className="btn quantity-left-minus"
                            onClick={decrementQuantity}
                          >
                            <i className="ti-angle-left" />
                          </button>{" "}
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          className="form-control input-number"
                          value={quantity}
                          defaultValue={1}
                          readOnly
                        />{" "}
                        <span className="input-group-prepend">
                          <button
                            type="button"
                            className="btn quantity-right-plus"
                            onClick={incrementQuantity}
                          >
                            <i className="ti-angle-right" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-buttons">
                    <button
                      onClick={handleOnClickAddCard}
                      className="btn btn-solid"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "brown", border: "none" }}
            onClick={handleCloseCalendar}
          >
            Fermer
          </Button>
          <Button
            className="btn-solid btn-xs"
            style={{ border: "none" }}
            onClick={() => handleValidationClick()}
            // onClick={handleConfirmSelection}
          >
            <CheckIcon /> Confirmer la sélection
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
