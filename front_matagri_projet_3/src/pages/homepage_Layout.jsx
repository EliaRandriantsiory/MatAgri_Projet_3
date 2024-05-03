import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./assets/css/homePage/homePage.css";
import Avatar from './avatar';


function HomePage_Layout() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);


  const [listPanier, setListPanier] = useState([]);
  const [countPanier, setCountPanier] = useState();
  useEffect(() => {
    setListPanier(localStorage.getItem("listpanier"));
    console.log(localStorage.getItem("listpanier"));
    // console.log(listPanier.length);
    if (listPanier) {
      console.log(listPanier.length);
      setCountPanier(listPanier.length);
    }
  }, [localStorage.getItem("listpanier")]);

  return (
    <>
      <header className="header-2">
        <div className="mobile-fix-option dark-bg shadow-none" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="brand-logo">
                    <Link to="/">
                      {" "}
                      <img
                        src="assets/images/icon/logo/Logo-_Mat_2.png"
                        className="img-fluid blur-up lazyload logoHomePage"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <nav id="main-nav">
                      <div className="toggle-nav">
                        <i className="fa fa-bars sidebar-bar" />
                      </div>
                      <ul
                        id="main-menu"
                        className="sm pixelstrap sm-horizontal"
                      >
                        <li>
                          <div className="mobile-back text-end">
                            Retour
                            <i
                              className="fa fa-angle-right ps-2"
                              aria-hidden="true"
                            />
                          </div>
                        </li>
                        <li>
                          <Link to={"/home"}>Accueil</Link>
                          {/* <a href="#"></a> */}
                        </li>
                        <li className="mega" id="hover-cls">
                          <Link to={"/about"}>A propos</Link>
                        </li>
                        <li>
                          <Link to={"/Material"}>Matériels</Link>
                        </li>
                        {/* <li>
                          <a href="#">Partenaires</a>
                        </li> */}
                        <li>
                          <Link to={"/contact"}>Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div>
                    <div className="icon-nav">
                      <ul>


                        <Avatar/>

                        <li className="onhover-div mobile-search">
                          <Link to={"/search"}>
                            <img
                              src="../assets/images/jewellery/icon/search.png"
                              onclick="openSearch()"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <i className="ti-search" onclick="openSearch()" />
                          </Link>
                        </li>
                        <li className="onhover-div mobile-setting">
                          <div>
                            <img
                              src="../assets/images/jewellery/icon/controls.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <i className="ti-settings" />
                          </div>
                          <div className="show-div setting">
                            <h6>langues</h6>
                            <ul>
                              <li>
                                <a href="#">anglais</a>{" "}
                              </li>
                              <li>
                                <a href="#">français</a>{" "}
                              </li>
                            </ul>
                            <h6>monnaie</h6>
                            <ul className="list-inline">
                              <li>
                                <a href="#">ariary</a>{" "}
                              </li>
                              <li>
                                <a href="#">euro</a>{" "}
                              </li>
                              <li>
                                <a href="#">dollar</a>{" "}
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="onhover-div mobile-cart">


                          <Link to={"/Panier"}>
                            <div className="position-relative">

                              <img
                                src="../assets/images/jewellery/icon/cart.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />


                              <i className="ti-shopping-cart" />
                              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {countPanier}
                                <span class="visually-hidden">
                                  unread messages
                                </span>
                              </span>
                            </div>
                          </Link>
                          {/* Drop eo @ panier                           */}
                          {/* <ul className="show-div shopping-cart">
                            <li>
                              <div className="media">
                                <a href="#">
                                  <img
                                    alt=""
                                    className="me-3"
                                    src="../assets/images/fashion/product/1.jpg"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h4>item name</h4>
                                  </a>
                                  <h4>
                                    <span>1 x $ 299.00</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="close-circle">
                                <a href="#">
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="media">
                                <a href="#">
                                  <img
                                    alt=""
                                    className="me-3"
                                    src="../assets/images/fashion/product/2.jpg"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h4>item name</h4>
                                  </a>
                                  <h4>
                                    <span>1 x $ 299.00</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="close-circle">
                                <a href="#">
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="total">
                                <h5>
                                  subtotal : <span>$299.00</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <div className="buttons">
                                <a href="cart.html" className="view-cart">
                                  view cart
                                </a>
                                <a href="#" className="checkout">
                                  checkout
                                </a>
                              </div>
                            </li>
                          </ul> */}

                        {/* <Link to={"/Panier"}>
                          <div>
                            <img
                              src="../assets/images/jewellery/icon/cart.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <i className="ti-shopping-cart" />
                          </div>
                          </Link> */}



                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="footer-light">
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    <img src="assets/images/icon/logo/Logo-_Mat_2.png" alt="" />
                  </div>

                  <p style={{textAlign:'center' ,fontSize:'14px'}}>
                  Application de location, livraison et mutualisation de
                    matériels agricoles.
                  </p>
                  <div className="footer-social" style={{ marginLeft: '127px'}}>
                    <ul>
                      <li>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f " style={{ color: '#004225'}} />
{/* 
                  <p style={{ textAlign: "center", fontSize: "14px" }}>
                    Application de location, livraison et mutualisation de
                    matériels agricoles.
                  </p>
                  <div
                    className="footer-social"
                    style={{ marginLeft: "127px" }}
                  >
                    <ul>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            icon="fa-brands fa-facebook-f "
                            style={{ color: "#004225" }} */}
                          {/* /> */}


                        </a>
                      </li>
                      <li>
                        <a href="#">

                        <FontAwesomeIcon icon="fa-brands fa-google" style={{color:'#004225'}}/>

                        </a>
                      </li>
                      <li>
                        <a href="#">

                          <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ color: '#004225' }} />

                        </a>
                      </li>
                      <li>
                        <a href="#">

                        <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color:'#004225'}}/>

                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4 style={{ fontSize: '14px' }}>Nos catégories</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Tracteurs</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Motoculteurs</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Charrues</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Moissonneuses</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Décompactateur</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                  <h4 style={{ fontSize: '14px' }}>Pourquoi nous choisir ?</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Louer du matériel agricole</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Mutualisation</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Mes produits que j'adore</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Nous contacter</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4 style={{ fontSize: '14px', marginLeft: '25px' }}>Nos informations</h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li>
                        <i className="fa fa-map-marker" style={{textAlign:'justify' ,fontSize:'14px', paddingRight:'10px'}}/>

                        MATAgri, Faravohitra, <br/>
                        <p style={{ marginLeft:'20px'}}>101 Antananarivo</p>

                        {/* MatAgri, Faravohitra, <br/>101 Antananarivo */}

                      </li>
                      <li>
                        <i className="fa fa-phone" style={{textAlign:'justify' ,fontSize:'14px' , paddingRight:'10px'}}/>
                        +261 34 20 125 43
                      </li>
                      <li>
                        <i className="fa fa-envelope" style={{textAlign:'justify' ,fontSize:'14px' , paddingRight:'10px'}}/>
{/* <<<<<<< HEAD
                        <a href="#">matagri@gmail.com</a>
======= */}
                        Email : <a href="#">matagri@gmail.com</a>

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-footer">
          <div className="container">
            <div hidden className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="footer-end">
                  <p>
                    <i className="fa fa-copyright" aria-hidden="true" /> 2023-24
                    themeforest powered by pixelstrap
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="payment-card-bottom">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="../assets/images/icon/visa.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="../assets/images/icon/mastercard.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="../assets/images/icon/paypal.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="../assets/images/icon/american-express.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="../assets/images/icon/discover.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ToastContainer/>

      <div className={`tap-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <div>
        <i className="fa fa-angle-double-up" />
      </div>
    </div>
    </>
  );
}

export default HomePage_Layout;
