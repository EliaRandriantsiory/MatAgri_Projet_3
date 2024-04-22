import { Link } from "react-router-dom";

function DashBordAgriculteur() {
  return (
    <div>
      <section className="dashboard-section section-b-space user-dashboard-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="dashboard-sidebar">
                <div className="profile-top">
                  <div className="profile-image">
                    <img
                      src="../assets/images/avtar.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="profile-detail">
                    <h5>Mark Jecno</h5>
                    <h6>mark.jecno@mail.com</h6>
                  </div>
                </div>
                <div className="faq-tab">
                  <ul className="nav nav-tabs" id="top-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        data-bs-target="#info"
                        className="nav-link active"
                      >
                        Mon compte
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        data-bs-target="#orders"
                        className="nav-link"
                      >
                        Mes commandes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        className="nav-link"
                      >
                        Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="faq-content tab-content" id="top-tabContent">
                <div className="tab-pane fade show active" id="info">
                  <div className="counter-section">
                    <div className="welcome-msg">
                      <h4>Hello, MARK JECNO !</h4>
                      <p>
                        From your My Account Dashboard you have the ability to
                        view a snapshot of your recent account activity and
                        update your account information. Select a link below to
                        view or edit information.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="counter-box">
                          <img
                            src="../assets/images/icon/dashboard/sale.png"
                            className="img-fluid"
                          />
                          <div>
                            <h3>25</h3>
                            <h5>Total de la commande</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="counter-box">
                          <img
                            src="../assets/images/icon/dashboard/homework.png"
                            className="img-fluid"
                          />
                          <div>
                            <h3>5</h3>
                            <h5>Commandes en attente</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="counter-box">
                          <img
                            src="../assets/images/icon/dashboard/order.png"
                            className="img-fluid"
                          />
                          <div>
                            <h3>50</h3>
                            <h5>Liste de souhaits</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-account box-info">
                      <div className="box-head">
                        <h4>Account Information</h4>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="box">
                            <div className="box-title">
                              <h3>Contact Information</h3>
                              <a href="#">Éditer</a>
                            </div>
                            <div className="box-content">
                              <h6>Mark Jecno</h6>
                              <h6>mark-jecno@gmail.com</h6>
                              <h6>
                                <a href="#">Changer le mot de passe</a>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="box">
                            <div className="box-title">
                              <h3>Newsletters</h3>
                              <a href="#">Edit</a>
                            </div>
                            <div className="box-content">
                              <p>
                                You are currently not subscribed to any
                                newsletter.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box mt-3">
                        <div className="box-title">
                          <h3>Address Book</h3>
                          <a href="#">Manage Addresses</a>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <h6>Default Billing Address</h6>
                            <address>
                              You have not set a default billing address.
                              <br />
                              <a href="#">Edit Address</a>
                            </address>
                          </div>
                          <div className="col-sm-6">
                            <h6>Default Shipping Address</h6>
                            <address>
                              You have not set a default shipping address.
                              <br />
                              <a href="#">Edit Address</a>
                            </address>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="address">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mt-0">
                        <div className="card-body">
                          <div className="top-sec">
                            <h3>Address Book</h3>
                            <a href="#" className="btn btn-sm btn-solid">
                              + add new
                            </a>
                          </div>
                          <div className="address-book-section">
                            <div className="row g-4">
                              <div className="select-box active col-xl-4 col-md-6">
                                <div className="address-box">
                                  <div className="top">
                                    <h6>
                                      mark jecno <span>home</span>
                                    </h6>
                                  </div>
                                  <div className="middle">
                                    <div className="address">
                                      <p>549 Sulphur Springs Road</p>
                                      <p>Downers Grove, IL</p>
                                      <p>60515</p>
                                    </div>
                                    <div className="number">
                                      <p>
                                        mobile:{" "}
                                        <span>+91 123 - 456 - 7890</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="bottom">
                                    <a
                                      href="javascript:void(0)"
                                      data-bs-target="#edit-address"
                                      data-bs-toggle="modal"
                                      className="bottom_btn"
                                    >
                                      edit
                                    </a>
                                    <a href="#" className="bottom_btn">
                                      remove
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="select-box col-xl-4 col-md-6">
                                <div className="address-box">
                                  <div className="top">
                                    <h6>
                                      mark jecno <span>office</span>
                                    </h6>
                                  </div>
                                  <div className="middle">
                                    <div className="address">
                                      <p>549 Sulphur Springs Road</p>
                                      <p>Downers Grove, IL</p>
                                      <p>60515</p>
                                    </div>
                                    <div className="number">
                                      <p>
                                        mobile:{" "}
                                        <span>+91 123 - 456 - 7890</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="bottom">
                                    <a
                                      href="javascript:void(0)"
                                      data-bs-target="#edit-address"
                                      data-bs-toggle="modal"
                                      className="bottom_btn"
                                    >
                                      edit
                                    </a>
                                    <a href="#" className="bottom_btn">
                                      remove
                                    </a>
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
                <div className="tab-pane fade" id="orders">
                  <div className="row">
                    <div className="col-12">
                      <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-sm">
                          <div className="top-sec">
                            <h3>My Orders</h3>
                          </div>
                          <div className="table-responsive-xl">
                            <table className="table cart-table order-table">
                              <thead>
                                <tr className="table-head">
                                  <th scope="col">image</th>
                                  <th scope="col">Order Id</th>
                                  <th scope="col">Détails du produit</th>
                                  <th scope="col">Statut</th>
                                  <th scope="col">Prix</th>
                                  <th scope="col">Vue</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/1.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <span className="mt-0">#125021</span>
                                  </td>
                                  <td>
                                    <span className="fs-6">
                                      Purple polo tshirt
                                    </span>
                                  </td>
                                  <td>
                                    <span className="badge rounded-pill bg-success custom-badge">
                                      Shipped
                                    </span>
                                  </td>
                                  <td>
                                    <span className="theme-color fs-6">
                                      $49.54
                                    </span>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <i className="fa fa-eye text-theme" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/2.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <span className="mt-0">#125367</span>
                                  </td>
                                  <td>
                                    <span className="fs-6">
                                      Sleevless white top
                                    </span>
                                  </td>
                                  <td>
                                    <span className="badge rounded-pill bg-danger custom-badge">
                                      Pending
                                    </span>
                                  </td>
                                  <td>
                                    <span className="theme-color fs-6">
                                      $49.54
                                    </span>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <i className="fa fa-eye text-theme" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/27.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <p>#125948</p>
                                  </td>
                                  <td>
                                    <p className="fs-6">
                                      multi color polo tshirt
                                    </p>
                                  </td>
                                  <td>
                                    <span className="badge rounded-pill bg-success custom-badge">
                                      Shipped
                                    </span>
                                  </td>
                                  <td>
                                    <p className="theme-color fs-6">$49.54</p>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <i className="fa fa-eye text-theme" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/28.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <p>#127569</p>
                                  </td>
                                  <td>
                                    <p className="fs-6">
                                      Candy red solid tshirt
                                    </p>
                                  </td>
                                  <td>
                                    <span className="badge rounded-pill bg-success custom-badge">
                                      Shipped
                                    </span>
                                  </td>
                                  <td>
                                    <p className="theme-color fs-6">$49.54</p>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <i className="fa fa-eye text-theme" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/33.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <p>#125753</p>
                                  </td>
                                  <td>
                                    <p className="fs-6">
                                      multicolored polo tshirt
                                    </p>
                                  </td>
                                  <td>
                                    <span className="badge rounded-pill bg-secondary custom-badge">
                                      Canceled
                                    </span>
                                  </td>
                                  <td>
                                    <p className="theme-color fs-6">$49.54</p>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <i className="fa fa-eye text-theme" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/34.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <span>#125021</span>
                                  </td>
                                  <td>
                                    <span className="fs-6">
                                      Men's Sweatshirt
                                    </span>
                                  </td>
                                  <td>
                                    <span className="badge rounded-pill bg-secondary custom-badge">
                                      Canceled
                                    </span>
                                  </td>
                                  <td>
                                    <span className="theme-color fs-6">
                                      $49.54
                                    </span>
                                  </td>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <i className="fa fa-eye text-theme" />
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="wishlist">
                  <div className="row">
                    <div className="col-12">
                      <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-sm">
                          <div className="top-sec">
                            <h3>My Wishlist</h3>
                          </div>
                          <div className="table-responsive-xl">
                            <table className="table cart-table wishlist-table">
                              <thead>
                                <tr className="table-head">
                                  <th scope="col">image</th>
                                  <th scope="col">Order Id</th>
                                  <th scope="col">Product Details</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/1.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <span className="mt-0">#125021</span>
                                  </td>
                                  <td>
                                    <span>Purple polo tshirt</span>
                                  </td>
                                  <td>
                                    <span className="theme-color fs-6">
                                      $49.54
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      className="btn btn-xs btn-solid"
                                    >
                                      Move to Cart
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/2.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <span className="mt-0">#125367</span>
                                  </td>
                                  <td>
                                    <span>Sleevless white top</span>
                                  </td>
                                  <td>
                                    <span className="theme-color fs-6">
                                      $49.54
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      className="btn btn-xs btn-solid"
                                    >
                                      Move to Cart
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/27.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <span>#125948</span>
                                  </td>
                                  <td>
                                    <span>multi color polo tshirt</span>
                                  </td>
                                  <td>
                                    <span className="theme-color fs-6">
                                      $49.54
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      className="btn btn-xs btn-solid"
                                    >
                                      Move to Cart
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/28.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <span>#127569</span>
                                  </td>
                                  <td>
                                    <span>Candy red solid tshirt</span>
                                  </td>
                                  <td>
                                    <span className="theme-color fs-6">
                                      $49.54
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      className="btn btn-xs btn-solid"
                                    >
                                      Move to Cart
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/33.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <span>#125753</span>
                                  </td>
                                  <td>
                                    <span>multicolored polo tshirt</span>
                                  </td>
                                  <td>
                                    <span className="theme-color fs-6">
                                      $49.54
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      className="btn btn-xs btn-solid"
                                    >
                                      Move to Cart
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/pro3/34.jpg"
                                        className="blur-up lazyloaded"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <span>#125021</span>
                                  </td>
                                  <td>
                                    <span>Men's Sweatshirt</span>
                                  </td>
                                  <td>
                                    <span className="theme-color fs-6">
                                      $49.54
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      className="btn btn-xs btn-solid"
                                    >
                                      Move to Cart
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="payment">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mt-0">
                        <div className="card-body">
                          <div className="top-sec">
                            <h3>Saved Cards</h3>
                            <a href="#" className="btn btn-sm btn-solid">
                              + add new
                            </a>
                          </div>
                          <div className="address-book-section">
                            <div className="row g-4">
                              <div className="select-box active col-xl-4 col-md-6">
                                <div className="address-box">
                                  <div className="bank-logo">
                                    <img
                                      src="../assets/images/bank-logo.png"
                                      className="bank-logo"
                                    />
                                    <img
                                      src="../assets/images/visa.png"
                                      className="network-logo"
                                    />
                                  </div>
                                  <div className="card-number">
                                    <h6>Card Number</h6>
                                    <h5>6262 6126 2112 1515</h5>
                                  </div>
                                  <div className="name-validity">
                                    <div className="left">
                                      <h6>name on card</h6>
                                      <h5>Mark Jecno</h5>
                                    </div>
                                    <div className="right">
                                      <h6>validity</h6>
                                      <h5>XX/XX</h5>
                                    </div>
                                  </div>
                                  <div className="bottom">
                                    <a
                                      href="javascript:void(0)"
                                      data-bs-target="#edit-address"
                                      data-bs-toggle="modal"
                                      className="bottom_btn"
                                    >
                                      edit
                                    </a>
                                    <a href="#" className="bottom_btn">
                                      remove
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="select-box col-xl-4 col-md-6">
                                <div className="address-box">
                                  <div className="bank-logo">
                                    <img
                                      src="../assets/images/bank-logo1.png"
                                      className="bank-logo"
                                    />
                                    <img
                                      src="../assets/images/visa.png"
                                      className="network-logo"
                                    />
                                  </div>
                                  <div className="card-number">
                                    <h6>Card Number</h6>
                                    <h5>6262 6126 2112 1515</h5>
                                  </div>
                                  <div className="name-validity">
                                    <div className="left">
                                      <h6>name on card</h6>
                                      <h5>Mark Jecno</h5>
                                    </div>
                                    <div className="right">
                                      <h6>validity</h6>
                                      <h5>XX/XX</h5>
                                    </div>
                                  </div>
                                  <div className="bottom">
                                    <a
                                      href="javascript:void(0)"
                                      data-bs-target="#edit-address"
                                      data-bs-toggle="modal"
                                      className="bottom_btn"
                                    >
                                      edit
                                    </a>
                                    <a href="#" className="bottom_btn">
                                      remove
                                    </a>
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
                <div className="tab-pane fade" id="profile">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mt-0">
                        <div className="card-body">
                          <div className="dashboard-box">
                            <div className="dashboard-title">
                              <h4>profile</h4>
                              <a className="edit-link" href="#">
                                edit
                              </a>
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
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>email address</h6>
                                    </div>
                                    <div className="right">
                                      <h6>mark.jecno@gmail.com</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Country / Region</h6>
                                    </div>
                                    <div className="right">
                                      <h6>Downers Grove, IL</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Year Established</h6>
                                    </div>
                                    <div className="right">
                                      <h6>2018</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Total Employees</h6>
                                    </div>
                                    <div className="right">
                                      <h6>101 - 200 People</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>category</h6>
                                    </div>
                                    <div className="right">
                                      <h6>clothing</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>street address</h6>
                                    </div>
                                    <div className="right">
                                      <h6>549 Sulphur Springs Road</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>city/state</h6>
                                    </div>
                                    <div className="right">
                                      <h6>Downers Grove, IL</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>zip</h6>
                                    </div>
                                    <div className="right">
                                      <h6>60515</h6>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="dashboard-title mt-lg-5 mt-3">
                              <h4>login details</h4>
                              <a className="edit-link" href="#">
                                edit
                              </a>
                            </div>
                            <div className="dashboard-detail">
                              <ul>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Email Address</h6>
                                    </div>
                                    <div className="right">
                                      <h6>
                                        mark.jecno@gmail.com{" "}
                                        <a className="edit-link" href="#">
                                          edit
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Phone No.</h6>
                                    </div>
                                    <div className="right">
                                      <h6>
                                        +01 4485 5454
                                        <a className="edit-link" href="#">
                                          Edit
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Password</h6>
                                    </div>
                                    <div className="right">
                                      <h6>
                                        *******{" "}
                                        <a className="edit-link" href="#">
                                          Edit
                                        </a>
                                      </h6>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="security">
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
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios2"
                                        defaultValue="option2"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios2"
                                      >
                                        Enable Notifications
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios3"
                                        defaultValue="option3"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios3"
                                      >
                                        Get notification for my own activity
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios4"
                                        defaultValue="option4"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios4"
                                      >
                                        DND
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
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios1"
                                        id="exampleRadios5"
                                        defaultValue="option5"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios5"
                                      >
                                        This is temporary
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios1"
                                        id="exampleRadios6"
                                        defaultValue="option6"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios6"
                                      >
                                        other
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
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios3"
                                        id="exampleRadios8"
                                        defaultValue="option8"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios8"
                                      >
                                        Want to switch on other account
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios3"
                                        id="exampleRadios9"
                                        defaultValue="option9"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios9"
                                      >
                                        other
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
        </div>
      </section>
      {/*  dashboard section end */}
      {/* Modal start */}
      <div
        className="modal logout-modal fade"
        id="logout"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Logging Out
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Do you want to log out?</div>
            <div className="modal-footer">
              <a
                href="#"
                className="btn btn-dark btn-custom"
                data-bs-dismiss="modal"
              >
                no
              </a>
              <a href="index.html" className="btn btn-solid btn-custom">
                yes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBordAgriculteur;
