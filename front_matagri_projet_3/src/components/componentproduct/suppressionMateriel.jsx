import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from "axios";
import ProductBox from "../Produitcomponents/productBoxMat";
import { ImageList } from "@mui/material";

function SupprimerMateriel({materielItem}) {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [materielIdForm, setMaterielIdForm] = useState()
  const [prixMateriel, setPrixMateriel] = useState();
  const [stockMateriel, setStockMateriel] = useState();
  const [descriptionMateriel, setDescriptionMateriel] = useState("");
  const [descriptionTechMateriel, setDescriptionTechMateriel] = useState("");
  const [nomMateriel, setNomMateriel] = useState("");
  const [imagesList, setImagesList] = useState([]);
  const [categorie, setCategorie] = useState("");

  

  useEffect(() => {
    setMaterielIdForm(materielItem.materielItem.materielId)
    setPrixMateriel(materielItem.materielItem.prixMAt)
    setStockMateriel(materielItem.materielItem.stockMat)
    setDescriptionMateriel(materielItem.materielItem.descriptionMat)
    setDescriptionTechMateriel(materielItem.materielItem.techniqueMat)
    setCategorie(materielItem.materielItem.categorieMat)
    setNomMateriel(materielItem.materielItem.nomMat)
    setImagesList(materielItem.materielItem.imagePath)
  },[])

  
  const handelSupprMateriel = () => {
    console.log(nomMateriel)
    axios
    .post("http://localhost:8082/api/materiels/supprimer", {
      materielId: materielIdForm,
      categorieMat: "",
      nomMat: "",
      stockMat: 0,
      descriptionMat: "",
      techniqueMat: "",
      imagePath: "",
      id_user: 0,
      prixMAt: "",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
    setShowModal(false);
  }

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  console.log(materielItem.materielItem.nomMat)
  return (
    <>
    <a href="#" onClick={handleOpenModal}>
      {/* <BorderColorIcon width="2px" /> */}
      <DeleteForeverIcon />
      
    </a>

    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>Voulez-vous supprimer cette matériels !</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="col-xl-3 col-6 col-grid-box">
      <div className="product-box">
        <div className="img-wrapper">
          <div className="front">
            <a href="#">
            {/* <img
                src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                  JSON.parse(imagesList)[0]
                }`}
                width={500}
                className="img-fluid blur-up lazyload bg-img"
              /> */}
            </a>
          </div>
          
        </div>
        <div className="product-detail">
          <div style={{ display: "flex",alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
            <a href="product-page(no-sidebar).html">
              <h2>{nomMateriel} </h2>
            </a>
            <p>
              {descriptionMateriel}
            </p>
            <h4>Ar 45 000.00</h4>
            
          </div>
        </div>
      </div>
    </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="offset-xl-3 offset-sm-4 d-flex ">
          <Button
            className="btn btn-solid "
            id="ajout"
            onClick={handelSupprMateriel}
            style={{ marginLeft: "20px" }}
          >
            Supprimer
          </Button>
          <Button
            className="btn btn-solid"
            variant="secondary"
            onClick={handleCloseModal}
            style={{ marginLeft: "20px", width: "120px" }}
          >
            Fermer
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  </>
  );
}

export default SupprimerMateriel;
