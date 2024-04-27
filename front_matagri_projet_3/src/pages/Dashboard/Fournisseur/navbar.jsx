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
    // initialisation donnée current user

    axios
      .get("http://localhost:8082/api/materiels/listMateriel")
      .then((response) => {
        setCurrentProfilUser(response.data);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
      });
  }, []);
  if (!currentProfilUser) {
    navigate("/home");
  }

  // console.log(listMateriel);

  //const handleOnClickLogout = (event) => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("email");
  // localStorage.removeItem("password");
  //localStorage.clear();
  //
  //    setListMateriel(response.data);
  // localStorage.setItem("email", response.data);
  // setCurrentProfilUser(response.data.user);
  // console.log(response.data)
  //    }
  //
  //
  //  if (email && password) {
  //axios
  //  .post("http://localhost:8082/api/home/authentification", {
  //    email: email,
  //    password: password,
  //  })
  //  .then((response) => {
  //    localStorage.setItem("email", response.data);
  //    setCurrentProfilUser(response.data.user);
  //    // console.log(response.data)
  //  })
  //  .catch((error) => {
  //    console.error(error);
  //  });
  //  }
  //
  //
  //console.log(listMateriel);

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

  const handleUpload = (file) => {
    // const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("file", file);
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
    //<div className="row">
    //  <div className="col-lg-3">
    //    <div className="profile-top">
    //      <div className="profile-image">
    //        <img
    //          src="/front_matagri_projet_3/public/assets/images/logos/17.png"
    //          alt=""
    //          className="img-fluid"
    //        />
    //      </div>
    //      <div className="profile-detail">
    //        <h5>Fashion Store</h5>
    //        <h6>750 followers | 10 review</h6>
    //        <h6>{currentProfilUser.name}</h6>
    //      </div>
    //    </div>
    //    <div className="faq-tab">
    //      <ul className="nav nav-tabs" id="top-tab" role="tablist">
    //        <li className="nav-item">
    //          <Link
    //            data-bs-toggle="tab"
    //            className="nav-link active"
    //            to={"#dashboard"}
    //          >
    //            dashboard
    //          </Link>
    //        </li>
    //        <li className="nav-item">
    //          <Link data-bs-toggle="tab" className="nav-link" to={"#products"}>
    //            products
    //          </Link>
    //        </li>
    //        <li className="nav-item">
    //          <Link data-bs-toggle="tab" className="nav-link" to={"#orders"}>
    //            orders
    //          </Link>
    //        </li>
    //        <li className="nav-item">
    //          <Link data-bs-toggle="tab" className="nav-link" to={"#profile"}>
    //            profile
    //          </Link>
    //        </li>
    //        <li className="nav-item">
    //          <Link data-bs-toggle="tab" className="nav-link" to={"#settings"}>
    //            settings
    //          </Link>
    //        </li>
    //        <li className="nav-item">
    //          <Link
    //            className="nav-link"
    //            data-toggle="modal"
    //            data-bs-target="#logout"
    //            to={"/home"}
    //            onClick={(event) => handleOnClickLogout(event)}
    //          >
    //            logout
    //          </Link>
    //        </li>
    //      </ul>
    //    </div>
    //  </div>
    //  <div className="col-lg-9">
    //    <div className="faq-content tab-content" id="top-tabContent">
    //      <div className="tab-pane fade show active" id="dashboard">
    //        <TabPaneDashboard />
    //      </div>
    //      <div className="tab-pane fade" id="products">
    //        <TabPaneProducts />
    //      </div>
    //      <div className="tab-pane fade" id="orders">
    //        <TabPaneOrders />
    //      </div>
    //      <div className="tab-pane fade" id="profile">
    //        <TabPaneProfile />
    //      </div>
    //      <div className="tab-pane fade" id="settings">
    //        <TabPaneSetting />
    //      </div>
    //    </div>
    //  </div>
    //</div>

    <>
      <div className="row">
        <div className="col-lg-3">
          <div className="profile-top">
            <div className="profile-image">
              <img
                src="../assets/images/logos/17.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="profile-detail">
              <h6>Mon, profil</h6>
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
                  className="nav-link"
                  to={"#products"}
                >
                  materiels
                </Link>
              </li>
              <li className="nav-item">
                <Link data-bs-toggle="tab" className="nav-link" to={"#orders"}>
                  Etat du materiel
                </Link>
              </li>
              <li className="nav-item">
                <Link data-bs-toggle="tab" className="nav-link" to={"#profile"}>
                  profile
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
                        <h5>materiel</h5>
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
                        <h5>materiels louer</h5>
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
      ></div>
    </>
  );
}
export default Navigation;
