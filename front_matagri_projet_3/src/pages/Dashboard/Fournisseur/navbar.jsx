import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddProduit from "../../../components/componentproduct/addproduct";
import TableRow from "../../../components/componentproduct/tableRowMat";
function Navigation() {
  // const [listImage, setListImage] = useState([])
  const [nomMateriel, setNomMateriel] = useState("");
  const [categorieMateriel, setCategorieMateriel] = useState("");
  const [prixMateriel, setPrixMateriel] = useState();
  const [stockMateriel, setStockMateriel] = useState();
  const [descriptionMateriel, setDescriptionMateriel] = useState("");

  const [listMateriel, setListMateriel] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentProfilUser, setCurrentProfilUser] = useState({});
  const [showModal, setShowModal] = useState(false);
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

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/materiels/listMateriel")
      .then((response) => {
        setListMateriel(response.data);
        // localStorage.setItem("email", response.data);
        // setCurrentProfilUser(response.data.user);
        // console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });

    if (email && password) {
      axios
        .post("http://localhost:8082/api/home/authentification", {
          email: email,
          password: password,
        })
        .then((response) => {
          localStorage.setItem("email", response.data);
          setCurrentProfilUser(response.data.user);
          // console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  console.log(listMateriel);

  const handleOnClickLogout = (event) => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setCurrentProfilUser({});
    navigate("/home");
  };
  const handleOpenModal = () => {
    setShowModal(true);
};

  const handleImageChange = (e) => {
    // console.log(listImage)

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

  // const TableRow = () => {
  //   return (
  //     <tr>
  //       <th scope="row">
  //         <img
  //           src="/front_matagri_projet_3/public/assets/images/dashboard/product/1.jpg"
  //           alt=""
  //           className="blur-up lazyloaded"
  //         />
  //       </th>
  //       <td>Caterpillar</td>
  //       <td>tracteur</td>
  //       <td className="fw-bold text-theme">250 000 Ar</td>
  //       <td>3</td>
  //       <td>
  //         <Modification />
  //         <SupprimerMateriel />
  //       </td>
  //     </tr>
  //   );
  // };
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
        id_user: 1,
        prixMAt: prixMateriel,
      })
      .then((response) => {
        // localStorage.setItem("email", response.data);
        // setCurrentProfilUser(response.data.user);
        // console.log(response.data)
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
    <>
      <div className="row">
        <div className="col-lg-3">
          <div className="profile-top">
            <div className="profile-image">
              <img
                src="/front_matagri_projet_3/public/assets/images/logos/17.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="profile-detail">
              <h5>Fashion Store</h5>
              <h6>750 followers | 10 review</h6>
              <h6>
                {localStorage.getItem("email")
                  ? localStorage.getItem("email")
                  : "Email non disponible"}
              </h6>
            </div>
          </div>
          <div className="faq-tab">
            <ul className="nav nav-tabs" id="top-tab" role="tablist">
              <li className="nav-item">
                <Link
                  data-bs-toggle="tab"
                  className="nav-link active"
                  to={"#dashboard"}
                >
                  dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-bs-toggle="tab"
                  className="nav-link"
                  to={"#products"}
                >
                  products
                </Link>
              </li>
              <li className="nav-item">
                <Link data-bs-toggle="tab" className="nav-link" to={"#orders"}>
                  orders
                </Link>
              </li>
              <li className="nav-item">
                <Link data-bs-toggle="tab" className="nav-link" to={"#profile"}>
                  profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-bs-toggle="tab"
                  className="nav-link"
                  to={"#settings"}
                >
                  settings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="modal"
                  data-bs-target="#logout"
                  to={"/home"}
                  onClick={(event) => handleOnClickLogout(event)}
                >
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="faq-content tab-content" id="top-tabContent">
            <div className="tab-pane fade show active" id="dashboard">
              <div className="counter-section">
                <div className="row">
                  <div className="col-md-4">
                    <div className="counter-box">
                      <img
                        src="/front_matagri_projet_3/public/assets/images/icon/dashboard/order.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div>
                        <h3>25</h3>
                        <h5>total produits</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="counter-box">
                      <img
                        src="/front_matagri_projet_3/public/assets/images/icon/dashboard/sale.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div>
                        <h3>12500</h3>
                        <h5>Ventes totales</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="counter-box">
                      <img
                        src="/front_matagri_projet_3/public/assets/images/icon/dashboard/homework.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div>
                        <h3>50</h3>
                        <h5>Commande en attente</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="card">
                    <div className="card-body">
                      <div id="chart" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-body">
                      <div id="chart-order" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="card">
                  <div className="card-body">
                    <div id="chart" />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <div id="chart-order" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card dashboard-table">
                  <div className="card-body">
                    <h3>trending products</h3>
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">image</th>
                          <th scope="col">Nom du produit</th>
                          <th scope="col">prix</th>
                          <th scope="col">ventes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <img
                              src="/front_matagri_projet_3/public/assets/images/dashboard/product/1.jpg"
                              className="blur-up lazyloaded"
                              alt=""
                            />
                          </th>
                          <td>neck velvet dress</td>
                          <td>$205</td>
                          <td>1000</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              src="/front_matagri_projet_3/public/assets/images/dashboard/product/9.jpg"
                              className="blur-up lazyloaded"
                              alt=""
                            />
                          </th>
                          <td>belted trench coat</td>
                          <td>$350</td>
                          <td>800</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              src="/front_matagri_projet_3/public/assets/images/pro3/34.jpg"
                              className="blur-up lazyloaded"
                              alt=""
                            />
                          </th>
                          <td>man print tee</td>
                          <td>$150</td>
                          <td>750</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card dashboard-table">
                  <div className="card-body">
                    <h3>recent orders</h3>
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">order id</th>
                          <th scope="col">product details</th>
                          <th scope="col">status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#21515</th>
                          <td>neck velvet dress</td>
                          <td>
                            <span className="badge rounded-pill bg-success-10 text-success custom-badge">
                              shipped
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#78153</th>
                          <td>belted trench coat</td>
                          <td>
                            <span className="badge rounded-pill bg-danger-10 text-danger custom-badge">
                              pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#51512</th>
                          <td>man print tee</td>
                          <td>
                            <span className="badge rounded-pill bg-secondary-10 text-secondary custom-badge">
                              cancelled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#78153</th>
                          <td>belted trench coat</td>
                          <td>
                            <span className="badge rounded-pill bg-danger-10 text-danger custom-badge">
                              pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#51512</th>
                          <td>man print tee</td>
                          <td>
                            <span className="badge rounded-pill bg-success-10 text-success custom-badge">
                              shipped
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="products">
            <div className="row">
              <div className="col-12">
                <div className="card dashboard-table mt-0">
                  <div className="card-body">
                    <div className="top-sec">
                      <h3>Tous les produits</h3>
                      <AddProduit/>
                    </div>
                    <div className="table-responsive-md">
                      <table className="table mb-0 product-table">

                        <thead>
                          <tr>
                            <th scope="col">image</th>
                            <th scope="col">Nom du produit</th>
                            <th scope="col">prix</th>
                            <th scope="col">ventes</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <img
                                src="/front_matagri_projet_3/public/assets/images/dashboard/product/1.jpg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                            </th>
                            <td>neck velvet dress</td>
                            <td>$205</td>
                            <td>1000</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <img
                                src="/front_matagri_projet_3/public/assets/images/dashboard/product/9.jpg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                            </th>
                            <td>belted trench coat</td>
                            <td>$350</td>
                            <td>800</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <img
                                src="/front_matagri_projet_3/public/assets/images/pro3/34.jpg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                            </th>
                            <td>man print tee</td>
                            <td>$150</td>
                            <td>750</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card dashboard-table">
                    <div className="card-body">
                      <h3>recent orders</h3>
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th scope="col">order id</th>
                            <th scope="col">product details</th>
                            <th scope="col">status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">#21515</th>
                            <td>neck velvet dress</td>
                            <td>
                              <span className="badge rounded-pill bg-success-10 text-success custom-badge">
                                shipped
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#78153</th>
                            <td>belted trench coat</td>
                            <td>
                              <span className="badge rounded-pill bg-danger-10 text-danger custom-badge">
                                pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#51512</th>
                            <td>man print tee</td>
                            <td>
                              <span className="badge rounded-pill bg-secondary-10 text-secondary custom-badge">
                                cancelled
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#78153</th>
                            <td>belted trench coat</td>
                            <td>
                              <span className="badge rounded-pill bg-danger-10 text-danger custom-badge">
                                pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#51512</th>
                            <td>man print tee</td>
                            <td>
                              <span className="badge rounded-pill bg-success-10 text-success custom-badge">
                                shipped
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="products">
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
                            {listMateriel.map((materiel) => (
                              <TableRow materielItem={{ ...materiel }} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="orders">
              <div className="row">
                <div className="col-12">
                  <div className="card dashboard-table mt-0">
                    <div className="card-body">
                      <div className="top-sec">
                        <h3>orders</h3>
                        <a href="#" className="btn btn-sm btn-solid">
                          add product
                        </a>
                      </div>
                      <div className="table-responsive-sm">
                        <table className="table mb-0 order-table-vendor">
                          <thead>
                            <tr>
                              <th scope="col">order id</th>
                              <th scope="col">product details</th>
                              <th scope="col">status</th>
                              <th scope="col">price</th>
                            </tr>
                          </thead>
                          <tbody>{/* Order rows */}</tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile">
              <div className="row">
                <div className="col-12">
                  <div className="card mt-0">
                    <div className="card-body">
                      <div className="dashboard-box">
                        <div className="dashboard-title">
                          <h4>profile</h4>
                          <span
                            data-toggle="modal"
                            data-bs-target="#edit-profile"
                          >
                            edit
                          </span>
                        </div>
                        <div className="dashboard-detail">
                          <ul>
                            <li>
                              <div className="details">
                                <div className="left">
                                  <h6>company name</h6>
                                </div>
                                <div className="right">
                                  <h6>Fashion Store</h6>
                                </div>
                              </div>
                            </li>
                            {/* Repeat this structure for other list items */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="settings">
              <div className="row">
                <div className="col-12">
                  <div className="card mt-0">
                    <div className="card-body">
                      <div className="dashboard-box">
                        <div className="dashboard-title">
                          <h4>settings</h4>
                        </div>
                        <div className="dashboard-detail">
                          <div className="account-setting">
                            <h5>Notifications</h5>
                            <div className="row">
                              <div className="col">
                                <div className="form-check">
                                  <input
                                    className="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    defaultValue="option1"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleRadios1"
                                  >
                                    Allow Desktop Notifications
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="account-setting">
                            <h5>deactivate account</h5>
                            <div className="row">
                              <div className="col">
                                <div className="form-check">
                                  <input
                                    className="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios1"
                                    id="exampleRadios4"
                                    defaultValue="option4"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleRadios4"
                                  >
                                    I have a privacy concern
                                  </label>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-solid btn-xs"
                                >
                                  Deactivate Account
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="account-setting">
                            <h5>Delete account</h5>
                            <div className="row">
                              <div className="col">
                                <div className="form-check">
                                  <input
                                    className="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios3"
                                    id="exampleRadios7"
                                    defaultValue="option7"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleRadios7"
                                  >
                                    No longer usable
                                  </label>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-solid btn-xs"
                                >
                                  Delete Account
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
    </>
  );
}

export default Navigation;
