import { Button, Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

function AddProduit() {
  const [image, setImage] = useState([]);
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
    // const fetchProduits = async () => {
    //   try {
    //     const response = await axios.get("/api/produits");
    //     setProduits(response.data);
    //   } catch (error) {
    //     console.error("Erreur lors de la récupération des produits:", error);
    //   }
    // };
    // fetchProduits();
  }, []);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };
      reader.readAsDataURL(file);
    });

    setImage((prevImages) => [...prevImages, ...files]);
  };

  const removeImage = (index) => {
    setImage((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const addImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = "image/*";
    input.style.display = "none";
    input.addEventListener("change", handleImageChange);
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
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

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Ajouter Produit</Modal.Title>
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
                <input
                  type="file"
                  id="image"
                  name="image"
                  multiple
                  style={{ width: "425px" }}
                  required
                  className="form-control"
                  onChange={handleImageChange}
                />
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "10px",
                  }}
                >
                  {imagePreviews.map((preview, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "5px",
                        marginRight: "10px",
                      }}
                    >
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        style={{ width: "80px", marginRight: "50px" }}
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "5px",
                      marginRight: "10px",
                    }}
                  >
                    <i
                      className="fa fa-plus"
                      style={{ color: "#ffc800", cursor: "pointer" }}
                      onClick={addImage}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label htmlFor="nommateriel" className="col-xl-3 col-sm-4 mb-0">
                  Nom du matériel :
                </label>
                <div className="col-xl-8 col-sm-7">
                  <input
                    className="form-control"
                    id="nommateriel"
                    type="text"
                    required
                    value={nomMateriel}
                    onChange={(e) => setNomMateriel(e.target.value)}
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label htmlFor="categories" className="col-xl-3 col-sm-4 mb-0">
                  Catégorie :
                </label>
                <div className="col-xl-8 col-sm-7">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                  >
                    <option>Choix de catégorie</option>
                    <option value="1">Motoculteur</option>
                    <option value="2">Tracteur</option>
                    <option value="3">Camion</option>
                  </select>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label htmlFor="prix" className="col-xl-3 col-sm-4 mb-0">
                  Prix :
                </label>
                <div
                  className={`col-xl-8 col-sm-7 ${
                    isValid && prix !== "" ? "" : "has-error"
                  }`}
                >
                  <div className="input-group">
                    <input
                      className="form-control"
                      id="prix"
                      type="number" // Modification ici
                      min="0" // Optionnel : définir une valeur minimale
                      step="any" // Optionnel : autoriser les valeurs décimales
                      required
                      value={prix}
                      onChange={handlePrixChange}
                    />
                    <span className="input-group-text">Ariary</span>
                  </div>
                  {!isValid && prix !== "" && (
                    <div className="error-message">
                      Veuillez entrer un prix valide.
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label
                  htmlFor="validationCustom05"
                  className="col-xl-3 col-sm-4 mb-0"
                >
                  Stock du matériel :
                </label>
                <div className="col-xl-8 col-sm-7">
                  <input
                    className="form-control"
                    id="validationCustom05"
                    type="number" // Modifier ici pour type="number"
                    min="1" // Optionnel : définir une valeur minimale
                    inputMode="number"
                    required
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                  {stock !== "" && stock <= 0 && (
                    <div className="error-message">
                      Veuillez entrer un stock valide.
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group mb-3 row">
                <label htmlFor="description" className="col-xl-3 col-sm-4 mb-0">
                  Descriptions :
                </label>
                <div className="col-xl-8 col-sm-7">
                  <textarea
                    className="form-control"
                    id="description"
                    rows="5"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="offset-xl-3 offset-sm-4 d-flex justify-content-between">
            <Button className="btn btn-primary" onClick={handleSubmit}>
              Ajouter
            </Button>
            <Button className="me-3" variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduit;
