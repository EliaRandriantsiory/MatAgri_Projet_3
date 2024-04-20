import { Outlet, Link } from "react-router-dom";
import "./assets/css/homePage/homePage.css";
function HomePage_Layout() {
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
                          <a href="#">Accueil</a>
                        </li>
                        <li className="mega" id="hover-cls">
                          <a href="#">Matériel </a>
                          <ul className="mega-menu full-mega-menu">
                            <li>
                              <div className="container">
                                <div className="row">
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>invoice template</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-1.html"
                                            >
                                              invoice 1
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-2.html"
                                            >
                                              invoice 2
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-3.html"
                                            >
                                              invoice 3
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-4.html"
                                            >
                                              invoice 4
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="invoice-5.html"
                                            >
                                              invoice 5
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="menu-title mt-2">
                                        <h5>elements</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="elements.html">
                                              elements page
                                              <i
                                                className="ms-2 fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>email template</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/welcome.html"
                                            >
                                              welcome
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/new-product-announcement.html"
                                            >
                                              announcement
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/abandonment-email.html"
                                            >
                                              abandonment
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/offer.html"
                                            >
                                              offer
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/offer-2.html"
                                            >
                                              offer 2
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/product-review.html"
                                            >
                                              review
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/featured-products.html"
                                            >
                                              featured product
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>email template</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/black-friday.html"
                                            >
                                              black friday
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/christmas.html"
                                            >
                                              christmas
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/cyber-monday.html"
                                            >
                                              cyber-monday
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/flash-sale.html"
                                            >
                                              flash sale
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/email-order-success.html"
                                            >
                                              order success
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              target="_blank"
                                              href="../email-template/email-order-success-two.html"
                                            >
                                              order success 2
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>cookie bar</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="index.html">
                                              bottom
                                              <i
                                                className="ms-2 fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="fashion-4.html">
                                              bottom left
                                            </a>
                                          </li>
                                          <li>
                                            <a href="bicycle.html">
                                              bottom right
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="menu-title mt-2">
                                        <h5>search</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="marketplace-demo-2.html">
                                              ajax search
                                              <i
                                                className="ms-2 fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>model</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="index.html">Newsletter</a>
                                          </li>
                                          <li>
                                            <a href="index.html">
                                              exit
                                              <i
                                                className="ms-2 fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="christmas.html">
                                              christmas
                                            </a>
                                          </li>
                                          <li>
                                            <a href="furniture-3.html">
                                              black friday
                                            </a>
                                          </li>
                                          <li>
                                            <a href="fashion-4.html">
                                              cyber monday
                                            </a>
                                          </li>
                                          <li>
                                            <a href="marketplace-demo-3.html">
                                              new year
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="menu-title">
                                        <h5>add to cart</h5>
                                      </div>
                                      <div className="menu-content">
                                        <ul>
                                          <li>
                                            <a href="nursery.html">
                                              cart modal popup
                                            </a>
                                          </li>
                                          <li>
                                            <a href="vegetables.html">
                                              qty. counter
                                              <i
                                                className="fa fa-bolt icon-trend"
                                                aria-hidden="true"
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="bags.html">cart top</a>
                                          </li>
                                          <li>
                                            <a href="shoes.html">cart bottom</a>
                                          </li>
                                          <li>
                                            <a href="watch.html">cart left</a>
                                          </li>
                                          <li>
                                            <a href="tools.html">cart right</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <img
                                      src="../assets/images/menu-banner.jpg"
                                      className="img-fluid mega-img"
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                          <ul>
                            <li>
                              <a href="category-page(vegetables).html">
                                tab style<span className="new-tag">new</span>
                              </a>
                            </li>
                            <li>
                              <a href="category-page(top-filter).html">
                                top filter
                              </a>
                            </li>
                            <li>
                              <a href="category-page(modern).html">modern</a>
                            </li>
                            <li>
                              <a href="category-page.html">left sidebar</a>
                            </li>
                            <li>
                              <a href="category-page(right).html">
                                right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="category-page(no-sidebar).html">
                                no sidebar
                              </a>
                            </li>
                            <li>
                              <a href="category-page(sidebar-popup).html">
                                sidebar popup
                              </a>
                            </li>
                            <li>
                              <a href="category-page(metro).html">metro</a>
                            </li>
                            <li>
                              <a href="category-page(full-width).html">
                                full width
                              </a>
                            </li>
                            <li>
                              <a href="category-page(infinite-scroll).html">
                                infinite scroll
                              </a>
                            </li>
                            <li>
                              <a href="category-page(3-grid).html">
                                three grid
                              </a>
                            </li>
                            <li>
                              <a href="category-page(6-grid).html">six grid</a>
                            </li>
                            <li>
                              <a href="category-page(list-view).html">
                                list view
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">product</a>
                          <ul>
                            <li>
                              <a href="product-page(360-view).html">
                                360 view <span className="new-tag">new</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-page(video-thumbnail).html">
                                video thumbnail
                                <span className="new-tag">new</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">sidebar</a>
                              <ul>
                                <li>
                                  <a href="product-page.html">left sidebar</a>
                                </li>
                                <li>
                                  <a href="product-page(right-sidebar).html">
                                    right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(no-sidebar).html">
                                    no sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">thumbnail image</a>
                              <ul>
                                <li>
                                  <a href="product-page(left-image).html">
                                    left image
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(right-image).html">
                                    right image
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(image-outside).html">
                                    image outside
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">three column</a>
                              <ul>
                                <li>
                                  <a href="product-page(3-col-left).html">
                                    thumbnail left
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(3-col-right).html">
                                    thumbnail right
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(3-column).html">
                                    thubnail bottom
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="product-page(4-image).html">
                                four image
                              </a>
                            </li>
                            <li>
                              <a href="product-page(sticky).html">sticky</a>
                            </li>
                            <li>
                              <a href="product-page(accordian).html">
                                accordian
                              </a>
                            </li>
                            <li>
                              <a href="product-page(bundle).html">bundle</a>
                            </li>
                            <li>
                              <a href="product-page(image-swatch).html">
                                image swatch{" "}
                              </a>
                            </li>
                            <li>
                              <a href="product-page(vertical-tab).html">
                                vertical tab
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">pages</a>
                          <ul>
                            <li>
                              <a href="#">vendor</a>
                              <ul>
                                <li>
                                  <a href="vendor-dashboard.html">
                                    vendor dashboard
                                  </a>
                                </li>
                                <li>
                                  <a href="vendor-profile.html">
                                    vendor profile
                                  </a>
                                </li>
                                <li>
                                  <a href="become-vendor.html">become vendor</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">account</a>
                              <ul>
                                <li>
                                  <a href="wishlist.html">wishlist</a>
                                </li>
                                <li>
                                  <a href="cart.html">cart</a>
                                </li>
                                <li>
                                  <a href="dashboard.html">Dashboard</a>
                                </li>
                                <li>
                                  <a href="login.html">login</a>
                                </li>
                                <li>
                                  <a href="register.html">register</a>
                                </li>
                                <li>
                                  <a href="contact.html">contact</a>
                                </li>
                                <li>
                                  <a href="forget_pwd.html">forget password</a>
                                </li>
                                <li>
                                  <a href="profile.html">profile</a>
                                </li>
                                <li>
                                  <a href="checkout.html">checkout</a>
                                </li>
                                <li>
                                  <a href="order-success.html">order success</a>
                                </li>
                                <li>
                                  <a href="order-tracking.html">
                                    order tracking
                                    <span className="new-tag">new</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">portfolio</a>
                              <ul>
                                <li>
                                  <a href>grid</a>
                                  <ul>
                                    <li>
                                      <a href="grid-2-col.html">grid 2</a>
                                    </li>
                                    <li>
                                      <a href="grid-3-col.html">grid 3</a>
                                    </li>
                                    <li>
                                      <a href="grid-4-col.html">grid 4</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href>masonry</a>
                                  <ul>
                                    <li>
                                      <a href="masonary-2-grid.html">grid 2</a>
                                    </li>
                                    <li>
                                      <a href="masonary-3-grid.html">grid 3</a>
                                    </li>
                                    <li>
                                      <a href="masonary-4-grid.html">grid 4</a>
                                    </li>
                                    <li>
                                      <a href="masonary-fullwidth.html">
                                        full width
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="about-page.html">about us</a>
                            </li>
                            <li>
                              <a href="search.html">search</a>
                            </li>
                            <li>
                              <a href="review.html">review</a>
                            </li>
                            <li>
                              <a href="#">compare</a>
                              <ul>
                                <li>
                                  <a href="compare.html">compare</a>
                                </li>
                                <li>
                                  <a href="compare-2.html">compare-2</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="collection.html">collection</a>
                            </li>
                            <li>
                              <a href="lookbook.html">lookbook</a>
                            </li>
                            <li>
                              <a href="sitemap.html">site map</a>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">coming soon</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">blog</a>
                          <ul>
                            <li>
                              <a href="blog-page.html">left sidebar</a>
                            </li>
                            <li>
                              <a href="blog(right-sidebar).html">
                                right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog(no-sidebar).html">no sidebar</a>
                            </li>
                            <li>
                              <a href="blog-details.html">blog details</a>
                            </li>
                          </ul>
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
                        <li className="onhover-dropdown mobile-account">
                          <img
                            src="../assets/images/jewellery/icon/avatar.png"
                            className="opacity-1"
                            alt=""
                          />
                          <ul className="onhover-show-div">
                            <li>
                              <Link to="/SignUpProvider" data-lng="en">
                                Fournisseur
                              </Link>
                            </li>
                            <li>
                              <Link to="/SignUp" data-lng="es">
                                Agriculteur
                              </Link>
                            </li>
                            <li>
                              <Link to="/SignUpCooperative" data-lng="es">
                                Coopérative
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="onhover-div mobile-search">
                          <div>
                            <img
                              src="../assets/images/jewellery/icon/search.png"
                              onclick="openSearch()"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <i className="ti-search" onclick="openSearch()" />
                          </div>
                          <div id="search-overlay" className="search-overlay">
                            <div>
                              <span
                                className="closebtn"
                                onclick="closeSearch()"
                                title="Close Overlay"
                              >
                                ×
                              </span>
                              <div className="overlay-content">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-xl-12">
                                      <form>
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Search a Product"
                                          />
                                        </div>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          <i className="fa fa-search" />
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                            <h6>langages</h6>
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
                          <div>
                            <img
                              src="../assets/images/jewellery/icon/cart.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                            <i className="ti-shopping-cart" />
                          </div>
                          <ul className="show-div shopping-cart">
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
                          </ul>
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
        <div className="light-layout">
          <div className="container">
            <section className="small-section border-section border-top-0">
              <div hidden className="row">
                <div  className="col-lg-6">
                  <div className="subscribe">
                    <div>
                      <h4>SAVEZ TOUT D'ABORD !</h4>
                      <p>
                        Ne manquez rien de MatAgri en vous inscrivant à notre
                        newsletter.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form
                    action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda"
                    className="form-inline subscribe-form auth-form needs-validation"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                  >
                    <div className="form-group mx-sm-3">
                      <input
                        type="text"
                        className="form-control"
                        name="EMAIL"
                        id="mce-EMAIL"
                        placeholder="Entrer votre mail"
                        required="required"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-solid"
                      id="mc-submit"
                    >
                      souscrire
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    <img  src="assets/images/icon/logo/Logo-_Mat_2.png" alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-rss" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>Mes comptes</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">mens</a>
                      </li>
                      <li>
                        <a href="#">womens</a>
                      </li>
                      <li>
                        <a href="#">clothing</a>
                      </li>
                      <li>
                        <a href="#">accessories</a>
                      </li>
                      <li>
                        <a href="#">featured</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>Pourquoi nous choisir</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">shipping &amp; return</a>
                      </li>
                      <li>
                        <a href="#">secure shopping</a>
                      </li>
                      <li>
                        <a href="#">gallary</a>
                      </li>
                      <li>
                        <a href="#">affiliates</a>
                      </li>
                      <li>
                        <a href="#">contacts</a>
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
                        <i className="fa fa-map-marker" />
                        Multikart Demo Store, Demo store India 345-659
                      </li>
                      <li>
                        <i className="fa fa-phone" />
                        Call Us: 123-456-7898
                      </li>
                      <li>
                        <i className="fa fa-envelope" />
                        Email Us: <a href="#">Support@Multikart.com</a>
                      </li>
                      <li>
                        <i className="fa fa-fax" />
                        Fax: 123456
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

      <div
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
                    <h2>Women Pink Shirt</h2>
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
      </div>

      <div className="theme-settings">
        <ul>
          <li>
            <div className="dark-btn">Dark</div>
          </li>

          <li className="input-picker">
            <input
              id="ColorPicker1"
              type="color"
              defaultValue="#d4b196"
              name="Background"
            />
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
                      <a href="nft.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/58.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="nft.html" className="demo-text">
                        <h4>
                          NFT <span>New</span>
                        </h4>
                      </a>
                      <h4>
                        <a href="nft.html" className="demo-text"></a>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="vegetables-4.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/vegetables-4.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="vegetables-4.html" className="demo-text">
                        <h4>
                          Vegetables 4 <span>New</span>
                        </h4>
                      </a>
                      <h4>
                        <a href="vegetables-4.html" className="demo-text"></a>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="vegetables-5.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/vegetables-5.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="vegetables-5.html" className="demo-text">
                        <h4>
                          Vegetables 5 <span>New</span>
                        </h4>
                      </a>
                      <h4>
                        <a href="vegetables-5.html" className="demo-text"></a>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="gradient.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/gradient.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="gradient.html" className="demo-text">
                        <h4>gradient</h4>
                      </a>
                      <h4>
                        <a href="gradient.html" className="demo-text"></a>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="index.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="index.html" className="demo-text">
                        <h4>fashion</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-2.html" className="demo-text">
                        <h4>fashion 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-3.html" className="demo-text">
                        <h4>fashion 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-4.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-4.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-4.html" className="demo-text">
                        <h4>fashion 4</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-5.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-5.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-5.html" className="demo-text">
                        <h4>fashion 5</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-6.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-6.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-6.html" className="demo-text">
                        <h4>fashion 6</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="fashion-7.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/fashion-7.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="fashion-7.html" className="demo-text">
                        <h4>fashion 7</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="furniture.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/furniture.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="furniture.html" className="demo-text">
                        <h4>furniture</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="furniture-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/furniture-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="furniture-2.html" className="demo-text">
                        <h4>furniture 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="furniture-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/furniture-dark.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="furniture-3.html" className="demo-text">
                        <h4>furniture dark</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="electronic-1.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/electronics.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="electronic-1.html" className="demo-text">
                        <h4>electronics</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="electronic-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/electronics-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="electronic-2.html" className="demo-text">
                        <h4>electronics 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="electronic-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/electronics-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="electronic-3.html" className="demo-text">
                        <h4>electronics 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a
                        href="marketplace-demo.html"
                        className="layout-container"
                      >
                        <img
                          src="../assets/images/landing-page/demo/marketplace.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marketplace-demo.html" className="demo-text">
                        <h4>marketplace</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a
                        href="marketplace-demo-2.html"
                        className="layout-container"
                      >
                        <img
                          src="../assets/images/landing-page/demo/marketplace-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marketplace-demo-2.html" className="demo-text">
                        <h4>marketplace 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a
                        href="marketplace-demo-3.html"
                        className="layout-container"
                      >
                        <img
                          src="../assets/images/landing-page/demo/marketplace-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marketplace-demo-3.html" className="demo-text">
                        <h4>marketplace 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a
                        href="marketplace-demo-4.html"
                        className="layout-container"
                      >
                        <img
                          src="../assets/images/landing-page/demo/marketplace-4.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marketplace-demo-4.html" className="demo-text">
                        <h4>marketplace 4</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="vegetables.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/vegetables.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="vegetables.html" className="demo-text">
                        <h4>vegetables</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="vegetables-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/vegetables-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="vegetables-2.html" className="demo-text">
                        <h4>vegetables 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="vegetables-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/vegetables-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="vegetables-3.html" className="demo-text">
                        <h4>vegetables 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="jewellery.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/jewellery.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="jewellery.html" className="demo-text">
                        <h4>jewellery</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="jewellery-2.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/jewellery-2.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="jewellery-2.html" className="demo-text">
                        <h4>jewellery 2</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="jewellery-3.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/jewellery-3.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="jewellery-3.html" className="demo-text">
                        <h4>jewellery 3</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="bags.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/bag.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="bags.html" className="demo-text">
                        <h4>bag</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="watch.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/watch.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="watch.html" className="demo-text">
                        <h4>watch</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="medical.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/medical.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="medical.html" className="demo-text">
                        <h4>medical</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="perfume.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/perfume.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="perfume.html" className="demo-text">
                        <h4>perfume</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="yoga.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/yoga.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="yoga.html" className="demo-text">
                        <h4>yoga</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="christmas.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/christmas.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="christmas.html" className="demo-text">
                        <h4>christmas</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="bicycle.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/bicycle.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="bicycle.html" className="demo-text">
                        <h4>bicycle</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="marijuana.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/marijuana.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="marijuana.html" className="demo-text">
                        <h4>marijuana</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="gym-product.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/gym.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="gym-product.html" className="demo-text">
                        <h4>gym</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="tools.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/tools.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="tools.html" className="demo-text">
                        <h4>tools</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="shoes.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/shoes.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="shoes.html" className="demo-text">
                        <h4>shoes</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="books.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/books.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="books.html" className="demo-text">
                        <h4>books</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="kids.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/kids.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="kids.html" className="demo-text">
                        <h4>kids</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="game.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/game.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="game.html" className="demo-text">
                        <h4>game</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="beauty.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/beauty.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="beauty.html" className="demo-text">
                        <h4>beauty</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a
                        href="left_sidebar-demo.html"
                        className="layout-container"
                      >
                        <img
                          src="../assets/images/landing-page/demo/left-sidebar.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="left_sidebar-demo.html" className="demo-text">
                        <h4>left sidebar</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="video-slider.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/video-slider.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="video-slider.html" className="demo-text">
                        <h4>video slider</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="metro.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/metro.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="metro.html" className="demo-text">
                        <h4>metro</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="goggles.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/goggles.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="goggles.html" className="demo-text">
                        <h4>goggles</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="flower.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/flower.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="flower.html" className="demo-text">
                        <h4>flower</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="light.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/light.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="light.html" className="demo-text">
                        <h4>light</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="nursery.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/nursery.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="nursery.html" className="demo-text">
                        <h4>nursery</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="pets.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/pets.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="pets.html" className="demo-text">
                        <h4>pets</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="video.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/video.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="video.html" className="demo-text">
                        <h4>video</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="lookbook-demo.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/lookbook.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="lookbook-demo.html" className="demo-text">
                        <h4>lookbook</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="full-page.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/full-page.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="full-page.html" className="demo-text">
                        <h4>full page</h4>
                      </a>
                    </div>
                  </div>
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
                  <div className="col-md-4 col-6 text-center demo-effects">
                    <div className="set-position">
                      <a href="parallax.html" className="layout-container">
                        <img
                          src="../assets/images/landing-page/demo/parallax.jpg"
                          className="img-fluid bg-img bg-top"
                          alt=""
                        />
                      </a>
                      <a href="parallax.html" className="demo-text">
                        <h4>parallax</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade bd-example-modal-lg theme-modal cart-modal"
        id="addtocart"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
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
      </div>

      <div className="tap-top">
        <div>
          <i className="fa fa-angle-double-up" />
        </div>
      </div>
    </>
  );
}

export default HomePage_Layout;