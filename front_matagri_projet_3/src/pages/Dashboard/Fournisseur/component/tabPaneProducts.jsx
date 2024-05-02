import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "../../../../components/componentproduct/tableRowMat";

function TabPaneProducts({ currentUserSession,setStateCrudProduct }) {
  const [imagesList, setImagesList] = useState([]);
  const [images, setImages] = useState([]);
  const [listImagesFile, setListImageFile] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [nomMateriel, setNomMateriel] = useState("");
  const [categorieMateriel, setCategorieMateriel] = useState("");
  const [prixMateriel, setPrixMateriel] = useState();
  const [stockMateriel, setStockMateriel] = useState();
  const [descriptionMateriel, setDescriptionMateriel] = useState("");


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

  useEffect(()=>{console.log("bonjour test assync")},[setImagesList])

  // const maPromesse = new Promise((resolve, reject) => {
  //   initAuthentification()
  //   resolve(
  //     console.log(currentUSer)
  //   );
    
  // })
  
  // useEffect(() => {

  //   // console.log(currentUSer.idUser)
  //   // INITIER LA LISTE DES MATERIELS
  //   axios
  //     .get(
  //       'http://localhost:8082/api/materiels/listMaterielByUser?param=2'
  //       // "http://localhost:8082/api/materiels/listMateriel"
  //     )
  //     .then((response) => {
  //       setListMateriel(response.data);
  //       console.log(listMateriel)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  

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

  const handleOnclickSauvegardeAjout = (e) => {
    e.preventDefault();

    // console.log("bonjour")
    // console.log(listImagesFile)
    listImagesFile.forEach((imagesFile) => {
      Array.from(imagesFile).forEach((imageFile) => {
        handleUpload(imageFile);
        // console.log("bonjour"+imageFile.name)
        // console.log(imageFile)
        imagesList.push(imageFile.name);
        // console.log(imageFile.name)
      });
    });
    console.log(imagesList);
    setImagesList([]);
    // console.log("bonjour")
    // console.log(JSON.stringify(imagesList));
    axios
      .post("http://localhost:8082/api/materiels/ajouter", {
        categorieMat: categorieMateriel,
        nomMat: nomMateriel,
        stockMat: stockMateriel,
        descriptionMat: descriptionMateriel,
        techniqueMat: null,
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
      setStateCrudProduct()
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    // console.log(files)
    listImagesFile.push(files);
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
      <div className="row">
        <div className="col-12">
          <div className="card dashboard-table mt-0">
            <div className="card-body">
              <div className="top-sec">
                <h3>Tous les produits</h3>
                <input
                  type="button"
                  className="btn btn-sm btn-solid"
                  aria-hidden="true"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropAddProduct"
                  value={"+ Ajouter Matériels"}
                />
              </div>
              <div className="table-responsive-md">
                <table className="table mb-0 product-table">
                  <thead>
                    <tr>
                      <th scope="col">image</th>
                      <th scope="col">Nom du Matériels </th>
                      <th scope="col">categories</th>
                      <th scope="col">prix</th>
                      <th scope="col">stock</th>
                      <th scope="col">editer/Supprimer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      
                      listMateriels.map((materiel)=>(
                        <TableRow materielItem={materiel} />
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                    <option value="Camion">Camion</option>
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
                className="btn btn-solid"
                data-bs-dismiss="modal"
                id="ajout" 
              >
                Annuler
              </button>
              <input
                type="button"
                className="btn btn-solid"
                value={"Ajouter Produit"}
                data-bs-dismiss="modal"
                onClick={handleOnclickSauvegardeAjout}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabPaneProducts;
