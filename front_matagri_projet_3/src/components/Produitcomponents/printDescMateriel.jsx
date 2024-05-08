import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ReserverPanier from "../../pages/Panier/reserverAddPanier";
import PrintDetailTechMat from "../textComponent/printDescTechMateriel";
import PrintPrixUser from "../textComponent/printPrixUser";

import SaisieAutomatiqueVille from "../textComponent/testsaisiautomatique";

import axios from "axios";
import LocalisationFournisseur from "../textComponent/localisationFournisseur";

function AjoutPanier({ materialItem, setPanierMat }) {
  const [quantityPanier, setQuantity] = useState(1);
  // const [distance, setDistance] = useState("");
  // const [listPanierMat, setListPanierMat] = useState([]);
  // const [panierMAt, setPanierMat] = useState({});
  // const [startDateCrenau, setStartDateCrenau] = useState();
  // const [endDateCrenau, setEndDateCrenau] = useState();

  // =======
  // import axios from "axios";

  // function AjoutPanier({ materialItem, setPanierMat }) {
  //   const [quantityPanier, setQuantity] = useState(1);

  const [distance, setDistance] = useState("0");
  const [listPanierMat, setListPanierMat] = useState([]);

  const [startDateCrenau, setStartDateCrenau] = useState();
  const [endDateCrenau, setEndDateCrenau] = useState();

  const [notif, setNotif] = useState();

  const quantity = 0;

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
    if (quantityPanier > 1) {
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
      lieuExploitation: lieuExploitation,
      distance: distance,
      users: {},
      quantity: quantityPanier,
      startDate: startDateCrenau,
      endDate: endDateCrenau,
      // sommeTotal:
    });
    // console.log("bonjour");
    handleCloseDescMat();
  };

  const calculeDistance = () => {
    return;
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
        // console.log(response.data)
        return response.data;
      }
    } catch (error) {
      return "Une erreur s'est produite lors du calcul de la distance";
    }
  };

  useEffect(() => {
    if (lieuExploitation === "") {
      setDistance("");
    }
  }, [lieuExploitation]);

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
      >
        <Modal.Body>
          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                  JSON.parse(materialItem.imagePath)[0]
                }`}
                style={{ width: "35vw", height: "50vh" }}
                className="img-fluid blur-up lazyload bg-img"
              />
            </div>

            <br />

            <div className="product-right">
              <h2>
                <b>{materialItem.nomMat}</b>
              </h2>
              <h2 className="product-title">Description</h2>

              <p>{materialItem.descriptionMat}</p>
              <br />
              <h2 className="product-title">Description technique matériel</h2>
              <PrintDetailTechMat desctechMat={materialItem.techniqueMat} />
              <br />
              <h2 className="product-title">
                Taux journalier :{" "}
                <PrintPrixUser TextPrix={materialItem.prixMAt} monnai={"MLG"} />
              </h2>
              <LocalisationFournisseur materielItem={materialItem} />
              <br />
              <ReserverPanier setStartDateCrenau={setStartDateCrenau} setEndDateCrenau={setEndDateCrenau} />
              <div className="product-description ">
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
                        value={quantityPanier}
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
                
              <div className="d-flex align-items-start">
                <label className="d-block mb-2">
                  Entrer votre lieu d'exploitation :
                </label>
                <div className="d-flex">
                  {/* <SaisieAutomatiqueVille /> */}
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
                    Calculer
                  </button>
                </div>
              </div>
              <br />
            </div>
            <label className="d-block mb-2">
              Votre distance est de :{distance ? distance : ""}
            </label>
            <br />
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
            onClick={() => handleOnClickAddCard()}
            // onClick={handleConfirmSelection}
          >
            <ShoppingCartIcon /> Ajouter au panier
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AjoutPanier;
