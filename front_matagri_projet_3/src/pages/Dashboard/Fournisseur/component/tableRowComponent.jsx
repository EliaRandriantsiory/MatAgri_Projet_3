import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TableRow() {
    

    // const [listImage, setListImage] = useState([])
  const [nomMateriel, setNomMateriel] = useState("");
  const [categorieMateriel, setCategorieMateriel] = useState("");
  const [prixMateriel, setPrixMateriel] = useState();
  const [stockMateriel, setStockMateriel] = useState();
  const [descriptionMateriel, setDescriptionMateriel] = useState(""); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentProfilUser, setCurrentProfilUser] = useState({});

  useEffect(() => {
    axios
      .post("http://localhost:8082/api/home/authentification", {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("pwd"),
      })
      .then((response) => {
        setCurrentProfilUser(response.data)
        localStorage.setItem("currentUser",JSON.stringify(response.data))
      });

  },[])
    
  const handleImageChange = (e) => {
    
    setListImage((prevList) => [...prevList, e.target.files[0]]);
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      console.log(file.name);
      // listImage.push(file)
      // console.log(file.name)
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };
      reader.readAsDataURL(file);
    });

    setImages((prevImages) => [...prevImages, ...files]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [listImage, setListImage] = useState([]);

  const handleOnChangeNomMateriel = (e) => {
    setNomMateriel(e.target.value);
  };
  const handleOnChangeCategorieMateriel = (e) => {
    setCategorieMateriel(e.target.value);
  };
  const handleOnChangePrixMateriel = (e) => {
    setPrixMateriel(e.target.value);
  };
  const handleOnChangeStockMateriel = (e) => {
    setStockMateriel(e.target.value);
  };
  const handleOnChangeDescriptionMateriel = (e) => {
    setDescriptionMateriel(e.target.value);
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

  

  const handleUpload = (file) => {
    // const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("file", file);

    // axios.post('/upload', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    //   .then(response => {
    //     // Gérer la réponse du serveur après le téléchargement
    //   })
    //   .catch(error => {
    //     // Gérer les erreurs
    //   });
  };
  const handleOnclickSaveAddProduct = () => {
    // console.log(nomMateriel+categorieMateriel+prixMateriel+stockMateriel+descriptionMateriel)
    console.log(localStorage.getItem(email));
    axios
      .post("http://localhost:8082/api/materiels/ajouter", {
        categorieMat: categorieMateriel,
        nomMat: nomMateriel,
        stockMat: stockMateriel,
        descriptionMat: descriptionMateriel,
        techniqueMat: null,
        imagePath: null,
        imageDetailsPath: null,
        id_user: currentProfilUser.id_user,
        prixMAt: prixMateriel,
      })
      .then((response) => {
        
      })
      .catch((error) => {
        console.error(error);
      });
    listImage.forEach((element) => {
      handleUpload(element);
      // console.log(element.name)
    });
  };

    return ( 
        <div
        className="modal fade"
        id="staticBackdropAddProduct"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modificaion Produits
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form id="modificationForm" className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="image" className="form-label">
                    Image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    multiple
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
                <div className="col-md-6">
                  <label htmlFor="nom" className="form-label">
                    Nom du matériel:
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    className="form-control"
                    onChange={handleOnChangeNomMateriel}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="categories" className="form-label">
                    Catégories:
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={handleOnChangeCategorieMateriel}
                  >
                    <option selected>Choix de catégorie</option>
                    <option value="1">Motoculteur</option>
                    <option value="2">Tracteur</option>
                    <option value="3">Camion</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="prix" className="form-label">
                    Prix:
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">Ar</span>
                    <input
                      type="text"
                      id="prix"
                      name="prix"
                      required
                      className="form-control"
                      onChange={handleOnChangePrixMateriel}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="stock" className="form-label">
                    Stock:
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    required
                    className="form-control"
                    onChange={handleOnChangeStockMateriel}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    className="form-control"
                    onChange={handleOnChangeDescriptionMateriel}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <input
                type="button"
                className="btn btn-primary"
                value={"Ajouter Produit"}
                data-bs-dismiss="modal"
                onClick={handleOnclickSaveAddProduct}
              />
            </div>
          </div>
        </div>
      </div>
     );
}

export default TableRow;