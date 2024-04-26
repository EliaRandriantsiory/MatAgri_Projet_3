import aro from '../../pages/assets/images/aro1.png';

function CartProduitModel() {
  return (
    <div>
        <div>
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="page-title">
                  <h2>Nos materiels</h2>
                </div>
              </div>
              <div className="col-sm-6">
                <nav aria-label="breadcrumb" className="theme-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">materiels</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* section start */}
        <section className="section-b-space ratio_asos">
          <div className="collection-wrapper">
            <div className="container">
              <div className="row">
                <div className="collection-content col">
                  <div className="page-main-content">
                     <div className="top-banner-wrapper">
                      <img src={aro} className="img-fluid blur-up lazyload" alt="" />
                    </div>
                      <div className="product-page-filter">
                        <select>
                            <option value="High to low">Matériels</option>
                            <option value="Low to High">Tracteur</option>
                            <option value="Low to High">Kubota</option>
                        </select>
                    </div>
                      <div className="product-wrapper-grid">
                        <div className="row margin-res">
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/produitMatagri/produit1.png"
                                  className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/produitMatagri/produit1blanc.png"
                                  className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="cart-info cart-wrap">
                                  <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
                                </div>
                              </div>
                              <div className="product-detail">
                                <div>
                                  <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                                  <a href="product-page(no-sidebar).html">
                                    <h6>Motoculteur</h6>
                                  </a>
                                  <h4>Ar 160 000.00</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/produitMatagri/produit2.png" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/produitMatagri/produit2blanc.png" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="cart-info cart-wrap">
                                  <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
                                </div>
                              </div>
                              <div className="product-detail">
                                <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
                                  <i className="fa fa-star" /> <i className="fa fa-star" />
                                </div>
                                <a href="product-page(no-sidebar).html">
                                  <h6>Broyeur</h6>
                                </a>
                                <h4>Ar 80 000.00</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      <div className="product-pagination">
                        <div className="theme-paggination-block">
                          <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                              <nav aria-label="Page navigation">
                                <ul className="pagination">
                                  <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true"><i className="fa fa-chevron-left" aria-hidden="true" /></span> <span className="sr-only">Previous</span></a></li>
                                  <li className="page-item active"><a className="page-link" href="#">1</a>
                                  </li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                                  <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true"><i className="fa fa-chevron-right" aria-hidden="true" /></span> <span className="sr-only">Next</span></a></li>
                                </ul>
                              </nav>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                              <div className="product-search-count-bottom">
                                <h5>Showing Products 1-24 of 10 Result</h5>
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
        
        {/* Quick-view modal popup start*/}
        <div className="modal fade bd-example-modal-lg theme-modal" id="quick-view" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content quick-view-modal">
              <div className="modal-body">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <div className="row">
                  <div className="col-lg-6 col-xs-12">
                    <div className="quick-view-img"><img src="../assets/images/produitMatagri/produit1.png" alt="" className="img-fluid blur-up lazyload" /></div>
                  </div>
                  <div className="col-lg-6 rtl-text">
                    <div className="product-right">
                      <h2>Motoculteur</h2>
                      <h3>Ar 160 000.00</h3>
                      <div className="border-product">
                        <h6 className="product-title">Details matériels</h6>
                          <p>Moteur de 4,5 l<p/>
                          <p>Puissance : 100 kW</p>
                          <p>Longueur : 1,55 m</p>
                          <p>Largeur : 1,55 m</p>
                          <p></p>Cabine basse avec filtration de catégorie 4 (en option)</p>
                      </div>
                      <div className="product-description border-product">
                        <h6 className="product-title">Nombre</h6>
                        <div className="qty-box">
                          <div className="input-group"><span className="input-group-prepend"><button type="button" className="btn quantity-left-minus" data-type="minus" data-field><i className="ti-angle-left" /></button> </span>
                            <input type="text" name="quantity" className="form-control input-number" defaultValue={1} /> <span className="input-group-prepend"><button type="button" className="btn quantity-right-plus" data-type="plus" data-field><i className="ti-angle-right" /></button></span>
                          </div>
                        </div>
                      </div>
                      <div className="product-buttons"><a href="#" className="btn btn-solid">add to cart</a> <a href="#" className="btn btn-solid">view detail</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick-view modal popup end*/}
        
        {/* theme setting */}
        <div className="theme-settings">
          <ul>
            <li>
              <div className="dark-btn">Dark</div>
            </li>
          </ul>
        </div>
        <div className="scroll-setting-box">
          <div id="setting_box" className="setting-box">
            <a href="javascript:void(0)" className="overlay" onclick="closeSetting()" />
            <div className="setting_box_body">
              <div onclick="closeSetting()">
                <div className="sidebar-back text-start"><i className="fa fa-angle-left pe-2" aria-hidden="true" /> Back
                </div>
              </div>
              <div className="setting-body">
                <div className="setting-title">
                  <div>
                    <img src="../assets/images/icon/logo.png" className="img-fluid" alt="" />
                    <h3>50+ <span>demos</span> <br /> suit for any type of online store.</h3>
                  </div>
                </div>
                <div className="setting-contant">
                  <div className="row demo-section">
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="nft.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/58.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="nft.html" className="demo-text">
                          <h4>NFT <span>New</span>
                          </h4></a><h4><a href="nft.html" className="demo-text">
                          </a>
                        </h4></div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="vegetables-4.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/vegetables-4.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="vegetables-4.html" className="demo-text">
                          <h4>Vegetables 4 <span>New</span>
                          </h4></a><h4><a href="vegetables-4.html" className="demo-text">
                          </a>
                        </h4></div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="vegetables-5.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/vegetables-5.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="vegetables-5.html" className="demo-text">
                          <h4>Vegetables 5 <span>New</span>
                          </h4></a><h4><a href="vegetables-5.html" className="demo-text">
                          </a>
                        </h4></div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="gradient.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/gradient.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="gradient.html" className="demo-text">
                          <h4>gradient</h4></a><h4><a href="gradient.html" className="demo-text">
                          </a>
                        </h4></div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="index.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/fashion.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="index.html" className="demo-text">
                          <h4>fashion</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="fashion-2.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/fashion-2.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="fashion-2.html" className="demo-text">
                          <h4>fashion 2</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="fashion-3.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/fashion-3.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="fashion-3.html" className="demo-text">
                          <h4>fashion 3</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="fashion-4.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/fashion-4.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="fashion-4.html" className="demo-text">
                          <h4>fashion 4</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="fashion-5.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/fashion-5.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="fashion-5.html" className="demo-text">
                          <h4>fashion 5</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="fashion-6.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/fashion-6.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="fashion-6.html" className="demo-text">
                          <h4>fashion 6</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="fashion-7.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/fashion-7.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="fashion-7.html" className="demo-text">
                          <h4>fashion 7</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="furniture.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/furniture.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="furniture.html" className="demo-text">
                          <h4>furniture</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="furniture-2.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/furniture-2.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="furniture-2.html" className="demo-text">
                          <h4>furniture 2</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="furniture-3.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/furniture-dark.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="furniture-3.html" className="demo-text">
                          <h4>furniture dark</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="electronic-1.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/electronics.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="electronic-1.html" className="demo-text">
                          <h4>electronics</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="electronic-2.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/electronics-2.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="electronic-2.html" className="demo-text">
                          <h4>electronics 2</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="electronic-3.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/electronics-3.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="electronic-3.html" className="demo-text">
                          <h4>electronics 3</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="marketplace-demo.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/marketplace.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="marketplace-demo.html" className="demo-text">
                          <h4>marketplace</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="marketplace-demo-2.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/marketplace-2.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="marketplace-demo-2.html" className="demo-text">
                          <h4>marketplace 2</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="marketplace-demo-3.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/marketplace-3.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="marketplace-demo-3.html" className="demo-text">
                          <h4>marketplace 3</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="marketplace-demo-4.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/marketplace-4.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="marketplace-demo-4.html" className="demo-text">
                          <h4>marketplace 4</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="vegetables.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/vegetables.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="vegetables.html" className="demo-text">
                          <h4>vegetables</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="vegetables-2.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/vegetables-2.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="vegetables-2.html" className="demo-text">
                          <h4>vegetables 2</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="vegetables-3.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/vegetables-3.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="vegetables-3.html" className="demo-text">
                          <h4>vegetables 3</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="jewellery.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/jewellery.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="jewellery.html" className="demo-text">
                          <h4>jewellery</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="jewellery-2.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/jewellery-2.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="jewellery-2.html" className="demo-text">
                          <h4>jewellery 2</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="jewellery-3.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/jewellery-3.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="jewellery-3.html" className="demo-text">
                          <h4>jewellery 3</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="bags.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/bag.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="bags.html" className="demo-text">
                          <h4>bag</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="watch.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/watch.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="watch.html" className="demo-text">
                          <h4>watch</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="medical.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/medical.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="medical.html" className="demo-text">
                          <h4>medical</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="perfume.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/perfume.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="perfume.html" className="demo-text">
                          <h4>perfume</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="yoga.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/yoga.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="yoga.html" className="demo-text">
                          <h4>yoga</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="christmas.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/christmas.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="christmas.html" className="demo-text">
                          <h4>christmas</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="bicycle.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/bicycle.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="bicycle.html" className="demo-text">
                          <h4>bicycle</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="marijuana.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/marijuana.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="marijuana.html" className="demo-text">
                          <h4>marijuana</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="gym-product.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/gym.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="gym-product.html" className="demo-text">
                          <h4>gym</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="tools.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/tools.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="tools.html" className="demo-text">
                          <h4>tools</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="shoes.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/shoes.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="shoes.html" className="demo-text">
                          <h4>shoes</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="books.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/books.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="books.html" className="demo-text">
                          <h4>books</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="kids.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/kids.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="kids.html" className="demo-text">
                          <h4>kids</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="game.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/game.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="game.html" className="demo-text">
                          <h4>game</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="beauty.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/beauty.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="beauty.html" className="demo-text">
                          <h4>beauty</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="left_sidebar-demo.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/left-sidebar.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="left_sidebar-demo.html" className="demo-text">
                          <h4>left sidebar</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="video-slider.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/video-slider.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="video-slider.html" className="demo-text">
                          <h4>video slider</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="metro.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/metro.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="metro.html" className="demo-text">
                          <h4>metro</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="goggles.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/goggles.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="goggles.html" className="demo-text">
                          <h4>goggles</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="flower.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/flower.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="flower.html" className="demo-text">
                          <h4>flower</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="light.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/light.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="light.html" className="demo-text">
                          <h4>light</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="nursery.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/nursery.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="nursery.html" className="demo-text">
                          <h4>nursery</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="pets.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/pets.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="pets.html" className="demo-text">
                          <h4>pets</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="video.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/video.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="video.html" className="demo-text">
                          <h4>video</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="lookbook-demo.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/lookbook.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="lookbook-demo.html" className="demo-text">
                          <h4>lookbook</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="full-page.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/full-page.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="full-page.html" className="demo-text">
                          <h4>full page</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="instagram-shop.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/instagram.jpg" className="img-fluid bg-img bg-top" alt="" />
                        </a>
                        <a href="instagram-shop.html" className="demo-text">
                          <h4>instagram</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 text-center demo-effects">
                      <div className="set-position">
                        <a href="parallax.html" className="layout-container">
                          <img src="../assets/images/landing-page/demo/parallax.jpg" className="img-fluid bg-img bg-top" alt="" />
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
        {/* theme setting */}
        {/* tap to top start */}
        <div className="tap-top">
          <div><i className="fa fa-angle-double-up" /></div>
        </div>
      </div>
    </div>
  );
}

export default CartProduitModel;
