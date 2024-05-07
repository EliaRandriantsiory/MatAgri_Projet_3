import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import React, { useEffect, useState } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./assets/css/homePage/homePage.css";
import Avatar from './avatar';

import "./assets/css/homePage/homePage.css";





import LogoSection from './homePage/sectionLogo';
import ServiceSection from './homePage/sectionService';

function HomePage_Layout() {

    const [isVisible, setIsVisible] = useState(false);
    const [isConnected, setIsConnected] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);

  const [listPanier, setListPanier] = useState([]);

  const [countPanier, setCountPanier] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedListPanier = JSON.parse(localStorage.getItem("listpanier"));
    if (storedListPanier) {
      setListPanier(storedListPanier);
      setCountPanier(storedListPanier.length);
    }

  }, [localStorage.getItem("listpanier")]);
  localStorage.getItem("currentUser")
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('currentUser'))){
      const userData = JSON.parse(localStorage.getItem('currentUser')) || {};
      setIsConnected(true);
      setCurrentUser(userData);
    
    }
    
  }, []);
  const handleOnClickLogout = (event) => {

    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setIsConnected(false);

    setCurrentUser({});
    navigate("/home");
  };

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

                      {isConnected ? (
                      <li className="onhover-div mobile-account">
                          <h4 style={{fontStyle:""}}>{currentUser.lastname}</h4>
                      <div className="show-div">
                        <ul style={{ paddingLeft: '60px', paddingBottom:'10px',paddingTop:'10px', paddingRight: '0px', margin: '0' }}>
                          <li>
                            <Link to={"/ProfileAgriculteur"} style={{color : 'black', fontSize:'18px', textAlign:'center'}}>Mon profil</Link>
                          </li>
                          <br/>
                          <li>
                            <a href="#" onClick={handleOnClickLogout} style={{color : 'black', fontSize:'18px'}} data-lng="en">
                              Se déconnecter
                            </a>
                          </li>
                        </ul>
                        </div>
                      </li>): (
                        <Avatar />
                      )}
                      

                        <li className="onhover-div mobile-search">
                          <Link to={"/search"}>
                            {/* <img
                              src="../assets/images/jewellery/icon/search.png"
                              onclick="openSearch()"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            /> */}
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="2xl" style={{color: "#000000",}} />
                            <i className="ti-search" onclick="openSearch()" />
                          </Link>
                        </li>
                        <li className="onhover-div mobile-setting">
                          <div>
                            {/* <img
                              src="../assets/images/jewellery/icon/controls.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            /> */}
                            <FontAwesomeIcon icon="fa-solid fa-gear" size="2xl" style={{color: "#000000",}} />
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
                              {/* <img
                                src="../assets/images/jewellery/icon/cart.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              /> */}
                              <FontAwesomeIcon icon="fa-solid fa-basket-shopping" size="2xl" style={{color: "#000000",}} />
                              <i className="ti-shopping-cart" />
                              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {countPanier}
                                <carteProduitCompnent></carteProduitCompnent>
                                <span class="visually-hidden">
                                  unread messages
                                </span>
                              </span>
                            </div>
                          </Link>
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
      <br />
      <ServiceSection/>
      <br/>
      <h3 style={{marginLeft:"839px",marginTop:"-60px", position:"absolute"}}>Nos partenaires :</h3>
      <br />
      <LogoSection />
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
                            style={{ color: "#004225" }}
                          />
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
                          <FontAwesomeIcon
                            icon="fa-brands fa-google"
                            style={{ color: "#004225" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            icon="fa-brands fa-x-twitter"
                            style={{ color: "#004225" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            icon="fa-brands fa-instagram"
                            style={{ color: "#004225" }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4 style={{ fontSize: "14px" }}>Nos catégories</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >

                          Motoculteur

                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >

                          Tracteur/Charrue

                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >

                          Dechaumeur/Pulverisation

                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >

                          Semoir/moissonneuseBatteuse

                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4 style={{ fontSize: "14px" }}>
                      Pourquoi nous choisir ?
                    </h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          Louer du matériel agricole
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          Mutualisation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          Mes produits que j'adore
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          Nous contacter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4 style={{ fontSize: "14px", marginLeft: "25px" }}>
                      Nos informations
                    </h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li>
                        <i
                          className="fa fa-map-marker"
                          style={{
                            textAlign: "justify",
                            fontSize: "14px",
                            paddingRight: "10px",
                          }}
                        />
                        MATAgri, Faravohitra, <br />
                        <p style={{ marginLeft: "20px" }}>101 Antananarivo</p>
                        {/* MatAgri, Faravohitra, <br/>101 Antananarivo */}
                      </li>
                      <li>
                        <i
                          className="fa fa-phone"
                          style={{
                            textAlign: "justify",
                            fontSize: "14px",
                            paddingRight: "10px",
                          }}
                        />
                        +261 34 20 125 43
                      </li>
                      <li>
                        <i
                          className="fa fa-envelope"
                          style={{
                            textAlign: "justify",
                            fontSize: "14px",
                            paddingRight: "10px",
                          }}
                        />
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

      <ToastContainer />

      <div
        className={`tap-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <div>
          <i className="fa fa-angle-double-up" />
        </div>
      </div>
    </>
  );
}

export default HomePage_Layout;
