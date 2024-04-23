
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modification from "./modification";
function Navigation() {

  const [currentProfilUSer, setCurrentProfilUser] = useState({});
  useEffect(() => {
    axios.post('http://localhost:8082/api/home/authentification',{
      email:"rakoto@gmail.com",
      password:"rakoton"
    }

    )
  .then((response) => {
    // Récupérer les données renvoyées par le backend
    // setCurrentUser(response.data);
     setCurrentProfilUser({...response.data}) 
    
  })
  .catch((error) => {
    // Gérer les erreurs de la requête
    console.error(error);
  });
  
  },[])
 
  const navigate = useNavigate();
  
  // const handleOnClickLogout = (event) => {
  //   currentProfilUSer({})
  //   Navigate("/home");
  // };
  // setCurrentProfilUser({...user})
    console.log(currentProfilUSer)
    if (Object.keys(currentProfilUSer).length !== 0) {
        console.log("Bonjour");
      } else {
        navigate("/home");
        console.log("Erreur");
      }

  
  
  // console.log(currentProfilUSer);
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
            <h6>{currentProfilUSer.email}</h6>
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
              <Link data-bs-toggle="tab" className="nav-link" to={"#products"}>
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
              <Link data-bs-toggle="tab" className="nav-link" to={"#settings"}>
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
                      <a href="#" className="btn btn-sm btn-solid">
                        + Ajouter Matériels
                      </a>
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
                          <tr>
                            <th scope="row">
                              <img
                                src="/front_matagri_projet_3/public/assets/images/dashboard/product/1.jpg"
                                alt=""
                                className="blur-up lazyloaded"
                              />
                            </th>
                            <td>Caterpillar</td>
                            <td>tracteur</td>
                            <td className="fw-bold text-theme">250 000 Ar</td>
                            <td>3</td>
                            <td>
                              <Modification/>
                              <a href="#">
                                <i
                                  className="fa fa-trash-o ms-1 text-theme"
                                  aria-hidden="true"
                                />
                              </a>
                            </td>
                          </tr>
                          {/* Repeat this structure for other rows */}
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
  );
}

export default Navigation;
