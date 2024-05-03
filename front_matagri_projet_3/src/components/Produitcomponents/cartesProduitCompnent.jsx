import { Link } from "react-router-dom";
import PrintTextPrix from "../textComponent/printPrix";
import React, { useState, useEffect } from "react";
import ReserverPanier from "../../pages/Panier/reserverAddPanier";
import Description from "../../pages/Dashboard/Fournisseur/description";
import PrintDetailTechMat from "../textComponent/printDescTechMateriel";

function ProductCard({ materialItem }) {
  const [quantity, setQuantity] = useState(1);
  const [listPanierMat, setListPanierMat] = useState([]);
  const [panierMAt, setPanierMat] = useState({});

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
      users: {
        // idUser: 1,
        // name: null,
        // lastname: null,
        // address: null,
        // phone: null,
        // nif: null,
        // stat: null,
        // cin: null,
        // email: "rakoto@gmail.com",
        // region: null,
        // nbFarme: null,
        // companyName: null,
        // password: "rakoto",
        // materiels: [],
        // profile: {
        //   idprofile: 1,
        //   profile: "agriculteur",
        //   roles: [],
        // },
      },
      quantity: 2,
      startDate: "2024-11-15",
      endDate: "2024-11-05",
    });

    // listPanierMat.push(panierMAt);
  };
  useEffect(() => {
    if (Object.keys(panierMAt).length !== 0) {
      const cmd = listPanierMat.push(panierMAt);
      setListPanierMat([...listPanierMat, panierMAt]);
      localStorage.setItem("listpanier", JSON.stringify(listPanierMat));
      // console.log(listPanierMat)
    }
    // console.log(listPanierMat);
  }, [panierMAt]);
  // localStorage.setItem("listpanier", listPanierMat);
  useEffect(() => {
    console.log(listPanierMat.length);
  }, [localStorage.getItem("listpanier")]);
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
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#quick-view"
                title="Quick View"
              >
                <i className="ti-search" aria-hidden="true" />
              </a>{" "}
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

              <label>{materialItem.techniqueMat}</label>

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
                    <label className="">
                      Entrer votre lieu d'exploitation :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lieu d'exploitation"
                      style={{ opacity: 0.7, fontSize: "0.9rem" }}
                    />
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
