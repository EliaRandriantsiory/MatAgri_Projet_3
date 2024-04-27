


import { Link } from "react-router-dom";
function ProductBox({ materielItem }) {

  return (
    <div className="col-xl-3 col-6 col-grid-box">
      <div className="product-box">
        <div className="img-wrapper">
          <div className="front">
            <a href="#">
              <img
                src="../assets/images/pro3/35.jpg"
                className="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </a>
          </div>
          <div className="back">
            <a href="#">
              <img
                src="../assets/images/pro3/36.jpg"
                className="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </a>
          </div>
          <div className="cart-info cart-wrap">
            <button
              data-bs-toggle="modal"
              data-bs-target="#addtocart"
              title="Add to cart"
            >
              <i className="ti-shopping-cart"></i>
            </button>
            <a href="javascript:void(0)" title="Add to Wishlist">
              <i className="ti-heart" aria-hidden="true"></i>
            </a>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#quick-view"
              title="Quick View"
            >
              <i className="ti-search" aria-hidden="true"></i>
            </a>
            <a href="compare.html" title="Compare">
              <i className="ti-reload" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* section start */}
        <section className="section-b-space ratio_asos">
          <div className="collection-wrapper">
            <div className="container">
              <div className="row">
                <div className="collection-content col">
                  <div className="page-main-content">
                    
                    <div className="collection-product-wrapper">
                      <div className="product-top-filter">
                        <div className="row">
                          <div className="col-12">
                            <div className="product-filter-content">
                              <div className="search-count">
                                <h5>Affichage des produits 1-24 sur 10 résultats</h5>
                              </div>
                              <div className="product-page-filter">
                                <select>
                                  <option value="High to low">Filtre</option>
                                  <option value="Low to High">Tracteur</option>
                                  <option value="Low to High">Camion</option>
                                  <option value="Low to High">50 Products</option>
                                  <option value="Low to High">100 Products</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-wrapper-grid">
                        <div className="row margin-res">
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/35.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/36.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="cart-info cart-wrap">
                                  <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
                                </div>
                              </div>
                              <div className="product-detail">
                                <div>
                                  <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                                  <a href="product-page(no-sidebar).html">
                                    <h6>Candy red solid tshirt</h6>
                                  </a>
                                  <p>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen
                                    book</p>
                                  <h4>Ar 45 000.00</h4>
                                  <ul className="color-variant">
                                    <li className="bg-light0" />
                                    <li className="bg-light1" />
                                    <li className="bg-light2" />
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/27.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/28.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>Purple polo tshirt</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar 40 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/1.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/2.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>Sleevless white top</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar 650 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/33.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/34.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>multi color polo tshirt</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar 65 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/27.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/28.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>Purple polo tshirt</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar 400 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/35.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/36.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>Candy red solid tshirt</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen
                                  book</p>
                                <h4>Ar 450 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/27.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/28.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>Purple polo tshirt</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar 400 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/1.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/2.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>Sleevless white top</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar 650 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/27.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/28.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>Purple polo tshirt</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar400 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/1.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/2.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>Sleevless white top</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar 650 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/33.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/34.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>multi color polo tshirt</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar 65 000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-6 col-grid-box">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <div className="front">
                                  <a href="#"><img src="../assets/images/pro3/1.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                </div>
                                <div className="back">
                                  <a href="#"><img src="../assets/images/pro3/2.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
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
                                  <h6>Sleevless white top</h6>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley
                                  of type and scrambled it to make a type specimen book
                                </p>
                                <h4>Ar 65000.00</h4>
                                <ul className="color-variant">
                                  <li className="bg-light0" />
                                  <li className="bg-light1" />
                                  <li className="bg-light2" />
                                </ul>
                              </div>
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
        {/* section End */}
        {/* footer start */}
        <footer className="footer-light">
          <div className="light-layout">
            <div className="container">
              <section className="small-section border-section border-top-0">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="subscribe">
                      <div>
                        <h4>TOUT SAVOIR EN PREMIER !</h4>
                        <p>Ne manquez jamais rien de MATAgri en vous inscrivant à notre newsletter.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <form action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda" className="form-inline subscribe-form auth-form needs-validation" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                      <div className="form-group mx-sm-3">
                        <input type="text" className="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email" required="required" />
                      </div>
                      <button type="submit" className="btn btn-solid" id="mc-submit">s'abonner</button>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </footer>
        {/* footer end */}
        {/* Quick-view modal popup start*/}
        {/* Quick-view modal popup end*/}
        {/* theme setting */}
        <div className="theme-settings">
          <ul>
            <li>
              <div className="dark-btn">Dark</div>
            </li>
          </ul>
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

export default ProductBox;
