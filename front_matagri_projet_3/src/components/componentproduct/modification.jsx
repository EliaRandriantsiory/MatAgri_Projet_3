import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { json } from "react-router-dom";
const fileTypes = ["JPG", "PNG", "GIF"];

function Modification({ materielItem }) {
  
  const [images, setImages] = useState([]);
  const [image, setImage] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  
  const [prix, setPrix] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [produits, setProduits] = useState([]);

  // const [categorieMateriel, setCategorieMateriel] = useState("");
  const [prixMateriel, setPrixMateriel] = useState();
  const [stockMateriel, setStockMateriel] = useState();
  const [descriptionMateriel, setDescriptionMateriel] = useState("");
  const [descriptionTechMateriel, setDescriptionTechMateriel] = useState("");
  const [nomMateriel, setNomMateriel] = useState("");
  const [imagesList, setImagesList] = useState([]);
  const [materielIdForm, setMaterielIdForm] = useState()
  const [categorie, setCategorie] = useState("");
  const [listMateriel, setListMateriel] = useState([]);
  const [listMateriels, setListMateriels] = useState([]);
  const [currentUSer, setCurrentUser] = useState({});
  const [currentUpdateMat, setCurrentUpdateMat] = useState({})

  const initAuthentification = () => {
    // initialisation donnée current user
    // axios
    //   .post("http://localhost:8082/api/home/authentification", {
    //     email: localStorage.getItem("email"),
    //     password: localStorage.getItem("pwd"),
    //   })
    //   .then((response) => {
    //     localStorage.setItem("currentUser", JSON.stringify(response.data));
    //     setCurrentUser(response.data);
    //     // setListMateriel(Array.from(response.data.materiels))

    //     // console.log(response.data)
    //   });
    // initListMat();
    

  };

  // const initListMat = ({materielItem}) => {
  //   setPrixMateriel(materielItem.prixMAt)
  //   setStockMateriel(materielItem.stockMat)
  //   setDescriptionMateriel(materielItem.descriptionMat)
  //   setDescriptionTechMateriel(materielItem.descriptionTechMateriel)
    
  // };

  useEffect(() => {
    // console.log(localStorage.getItem("currentUserSession"))
    setCurrentUser(JSON.parse(localStorage.getItem("currentUserSession")))
    setCurrentUpdateMat(materielItem)
  },[])

  useEffect(() => {
    // initAuthentification();

    console.log(materielItem.materielItem)
    // console.log(materielItem.materielItem.materielId)
    setMaterielIdForm(materielItem.materielItem.materielId)
    setPrixMateriel(materielItem.materielItem.prixMAt)
    setStockMateriel(materielItem.materielItem.stockMat)
    setDescriptionMateriel(materielItem.materielItem.descriptionMat)
    setDescriptionTechMateriel(materielItem.materielItem.techniqueMat)
    setCategorie(materielItem.materielItem.categorieMat)
    setNomMateriel(materielItem.materielItem.nomMat)
    setImagesList(materielItem.materielItem.imagePath)
  }, [currentUSer]);

  // useEffect(()=>{console.log("bonjour test assync")},[setImagesList])

  const handleOnclickSauvegardeAjout = (e) => {
    e.preventDefault();

    // console.log("bonjour")
    // console.log(listImagesFile)
    images.forEach((imagesFile) => {
      imagesList.push(imagesFile.name);
      console.log(imagesFile);
      handleUpload(imagesFile);
    });
    console.log(imagesList);

    // // console.log(JSON.stringify(imagesList));
    axios
      .post("http://localhost:8082/api/materiels/modifier", {
        materielId: materielIdForm,
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
    setImages([]);
    handleCloseModal()
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
  // useEffect(() => {
  //   const fetchProduits = async () => {
  //     try {
  //       const response = await axios.get("/api/produits");
  //       setProduits(response.data);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des produits:", error);
  //     }
  //   };

  //   fetchProduits();
  // }, []);

  const handleImageChange = (file) => {
    setImage([file]);
    setImagePreviews([URL.createObjectURL(file)]);
  };

  const removeImage = () => {
    setImage([]);
    setImagePreviews([]);
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
      // Votre code de gestion de soumission
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
      // Gérez les erreurs d'envoi des données ici
    }
  };

  return (
    <>
      <a href="#" onClick={handleOpenModal}>
        <BorderColorIcon width="2px" />
      </a>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Modifier Produit</Modal.Title>
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
                  text="Séléctionner vos images"
                  className="file"
                  handleChange={handleImageChange}
                  name="file"
                  types={fileTypes}
                />
                {imagePreviews.length > 0 && (
                  <div style={{ marginTop: "10px" }}>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ width: "100px", marginRight: "10px" }}
                    />
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={removeImage}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                )}
              </div>
              <div className="form-group">
              <label htmlFor="nomMateriel">Designation</label>
              <input
                type="text"
                className="form-control"
                id="nomMateriel"
                value={nomMateriel}
                onChange={(e) => setNomMateriel(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="categories">Catégorie</label>
              <select
                className="form-select"
                id="categories"
                onChange={(e) => setCategorie(e.target.value)}
                value={categorie}
              >
                <option>Choix de catégorie</option>
                <option value="Motoculteur">Motoculteur</option>
                <option value="Tracteur/Charrue">Tracteur / Charrue</option>
                <option value="Dechaumeur/Pulverisation">
                  Déchaumeur / Pulvérisateur
                </option>
                <option value="Semoir/moissonneuseBatteuse">
                  Semoir / Moissonneuse batteuse
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="prix">Prix journalier</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="prix"
                  value={prixMateriel}
                  onChange={(e) => setPrixMateriel(e.target.value)}
                />
                <div className="input-group-append">
                  <span className="input-group-text">Ar/Jour</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="stock">Quantité</label>
              <input
                type="text"
                className="form-control"
                id="stock"
                value={stockMateriel}
                onChange={(e) => setStockMateriel(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Spécifications techniques</label>
              <textarea
                className="form-control"
                id="descriptionTech"
                rows="3"
                value={descriptionTechMateriel}
                onChange={(e) => setDescriptionTechMateriel(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={descriptionMateriel}
                onChange={(e) => setDescriptionMateriel(e.target.value)}
              ></textarea>
            </div>
              
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="offset-xl-3 offset-sm-4 d-flex ">
            <Button
              className="btn btn-solid "
              id="ajout"
              onClick={handleOnclickSauvegardeAjout}
              style={{ marginLeft: "20px" }}
            >
              Modifier
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

export default Modification;
