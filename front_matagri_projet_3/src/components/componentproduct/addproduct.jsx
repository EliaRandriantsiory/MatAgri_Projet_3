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
      images.forEach((file) => {
        // Correction ici
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
        <Modal.Header closeButton>
          <Modal.Title>Ajout Produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="needs-validation add-product-form"
            noValidate
            onSubmit={handleSubmit}>
            <div className="form-group">
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
                <div className="image-preview-container d-flex">
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
          </form>
          {/* Container-fluid Ends*/}
          {/* Container-fluid starts*/}
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row product-adding">
                      <div className="col-xl-5">
                        <div className="add-product">
                          <div className="row">
                            <div className="col-xl-9 xl-50 col-sm-6 col-9">
                              <img src="assets/images/pro3/1.jpg" alt="" className="img-fluid image_zoom_1 blur-up lazyloaded" />
                            </div>
                            <div className="col-xl-3 xl-50 col-sm-6 col-3">
                              <ul className="file-upload-product">
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                                <li>
                                  <div className="box-input-file"><input className="upload" type="file" /><i className="fa fa-plus" /></div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <form className="needs-validation add-product-form" noValidate>
                          <div className="form">
                            <div className="form-group mb-3 row">
                              <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Title :</label>
                              <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustom01" type="text" required />
                              </div>
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="form-group mb-3 row">
                              <label htmlFor="validationCustom02" className="col-xl-3 col-sm-4 mb-0">Price :</label>
                              <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustom02" type="text" required />
                              </div>
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="form-group mb-3 row">
                              <label htmlFor="validationCustomUsername" className="col-xl-3 col-sm-4 mb-0">Product Code :</label>
                              <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustomUsername" type="text" required />
                              </div>
                              <div className="invalid-feedback offset-sm-4 offset-xl-3">Please
                                choose Valid Code.</div>
                            </div>
                          </div>
                          <div className="form">
                            <div className="form-group row">
                              <label htmlFor="exampleFormControlSelect1" className="col-xl-3 col-sm-4 mb-0">Select Size :</label>
                              <div className="col-xl-8 col-sm-7">
                                <select className="form-control digits" id="exampleFormControlSelect1">
                                  <option>Small</option>
                                  <option>Medium</option>
                                  <option>Large</option>
                                  <option>Extra Large</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-xl-3 col-sm-4 mb-0">Total Products :</label>
                              <fieldset className="qty-box col-xl-9 col-xl-8 col-sm-7">
                                <div className="input-group">
                                  <input className="touchspin" type="text" defaultValue={1} />
                                </div>
                              </fieldset>
                            </div>
                            <div className="form-group row">
                              <label className="col-xl-3 col-sm-4">Add Description :</label>
                              <div className="col-xl-8 col-sm-7 description-sm">
                                <textarea id="editor1" name="editor1" cols={10} rows={4} defaultValue={""} />
                              </div>
                              <div className="offset-xl-3 offset-sm-4 mt-4">
                                <button type="submit" className="btn btn-primary">Add</button>
                                <button type="button" className="btn btn-light">Discard</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container-fluid Ends*/}
        </Modal.Body>
        </Modal>
    </>
    )
}
export default AddProduct;