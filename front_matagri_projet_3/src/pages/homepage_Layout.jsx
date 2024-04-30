import { Link, Outlet } from "react-router-dom";
import "./assets/css/homePage/homePage.css";
import { useEffect, useState } from "react";
function HomePage_Layout() {
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
  }, [localStorage.getItem("listPanier")]);
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
                        <li className="mobile-wishlist">
                          <a href="#">
                            <img
                              src="../assets/images/jewellery/icon/heart.png"
                              className="opacity-1"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li className="onhover-div mobile-account">
                          <a href>
                            <img
                              src="../assets/images/jewellery/icon/avatar.png"
                              className="opacity-1"
                              alt=""
                            />
                          </a>
                          <div className="show-div">
                            <ul
                              style={{
                                paddingLeft: "60px",
                                paddingBottom: "10px",
                                paddingTop: "10px",
                                paddingRight: "0px",
                                margin: "0",
                              }}
                            >
                              <li>
                                <Link
                                  to="/Login"
                                  style={{
                                    color: "black",
                                    fontSize: "18px",
                                    textAlign: "center",
                                  }}
                                >
                                  Se connecter
                                </Link>
                              </li>
                              <br />
                              <li>
                                <Link
                                  to="/choiceusers"
                                  style={{ color: "black", fontSize: "18px" }}
                                  data-lng="en"
                                >
                                  S' inscrire
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
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
                            <div>
                              <img
                                src="../assets/images/jewellery/icon/cart.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />

                              <i className="ti-shopping-cart">
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                  {countPanier}
                                  <span class="visually-hidden">
                                    unread messages
                                  </span>
                                </span>
                              </i>
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
                  <p style={{ textAlign: "center", fontSize: "14px" }}>
                    Application de location, livraison et mutualisation de
                    matériels agricoles.
                  </p>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fa-brands fa-facebook fa-lg"
                            style={{ color: "black" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa-brands fa-google fa-lg"
                            style={{ color: "black" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa-brands fa-twitter fa-lg"
                            style={{ color: "black" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa-brands fa-instagram fa-lg"
                            style={{ color: "black" }}
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
                    <h4>Liens utiles</h4>
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
                          Consulter les demandes de matériels
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
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          xxxxx
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>Pourquoi nous choisir ?</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          x1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          x2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          x3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          x4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ textAlign: "justify", fontSize: "14px" }}
                        >
                          contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>Nos informations</h4>
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
                        MatAgri, Faravohitra, <br />
                        101 Antananarivo
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
                        +261 20 34 20 125 43
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

      {/*<div
        className="modal fade bd-example-modal-lg theme-modal"
        id="quick-view"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content quick-view-modal">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="row">
                <div className="col-lg-6 col-xs-12">
                  <div className="quick-view-img">
                    <img
                      src="../assets/images/pro3/1.jpg"
                      alt=""
                      className="img-fluid blur-up lazyload"
                    />
                  </div>
                </div>
                <div className="col-lg-6 rtl-text">
                   <div className="product-right">
                    <h2>Eto zah</h2>
                    <h3>$32.96</h3>
                    <ul className="color-variant">
                      <li className="bg-light0" />
                      <li className="bg-light1" />
                      <li className="bg-light2" />
                    </ul>
                    <div className="border-product">
                      <h6 className="product-title">product details</h6>
                      <p>
                        Sed ut perspiciatis, unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                      </p>
                    </div>
                    <div className="product-description border-product">
                      <div className="size-box">
                        <ul>
                          <li className="active">
                            <a href="javascript:void(0)">s</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">m</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">l</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">xl</a>
                          </li>
                        </ul>
                      </div>
                      <h6 className="product-title">quantity</h6>
                      <div className="qty-box">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <button
                              type="button"
                              className="btn quantity-left-minus"
                              data-type="minus"
                              data-field
                            >
                              <i className="ti-angle-left" />
                            </button>{" "}
                          </span>
                          <input
                            type="text"
                            name="quantity"
                            className="form-control input-number"
                            defaultValue={1}
                          />{" "}
                          <span className="input-group-prepend">
                            <button
                              type="button"
                              className="btn quantity-right-plus"
                              data-type="plus"
                              data-field
                            >
                              <i className="ti-angle-right" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-buttons">
                      <a href="#" className="btn btn-solid">
                        add to cart
                      </a>{" "}
                      <a href="#" className="btn btn-solid">
                        view detail
                      </a>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}

      {/* <div className="theme-settings">
        <ul>
          <li>
            <div className="dark-btn"><img src={moon} alt="" style={{width:25}}/></div>
          </li>
        </ul>
      </div>
      <div className="scroll-setting-box">
        <div id="setting_box" className="setting-box">
          <a
            href="javascript:void(0)"
            className="overlay"
            onclick="closeSetting()"
          />
          <div className="setting_box_body">
            <div onclick="closeSetting()">
              <div className="sidebar-back text-start">
                <i className="fa fa-angle-left pe-2" aria-hidden="true" /> Back
              </div>
            </div>
            <div className="setting-body">
              <div className="setting-title">
                <div>
                  <img
                    src="../assets/images/icon/logo.png"
                    className="img-fluid"
                    alt=""
                  />
                  <h3>
                    50+ <span>demos</span> <br /> suit for any type of online
                    store.
                  </h3>
                </div>
              </div>
              <div className="setting-contant">
                <div className="row demo-section">
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a
                        href="instagram-shop.html"
                        className="layout-container"
                      >
                        <img
                          src="../assets/images/landing-page/demo/instagram.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="instagram-shop.html" className="demo-text">
                        <h4>instagram</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="modal fade bd-example-modal-lg theme-modal cart-modal"
        id="addtocart"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true">
          <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document">
            <div className="modal-content">
              <div className="modal-body modal1">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-12">
                    <div className="modal-bg addtocart">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <div className="media">
                        <a href="#">
                          <img
                            className="img-fluid blur-up lazyload pro-img"
                            src="../assets/images/fashion/product/43.jpg"
                            alt=""
                          />
                        </a>
                        <div className="media-body align-self-center text-center">
                          <a href="#">
                            <h6>
                              <i className="fa fa-check" />
                              Item
                              <span>men full sleeves</span>
                              <span> successfully added to your Cart</span>
                            </h6>
                          </a>
                          <div className="buttons">
                            <a href="#" className="view-cart btn btn-solid">
                              Your cart
                            </a>
                            <a href="#" className="checkout btn btn-solid">
                              Check out
                            </a>
                            <a href="#" className="continue btn btn-solid">
                              Continue shopping
                            </a>
                          </div>
                          <div className="upsell_payment">
                            <img
                              src="../assets/images/payment_cart.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="product-section">
                        <div className="col-12 product-upsell text-center">
                          <h4>Customers who bought this item also.</h4>
                        </div>
                        <div className="row" id="upsell_product">
                          <div className="product-box col-sm-3 col-6">
                            <div className="img-wrapper">
                              <div className="front">
                                <a href="#">
                                  <img
                                    src="../assets/images/fashion/product/1.jpg"
                                    className="img-fluid blur-up lazyload mb-1"
                                    alt="cotton top"
                                  />
                                </a>
                              </div>
                              <div className="product-detail">
                                <h6>
                                  <a href="#">
                                    <span>cotton top</span>
                                  </a>
                                </h6>
                                <h4>
                                  <span>$25</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="product-box col-sm-3 col-6">
                            <div className="img-wrapper">
                              <div className="front">
                                <a href="#">
                                  <img
                                    src="../assets/images/fashion/product/34.jpg"
                                    className="img-fluid blur-up lazyload mb-1"
                                    alt="cotton top"
                                  />
                                </a>
                              </div>
                              <div className="product-detail">
                                <h6>
                                  <a href="#">
                                    <span>cotton top</span>
                                  </a>
                                </h6>
                                <h4>
                                  <span>$25</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="product-box col-sm-3 col-6">
                            <div className="img-wrapper">
                              <div className="front">
                                <a href="#">
                                  <img
                                    src="../assets/images/fashion/product/13.jpg"
                                    className="img-fluid blur-up lazyload mb-1"
                                    alt="cotton top"
                                  />
                                </a>
                              </div>
                              <div className="product-detail">
                                <h6>
                                  <a href="#">
                                    <span>cotton top</span>
                                  </a>
                                </h6>
                                <h4>
                                  <span>$25</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="product-box col-sm-3 col-6">
                            <div className="img-wrapper">
                              <div className="front">
                                <a href="#">
                                  <img
                                    src="../assets/images/fashion/product/19.jpg"
                                    className="img-fluid blur-up lazyload mb-1"
                                    alt="cotton top"
                                  />
                                </a>
                              </div>
                              <div className="product-detail">
                                <h6>
                                  <a href="#">
                                    <span>cotton top</span>
                                  </a>
                                </h6>
                                <h4>
                                  <span>$25</span>
                                </h4>
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
      </div> */}

      <div className="tap-top">
        <div>
          <i className="fa fa-angle-double-up" />
        </div>
      </div>
    </>
  );
}

export default HomePage_Layout;
