import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddProduit from "../../../components/componentproduct/addproduct";
import TableRow from "../../../components/componentproduct/tableRowMat";
import TabPaneSetting from "./component/tabPaneSettings";
import TabPaneDashboard from "./component/tabPaneDashboard";
import TabPaneProducts from "./component/tabPaneProducts";
import TabPaneOrders from "./component/tabPaneOrders";
import TabPaneProfile from "./component/tabPaneProfile";

function Navigation() {
  
  const [currentProfilUser, setCurrentProfilUser] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [listImage, setListImage] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
      // initialisation donnée current user
    axios
      .post("http://localhost:8082/api/home/authentification", {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("pwd"),
      })
      .then((response) => {
        setCurrentProfilUser(response.data)
        localStorage.setItem("currentUser",JSON.stringify(response.data))
      });

  }, []);
  if(!currentProfilUser){
    navigate("/home");
  }
  
  // console.log(listMateriel);

  const handleOnClickLogout = (event) => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
    localStorage.clear()
    setCurrentProfilUser({});

    navigate("/home");
  };
  const handleOpenModal = () => {
    setShowModal(true);
};

  return (
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
                {currentProfilUser.name}
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

            <TabPaneDashboard />

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
            <TabPaneProducts  />
            </div>
            <div className="tab-pane fade" id="orders">
              <TabPaneOrders />
            </div>
            <div className="tab-pane fade" id="profile">
            <TabPaneProfile />
            </div>
            <div className="tab-pane fade" id="settings">
              <TabPaneSetting />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navigation;
