import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Modification({ materielItem }) {
  const [images, setImages] = useState([]);

  const [imagePreviews, setImagePreviews] = useState([]);
  // const [nomMateriel, setNomMateriel] = useState("");
  const nomMat=useRef(null);
  const categorieMat=useRef(null);
  const prixMAt=useRef(null);
  const stockMat=useRef(null);
  const descriptionMat=useRef(null);
  // const [categorieMateriel, setCategorieMateriel] = useState("");
  // const [prixMateriel, setPrixMateriel] = useState();
  // const [stockMateriel, setStockMateriel] = useState();
  // const [descriptionMateriel, setDescriptionMateriel] = useState("");

  
  // const handleOnChangeNomMateriel = (e) => {
  //   setNomMateriel(e.target.value);
  // };
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
  // console.log(materielItem)
  useEffect(() => {});
  
  const handleOnclickSauvegardeModifier = (e) => {
    e.preventDefault();
    
    console.log(nomMat.current.value+materielItem.materielId)
    axios
    .post("http://localhost:8082/api/materiels/modifier",{
      
        materielId: materielItem.materielId,
        categorieMat: categorieMat,
        nomMat: nomMat,
        stockMat: stockMat,
        descriptionMat: descriptionMat,
        techniqueMat: null,
        imagePath: null,
        imageDetailsPath: null,
        id_user: materielItem.id_user,
        prixMAt: prixMAt
    
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });


    // setForm({nomForm:nom,prenomForm:prenom})
    // console.log(form)
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
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
      <a href="#">
        <i
          className="fa fa-pencil-square-o me-1"
          aria-hidden="true"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        />
      </a>
      <div
        className="modal fade"
        id="staticBackdrop"
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
              <form
                id="modificationForm"
                className="row g-3"
                onSubmit={handleOnclickSauvegardeModifier}
              >
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
                    ref={nomMat}
                    value={materielItem.nomMat}
                    // onChange={handleOnChangeNomMateriel}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="categories" className="form-label">
                    Catégories:
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={materielItem.categorieMat}
                    ref={categorieMat}
                    // onChange={handleOnChangeCategorieMateriel}
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
                      value={materielItem.prixMAt}
                      ref={prixMAt}
                      // onChange={handleOnChangePrixMateriel}
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
                    value={materielItem.stockMat}
                    ref={stockMat}
                    // onChange={handleOnChangeStockMateriel}
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
                    value={materielItem.descriptionMat}
                    ref={descriptionMat}
                    // onChange={handleOnChangeDescriptionMateriel}
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
                value={"Sauvegarde modification"}
                data-bs-dismiss="modal"
                onClick={handleOnclickSauvegardeModifier}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modification;
