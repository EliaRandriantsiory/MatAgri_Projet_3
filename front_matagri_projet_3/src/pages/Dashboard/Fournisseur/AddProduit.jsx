import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function AddProduit() {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nomMateriel, setNomMateriel] = useState("");
  const [categorie, setCategorie] = useState("");
    
  const [imagesList, setImagesList] = useState([]);
  
  const [listImagesFile, setListImageFile] = useState([]);
  
  // const [categorieMateriel, setCategorieMateriel] = useState("");
  const [prixMateriel, setPrixMateriel] = useState();
  const [stockMateriel, setStockMateriel] = useState();
  const [descriptionMateriel, setDescriptionMateriel] = useState("");
  const [descriptionTechMateriel, setDescriptionTechMateriel] = useState("");


  const [listMateriel, setListMateriel] = useState([]);
  const [listMateriels, setListMateriels] = useState([]);
  const [currentUSer, setCurrentUser] = useState({});

  const initAuthentification = () =>{

      // initialisation donnée current user
      axios
        .post("http://localhost:8082/api/home/authentification", {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("pwd"),
        })
        .then((response) => {
          localStorage.setItem("currentUser", JSON.stringify(response.data));
          setCurrentUser(response.data)
          // setListMateriel(Array.from(response.data.materiels))

          
          // console.log(response.data)
        }); 
        initListMat()
  }
  const initListMat = () => {
    // console.log(localStorage.getItem("crntUser"))
    axios
        .get(
          'http://localhost:8082/api/materiels/listMaterielByUser?param='+localStorage.getItem("crntUser")
          // "http://localhost:8082/api/materiels/listMateriel"
        )
        .then((response) => {
          // setListMateriel(response.data);
          var dataList = response.data
          setListMateriels(dataList)
          // listMateriels.push(dataList)
          // console.log(listMateriels)
          
          // setListMateriel(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    
  };
  
  useEffect(()=>{
    initAuthentification()    
    // console.log(listMateriels)
  },[])

  // useEffect(()=>{console.log("bonjour test assync")},[setImagesList])

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
  

  const handleOnclickSauvegardeAjout = (e) => {
    e.preventDefault();

    // console.log("bonjour")
    // console.log(listImagesFile)
    images.forEach((imagesFile) => {
      imagesList.push(imagesFile.name)
      console.log(imagesFile)
      handleUpload(imagesFile)
      // console.log(imagesFile.name)
      // Array.from(imagesFile).forEach((imageFile) => {
      //   handleUpload(imageFile);
      //   // console.log("bonjour"+imageFile.name)
      //   // console.log(imageFile)
      //   imagesList.push(imageFile.name);
      //   // console.log(imageFile.name)
      // });
    });
    console.log(imagesList);
    
    
    // // console.log(JSON.stringify(imagesList));
    axios
      .post("http://localhost:8082/api/materiels/ajouter", {
        categorieMat: categorie,
        nomMat: nomMateriel,
        stockMat: stockMateriel,
        descriptionMat: descriptionMateriel,
        techniqueMat: descriptionTechMateriel,
        imagePath: JSON.stringify(imagesList),
        id_user: localStorage.getItem("crntUser"),
        prixMAt: prixMateriel,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setImagesList([]);  
    setImages([])
  };
  

  const handlePrix = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    setPrixMateriel(numericValue);
  };
  const handleUpload = (file) => {
    // const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("file", file);

    // console.log(formData)
    // console.log("bonjour")
    axios
      .post("http://localhost:8082/api/materiels/file/upload", formData)
      .then((response) => {
        // Gérer la réponse du serveur après le téléchargement
      })
      .catch((error) => {
        // Gérer les erreurs
      });
  };
  const handleStock = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    setStockMateriel(numericValue);
  };

  const handleOnChangeNomMateriel = (e) => {
    setNomMateriel(e.target.value);
    console.log(e.target.value);
  };
  // const handleOnChangeCategorieMateriel = (e) => {
  //   setCategorieMateriel(e.target.value);
  // };
  // const handleOnChangePrixMateriel = (e) => {
  //   setPrixMateriel(e.target.value);
  // };
  // const handleOnChangeStockMateriel = (e) => {
  //   setStockMateriel(e.target.value);
  // };
  // const handleOnChangeDescriptionMateriel = (e) => {
  //   setDescriptionMateriel(e.target.value);
  // };

  

  

  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   // console.log(files)
  //   listImagesFile.push(files);
  //   files.forEach((file) => {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
  //     };
  //     reader.readAsDataURL(file);
  //   });

  //   setImages((prevImages) => [...prevImages, ...files]);
  // };

  // const removeImage = (index) => {
  //   setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  //   setImagePreviews((prevPreviews) =>
  //     prevPreviews.filter((_, i) => i !== index)
  //   );
  // };

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
            onSubmit={handleOnclickSauvegardeAjout}
          >
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
            <div className="form-group">
              <label htmlFor="categories">Catégories:</label>
              <select className="form-select" id="categories" onChange={(e) => setCategorie(e.target.value)} value={categorie}>
                <option>Choix de catégorie</option>
                <option value="Motoculteur">Motoculteur</option>
                <option value="Tracteur">Tracteur</option>
                <option value="Camion">Camion</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="prix">Prix:</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="prix"
                  value={prixMateriel}
                  onChange={(e) => setPrixMateriel(e.target.value)}
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
                value={stockMateriel}
                onChange={(e) => setStockMateriel(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description Technique:</label>
              <textarea
                className="form-control"
                id="descriptionTech"
                rows="3"
                value={descriptionTechMateriel}
                onChange={(e) => setDescriptionTechMateriel(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={descriptionMateriel}
                onChange={(e) => setDescriptionMateriel(e.target.value)}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="offset-xl-3 offset-sm-4 d-flex justify-content-between">
            <Button className="btn btn-solid" id="ajout"  onClick={handleOnclickSauvegardeAjout}>
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