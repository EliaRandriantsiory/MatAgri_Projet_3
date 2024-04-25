import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function AddProduit() {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nomMateriel, setNomMateriel] = useState("");
  const [categorie, setCategorie] = useState("");
  const [prix, setPrix] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get("/api/produits");
        setProduits(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };
  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get("/api/produits");
        setProduits(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProduits();
  }, []);

  const handleImageChange = (files) => {
    const selectedImages = Array.from(files);
    setImages(selectedImages);

    const previews = selectedImages.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nomMateriel", nomMateriel);
      formData.append("categorie", categorie);
      formData.append("prix", prix);
      formData.append("stock", stock);
      formData.append("description", description);
      image.forEach((file) => {
        formData.append("images", file);
      });

      const response = await axios.post("/api/enregistrerProduit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Données envoyées avec succès:", response.data);
      // Réinitialisez le formulaire après l'envoi des données avec succès
      handleCloseModal();
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
      // Gérez les erreurs d'envoi des données ici
    }
  };

  const handlePrixChange = (e) => {
    const value = e.target.value;
    if (/^\d+$/.test(value)) {
      setPrix(value);
      setIsValid(true);
    } else {
      setPrix(value);
      setIsValid(false);
    }
  };

  const handleClose = () => {
    setShowModal(false); // Ferme le modal lorsque cette fonction est appelée
  };

  return (
    <>
      <a href="#" className="btn btn-sm btn-solid" onClick={handleOpenModal}>
        + Ajouter Produit
      </a>
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Votre code de gestion de soumission
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
      // Gérez les erreurs d'envoi des données ici
    }
  };

  const handlePrix = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    setPrix(numericValue);
  };

  const handleStock = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    setStock(numericValue);
  };

  return (
    <>
      <button className="btn btn-sm btn-solid" onClick={handleOpenModal}>
        + Ajouter Produit
      </button>

      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
        <Modal.Header>
          <Modal.Title>Ajout Produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="needs-validation add-product-form"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form">
              <div className="col-md-6">
                <label htmlFor="image" className="form-label">
                  Image:
                </label>
                <FileUploader
                  handleChange={handleImageChange}
                  name="file"
                  types={fileTypes}
                  multiple
                />
                {imagePreviews.length > 0 && (
                  <div className="image-preview-container">
                    {" "}
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="me-2 mb-2">
                        <img
                          src={preview}
                          alt={`Preview ${index}`}
                          style={{ width: "100px", marginRight: "5px" }}
                        />
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => removeImage(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="nomMateriel">Nom du matériel:</label>
              <input
                type="text"
                className="form-control"
                id="nomMateriel"
                value={nomMateriel}
                onChange={(e) => setNomMateriel(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="categories" className="form-label">
                Catégories:
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Choix de catégorie</option>
                <option value="1">Motoculteur</option>
                <option value="2">Tracteur</option>
                <option value="3">Camion</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="prix">Prix:</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="prix"
                  value={prix}
                  onChange={handlePrix}
                />
                <div className="input-group-append">
                  <span className="input-group-text">Ariary</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="stock">Stock:</label>
              <input
                type="text"
                className="form-control"
                id="stock"
                value={stock}
                onChange={handleStock}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="offset-xl-3 offset-sm-4 d-flex justify-content-between">
            <Button className="btn btn-primary" onClick={handleSubmit}>
              Ajouter
            </Button>
            <Button
              className="me-3"
              variant="secondary"
              onClick={handleCloseModal}
            >
              Fermer
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduit;
