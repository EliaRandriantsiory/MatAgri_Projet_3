import React, { useEffect, useState } from "react";
import ReserverPanier from "../../pages/Panier/reserverAddPanier";
import PrintTextPrix from "../textComponent/printPrix";

import PrintDetailTechMat from "../textComponent/printDescTechMateriel";

import axios from "axios";
import AjoutPanier from "./printDescMateriel";


function ProductCard({ materialItem }) {
  const [quantity, setQuantity] = useState(1);
  const [distance, setDistance] = useState("");
  const [listPanierMat, setListPanierMat] = useState([]);
  const [panierMAt, setPanierMat] = useState({});

  const [notif, setNotif] = useState();

  const [lieuExploitation, setLieuExploitation] = useState("");


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
  useEffect(() => {
    if (Object.keys(panierMAt).length !== 0) {
      const cmd = listPanierMat.push(panierMAt);
      setListPanierMat([...listPanierMat, panierMAt]);
      localStorage.setItem("listpanier", JSON.stringify(listPanierMat));

    }
    // console.log(listPanierMat);
  }, [panierMAt]);
  // localStorage.setItem("listpanier", listPanierMat);
  useEffect(() => {
    console.log(listPanierMat.length);
  }, [localStorage.getItem("listpanier")]);

  const handleLieuExploitationChange = (event) => {
    setLieuExploitation(event.target.value);
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

  useEffect(() => {
    if (lieuExploitation === "") {
      setDistance("");
    }
  }, [lieuExploitation]);
  return (
    <>
      <div className="col-xl-3 col-6 col-grid-box">
        <div
          className="product-box"
          style={{
            minHeight: "500px",
            minWidth: "200px",
          }}
        >
          <div className="img-wrapper">
            <div className="front">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                    JSON.parse(materialItem.imagePath)[0]
                  }`}
                  width={500}
                  className="img-fluid blur-up lazyload bg-img"
                />
              </a>
            </div>
            <div className="back">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                    JSON.parse(materialItem.imagePath)[0]
                  }`}
                  width={500}
                  className="img-fluid blur-up lazyload bg-img"
                />
              </a>
            </div>
            <div className="cart-info cart-wrap">
              <button onClick={handleOnClickAddCard}>
                <i className="ti-shopping-cart" />
              </button>
              <a href="javascript:void(0)" title="Add to Wishlist">
                <i className="ti-heart" aria-hidden="true" />
              </a>{" "}
              <AjoutPanier materialItem={materialItem} />
              {/* <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#quick-view"
                title="Quick View"
              >
                <i className="ti-search" aria-hidden="true" />
              </a>{" "} */}
              <a href="compare.html" title="Compare">
                <i className="ti-reload" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="product-detail">
            <div>
              <div className="rating">
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </div>
              <a href="product-page(no-sidebar).html">
                <h6>
                  <b>{materialItem.nomMat}</b>
                </h6>
              </a>

              <p>
                {" "}
                <PrintDetailTechMat
                  desctechMat={materialItem.techniqueMat}
                />{" "}
              </p>

              <h4>
                <PrintTextPrix TextPrix={materialItem.prixMAt} monnai={"MLG"} />
              </h4>
            </div>
            {/* 
            <a href="product-page(no-sidebar).html">
              <h6>{materialItem.nomMat}</h6>
            </a>
            <p>{materialItem.descriptionMat} </p>
            <h4>
              <PrintTextPrix TextPrix={materialItem.prixMAt} monnai={"MLG"} />
            </h4> */}
          </div>
        </div>
      </div>
      {/* Description pour addproduit */}
      <div
        className="modal fade bd-example-modal-lg theme-modal"
        id="quick-view"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content quick-view-modal">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <br />

              <div className="row">
                <div className="col-lg-6 col-xs-12">
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
                      {/* <MyComponent handleLieuExploitationChange={handleLieuExploitationChange} /> */}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Lieu d'exploitation"
                          style={{ opacity: 0.7, fontSize: "0.9rem",}}
                          value={lieuExploitation}
                          onChange={handleLieuExploitationChange}
                        />
                        <button
                          className="btn btn-solid"
                          disabled={
                            lieuExploitation === "" || lieuExploitation.length === 0 ? true : false}
                          onClick={() => handleValidationClick()}
                          style={{border: "none",
                          backgroundColor: lieuExploitation ? '#004225' : '#ccc',
                            color: '#fff', 
                            cursor: lieuExploitation ? 'pointer' : 'not-allowed'
                          }}

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
                    <div className="product-buttons">
                      <button
                        onClick={handleOnClickAddCard}
                        className="btn btn-solid"
                      >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
