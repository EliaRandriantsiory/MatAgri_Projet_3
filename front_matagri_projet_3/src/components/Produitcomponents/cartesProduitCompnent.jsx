import { Link, useAsyncError } from "react-router-dom";
import React, { useState, useEffect } from "react";

import ReserverPanier from "../../pages/Panier/reserverAddPanier";
import PrintTextPrix from "../textComponent/printPrix";

import PrintDetailTechMat from "../textComponent/printDescTechMateriel";

import axios from "axios";
import AjoutPanier from "./printDescMateriel";
import LocalisationFournisseur from "../textComponent/localisationFournisseur";

function ProductCard({ materialItem, addPanier, updateAddPanier }) {
  // const [quantity, setQuantity] = useState(1);
  const [distance, setDistance] = useState("");
  const [listPanierMat, setListPanierMat] = useState([]);
  const [lieuExploitation, setLieuExploitation] = useState("");
  const [panierMAt, setPanierMat] = useState(null);

  useEffect(() => {
    setListPanierMat(JSON.parse(localStorage.getItem("listpanier")));
    console.log(materialItem);
  }, []);

  useEffect(() => {
    // if (JSON.parse(localStorage.getItem("listpanier"))[0] === null) {
    try {
      if (JSON.parse(localStorage.getItem("listpanier"))[0] === null) {
        setListPanierMat([panierMAt]);
        localStorage.setItem("listpanier", JSON.stringify([panierMAt]));
        // console.log("bonjour");
      } else {
        setListPanierMat([
          ...JSON.parse(localStorage.getItem("listpanier")),
          panierMAt,
        ]);
      }
    } catch (error) {}
  }, [panierMAt]);

  useEffect(() => {
    // console.log(listPanierMat);
    localStorage.setItem("listpanier", JSON.stringify(listPanierMat));
  }, [listPanierMat]);

  // console.log(listPanierMat)

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
            <button>
              <i className="ti-shopping-cart" />
            </button>
            <a href="javascript:void(0)" title="Add to Wishlist">
              <i className="ti-heart" aria-hidden="true" />
            </a>{" "}
            <AjoutPanier
              materialItem={materialItem}
              setPanierMat={setPanierMat}
            />
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
            <LocalisationFournisseur materielItem={materialItem} />
            <h4>
              <PrintTextPrix TextPrix={materialItem.prixMAt} monnai={"MLG"} />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
