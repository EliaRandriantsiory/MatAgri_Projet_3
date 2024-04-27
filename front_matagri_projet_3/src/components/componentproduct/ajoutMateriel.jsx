import axios from "axios";
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";

function AjoutMateriel() {
  const [images, setImages] = useState([]);
  const [CurrentFournisseur, setCurrentFournisseur] = useState({});
  const [imagePreviews, setImagePreviews] = useState([]);
  const [nomMateriel, setNomMateriel] = useState("");
  const [categorieMateriel, setCategorieMateriel] = useState("");
  const [prixMateriel, setPrixMateriel] = useState();
  const [stockMateriel, setStockMateriel] = useState();
  const [descriptionMateriel, setDescriptionMateriel] = useState("");
  const [imagefiles, setImageFiles] = useState([]);

  const handleOnChangeNomMateriel = (e) => {
    setNomMateriel(e.target.value);
    console.log(e.target.value);
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
  
  const handleImageChange = (e) => {
    imagefiles.push(Array.from(e.target.files))
    // setImageFiles(Array.from(e.target.files));
    // console.log(imagefiles)

    // imagefiles.forEach((file) => {
    //   console.log(file);
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
    //   };
    //   reader.readAsDataURL(file);
    // });

    // setImages((prevImages) => [...prevImages, ...imagefiles]);
  };
  
  useEffect(() => {
    setCurrentFournisseur(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
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
  
  const handleUpload = (file) => {
    // const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("file", file);

    // console.log(formData)
    // console.log("bonjour")
    // axios.post('http://localhost:8082/api/materiels/file/upload?folder='+folder, formData)
    axios.post('http://localhost:8082/api/materiels/file/upload', formData)
      .then(response => {
        // Gérer la réponse du serveur après le téléchargement
      })
      .catch(error => {
        // Gérer les erreurs
      });
      
  };

  const handleOnclickSauvegardeAjout = (e) => {
    console.log(imagefiles)


    Array.from(imagefiles[0]).forEach(image => {
      handleUpload(image)
      images.push(image.name)
      setImages([])
      console.log(image)
    });
    // console.log(images)
    
    // e.preventDefault();
    // console.log(imagefiles)
    // files.forEach(file => {
    //     console.log(file)
    // });

    // console.log(CurrentFournisseur.idUser);

    axios
      .post("http://localhost:8082/api/materiels/ajouter", {
        categorieMat: categorieMateriel,
        nomMat: nomMateriel,
        stockMat: stockMateriel,
        descriptionMat: descriptionMateriel,
        techniqueMat: null,
        imagePath: JSON.stringify(images),
        // imageDetailsPath: null,
        id_user: CurrentFournisseur.idUser,
        prixMAt: prixMateriel,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Ajout Produit
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
                  value={nomMateriel}
                  onChange={handleOnChangeNomMateriel}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categories" className="form-label">
                  Catégorie:
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={categorieMateriel}
                  onChange={handleOnChangeCategorieMateriel}
                >
                  <option selected>Choix de catégorie</option>
                  <option value="Motoculteur">Motoculteur</option>
                  <option value="Tracteur">Tracteur</option>
                  <option value="Tracteur">Camion</option>
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
                    value={prixMateriel}
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
                  value={stockMateriel}
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
                  value={descriptionMateriel}
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
              Annuler
            </button>
            <input
              type="button"
              className="btn btn-primary"
              value={"Ajouter Produit"}
              data-bs-dismiss="modal"
              onClick={handleOnclickSauvegardeAjout}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AjoutMateriel;
