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
        <div className="product-detail">
          <div>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <a href="product-page(no-sidebar).html">
              <h6>{materielItem.nomMat}</h6>
            </a>
            <p>{materielItem.descriptionMat}</p>
            <h4>{materielItem.prixMAt} Ar</h4>
            <ul className="color-variant">
              <li className="bg-light0"></li>
              <li className="bg-light1"></li>
              <li className="bg-light2"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
// function CartProduitModel() {
// return (
//   <div>
//       <div>
//       <div className="breadcrumb-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-6">
//               <div className="page-title">
//                 <h2>collection</h2>
//               </div>
//             </div>
//             <div className="col-sm-6">
//               <nav aria-label="breadcrumb" className="theme-breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item"><a href="index.html">home</a></li>
//                   <li className="breadcrumb-item active" aria-current="page">collection</li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* breadcrumb end */}
//       {/* section start */}
//       <section className="section-b-space ratio_asos">
//         <div className="collection-wrapper">
//           <div className="container">
//             <div className="row">
//               <div className="collection-content col">
//                 <div className="page-main-content">
//                   <div className="top-banner-wrapper">
//                     <a href="#"><img src="../assets/images/mega-menu/2.jpg" className="img-fluid blur-up lazyload" alt="" /></a>
//                     <div className="top-banner-content small-section">
//                       <h4>BIGGEST DEALS ON TOP BRANDS</h4>
//                       <p>The trick to choosing the best wear for yourself is to keep in mind your body
//                         type, individual style, occasion and also the time of day or weather.
//                         In addition to eye-catching products from top brands, we also offer an easy
//                         30-day return and exchange policy, free and fast shipping across all pin codes,
//                         cash or card on delivery option, deals and discounts, among other perks. So,
//                         sign up now and shop for westarn wear to your heart’s content on Multikart. </p>
//                     </div>
//                   </div>
//                   <div className="collection-product-wrapper">
//                     <div className="product-top-filter">
//                       <div className="row">
//                         <div className="col-12">
//                           <div className="product-filter-content">
//                             <div className="search-count">
//                               <h5>Showing Products 1-24 of 10 Result</h5>
//                             </div>
//                             <div className="collection-view">
//                               <ul>
//                                 <li><i className="fa fa-th grid-layout-view" /></li>
//                                 <li><i className="fa fa-list-ul list-layout-view" /></li>
//                               </ul>
//                             </div>
//                             <div className="collection-grid-view">
//                               <ul>
//                                 <li><img src="../assets/images/icon/2.png" alt="" className="product-2-layout-view" /></li>
//                                 <li><img src="../assets/images/icon/3.png" alt="" className="product-3-layout-view" /></li>
//                                 <li><img src="../assets/images/icon/4.png" alt="" className="product-4-layout-view" /></li>
//                                 <li><img src="../assets/images/icon/6.png" alt="" className="product-6-layout-view" /></li>
//                               </ul>
//                             </div>
//                             <div className="product-page-per-view">
//                               <select>
//                                 <option value="High to low">24 Products Par Page</option>
//                                 <option value="Low to High">50 Products Par Page</option>
//                                 <option value="Low to High">100 Products Par Page</option>
//                               </select>
//                             </div>
//                             <div className="product-page-filter">
//                               <select>
//                                 <option value="High to low">Sorting items</option>
//                                 <option value="Low to High">50 Products</option>
//                                 <option value="Low to High">100 Products</option>
//                               </select>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="product-wrapper-grid">
//                       <div className="row margin-res">
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/35.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/36.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div>
//                                 <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
//                                 <a href="product-page(no-sidebar).html">
//                                   <h6>Candy red solid tshirt</h6>
//                                 </a>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and
//                                   typesetting industry. Lorem Ipsum has been the
//                                   industry's standard dummy text ever since the 1500s,
//                                   when an unknown printer took a galley
//                                   of type and scrambled it to make a type specimen
//                                   book</p>
//                                 <h4>$45.00</h4>
//                                 <ul className="color-variant">
//                                   <li className="bg-light0" />
//                                   <li className="bg-light1" />
//                                   <li className="bg-light2" />
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/27.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/28.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>Purple polo tshirt</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$40.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/1.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/2.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>Sleevless white top</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$65.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/33.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/34.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>multi color polo tshirt</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$65.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/27.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/28.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>Purple polo tshirt</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$40.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/35.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/36.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>Candy red solid tshirt</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen
//                                 book</p>
//                               <h4>$45.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/27.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/28.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>Purple polo tshirt</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$40.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/1.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/2.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>Sleevless white top</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$65.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/27.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/28.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>Purple polo tshirt</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$40.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/1.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/2.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>Sleevless white top</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$65.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/33.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/34.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>multi color polo tshirt</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$65.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xl-3 col-6 col-grid-box">
//                           <div className="product-box">
//                             <div className="img-wrapper">
//                               <div className="front">
//                                 <a href="#"><img src="../assets/images/pro3/1.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="back">
//                                 <a href="#"><img src="../assets/images/pro3/2.jpg" className="img-fluid blur-up lazyload bg-img" alt="" /></a>
//                               </div>
//                               <div className="cart-info cart-wrap">
//                                 <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button> <a href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></a> <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></a> <a href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></a>
//                               </div>
//                             </div>
//                             <div className="product-detail">
//                               <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
//                                 <i className="fa fa-star" /> <i className="fa fa-star" />
//                               </div>
//                               <a href="product-page(no-sidebar).html">
//                                 <h6>Sleevless white top</h6>
//                               </a>
//                               <p>Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the
//                                 industry's standard dummy text ever since the 1500s,
//                                 when an unknown printer took a galley
//                                 of type and scrambled it to make a type specimen book
//                               </p>
//                               <h4>$65.00</h4>
//                               <ul className="color-variant">
//                                 <li className="bg-light0" />
//                                 <li className="bg-light1" />
//                                 <li className="bg-light2" />
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="product-pagination">
//                       <div className="theme-paggination-block">
//                         <div className="row">
//                           <div className="col-xl-6 col-md-6 col-sm-12">
//                             <nav aria-label="Page navigation">
//                               <ul className="pagination">
//                                 <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true"><i className="fa fa-chevron-left" aria-hidden="true" /></span> <span className="sr-only">Previous</span></a></li>
//                                 <li className="page-item active"><a className="page-link" href="#">1</a>
//                                 </li>
//                                 <li className="page-item"><a className="page-link" href="#">2</a></li>
//                                 <li className="page-item"><a className="page-link" href="#">3</a></li>
//                                 <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true"><i className="fa fa-chevron-right" aria-hidden="true" /></span> <span className="sr-only">Next</span></a></li>
//                               </ul>
//                             </nav>
//                           </div>
//                           <div className="col-xl-6 col-md-6 col-sm-12">
//                             <div className="product-search-count-bottom">
//                               <h5>Showing Products 1-24 of 10 Result</h5>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* section End */}
//       {/* footer start */}
//       <footer className="footer-light">
//         <div className="light-layout">
//           <div className="container">
//             <section className="small-section border-section border-top-0">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="subscribe">
//                     <div>
//                       <h4>KNOW IT ALL FIRST!</h4>
//                       <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6">
//                   <form action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda" className="form-inline subscribe-form auth-form needs-validation" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
//                     <div className="form-group mx-sm-3">
//                       <input type="text" className="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email" required="required" />
//                     </div>
//                     <button type="submit" className="btn btn-solid" id="mc-submit">subscribe</button>
//                   </form>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//         <section className="section-b-space light-layout">
//           <div className="container">
//             <div className="row footer-theme partition-f">
//               <div className="col-lg-4 col-md-6">
//                 <div className="footer-title footer-mobile-title">
//                   <h4>about</h4>
//                 </div>
//                 <div className="footer-contant">
//                   <div className="footer-logo"><img src="../assets/images/icon/logo.png" alt="" /></div>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                     ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
//                   <div className="footer-social">
//                     <ul>
//                       <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
//                       <li><a href="#"><i className="fa fa-google-plus" /></a></li>
//                       <li><a href="#"><i className="fa fa-twitter" /></a></li>
//                       <li><a href="#"><i className="fa fa-instagram" /></a></li>
//                       <li><a href="#"><i className="fa fa-rss" aria-hidden="true" /></a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="col offset-xl-1">
//                 <div className="sub-title">
//                   <div className="footer-title">
//                     <h4>my account</h4>
//                   </div>
//                   <div className="footer-contant">
//                     <ul>
//                       <li><a href="#">mens</a></li>
//                       <li><a href="#">womens</a></li>
//                       <li><a href="#">clothing</a></li>
//                       <li><a href="#">accessories</a></li>
//                       <li><a href="#">featured</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="sub-title">
//                   <div className="footer-title">
//                     <h4>why we choose</h4>
//                   </div>
//                   <div className="footer-contant">
//                     <ul>
//                       <li><a href="#">shipping &amp; return</a></li>
//                       <li><a href="#">secure shopping</a></li>
//                       <li><a href="#">gallary</a></li>
//                       <li><a href="#">affiliates</a></li>
//                       <li><a href="#">contacts</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="sub-title">
//                   <div className="footer-title">
//                     <h4>store information</h4>
//                   </div>
//                   <div className="footer-contant">
//                     <ul className="contact-list">
//                       <li><i className="fa fa-map-marker" />Multikart Demo Store, Demo store India
//                         345-659</li>
//                       <li><i className="fa fa-phone" />Call Us: 123-456-7898</li>
//                       <li><i className="fa fa-envelope" />Email Us: Support@Multikart.com</li>
//                       <li><i className="fa fa-fax" />Fax: 123456</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="sub-footer">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-6 col-md-6 col-sm-12">
//                 <div className="footer-end">
//                   <p><i className="fa fa-copyright" aria-hidden="true" /> 2023-24 themeforest powered by
//                     pixelstrap
//                   </p>
//                 </div>
//               </div>
//               <div className="col-xl-6 col-md-6 col-sm-12">
//                 <div className="payment-card-bottom">
//                   <ul>
//                     <li>
//                       <a href="#"><img src="../assets/images/icon/visa.png" alt="" /></a>
//                     </li>
//                     <li>
//                       <a href="#"><img src="../assets/images/icon/mastercard.png" alt="" /></a>
//                     </li>
//                     <li>
//                       <a href="#"><img src="../assets/images/icon/paypal.png" alt="" /></a>
//                     </li>
//                     <li>
//                       <a href="#"><img src="../assets/images/icon/american-express.png" alt="" /></a>
//                     </li>
//                     <li>
//                       <a href="#"><img src="../assets/images/icon/discover.png" alt="" /></a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* footer end */}
//       {/* Quick-view modal popup start*/}
//       <div className="modal fade bd-example-modal-lg theme-modal" id="quick-view" tabIndex={-1} role="dialog" aria-hidden="true">
//         <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
//           <div className="modal-content quick-view-modal">
//             <div className="modal-body">
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
//               <div className="row">
//                 <div className="col-lg-6 col-xs-12">
//                   <div className="quick-view-img"><img src="../assets/images/pro3/1.jpg" alt="" className="img-fluid blur-up lazyload" /></div>
//                 </div>
//                 <div className="col-lg-6 rtl-text">
//                   <div className="product-right">
//                     <h2>Women Pink Shirt</h2>
//                     <h3>$32.96</h3>
//                     <ul className="color-variant">
//                       <li className="bg-light0" />
//                       <li className="bg-light1" />
//                       <li className="bg-light2" />
//                     </ul>
//                     <div className="border-product">
//                       <h6 className="product-title">product details</h6>
//                       <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
//                         doloremque laudantium</p>
//                     </div>
//                     <div className="product-description border-product">
//                       <div className="size-box">
//                         <ul>
//                           <li className="active"><a href="javascript:void(0)">s</a></li>
//                           <li><a href="javascript:void(0)">m</a></li>
//                           <li><a href="javascript:void(0)">l</a></li>
//                           <li><a href="javascript:void(0)">xl</a></li>
//                         </ul>
//                       </div>
//                       <h6 className="product-title">quantity</h6>
//                       <div className="qty-box">
//                         <div className="input-group"><span className="input-group-prepend"><button type="button" className="btn quantity-left-minus" data-type="minus" data-field><i className="ti-angle-left" /></button> </span>
//                           <input type="text" name="quantity" className="form-control input-number" defaultValue={1} /> <span className="input-group-prepend"><button type="button" className="btn quantity-right-plus" data-type="plus" data-field><i className="ti-angle-right" /></button></span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="product-buttons"><a href="#" className="btn btn-solid">add to cart</a> <a href="#" className="btn btn-solid">view detail</a></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Quick-view modal popup end*/}
//       {/* theme setting */}
//       <div className="theme-settings">
//         <ul>
//           <li className="demo-li">
//             <a href="javascript:void(0)" onclick="openSetting()">
//               <div className="setting-sidebar" id="setting-icon">
//                 <h5>50+ <br />demo</h5>
//               </div>
//             </a>
//           </li>
//           <li className="demo-li">
//             <div className="backend-btn"><a target="_blank" href="../back-end/index.html">Admin</a></div>
//           </li>
//           <li>
//             <div className="dark-btn">Dark</div>
//           </li>
//           <li>
//             <div className="rtl-btn">RTL</div>
//           </li>
//           <li className="input-picker">
//             <input id="ColorPicker1" type="color" defaultValue="#ff4c3b" name="Background" />
//           </li>
//         </ul>
//       </div>
//       <div className="scroll-setting-box">
//         <div id="setting_box" className="setting-box">
//           <a href="javascript:void(0)" className="overlay" onclick="closeSetting()" />
//           <div className="setting_box_body">
//             <div onclick="closeSetting()">
//               <div className="sidebar-back text-start"><i className="fa fa-angle-left pe-2" aria-hidden="true" /> Back
//               </div>
//             </div>
//             <div className="setting-body">
//               <div className="setting-title">
//                 <div>
//                   <img src="../assets/images/icon/logo.png" className="img-fluid" alt="" />
//                   <h3>50+ <span>demos</span> <br /> suit for any type of online store.</h3>
//                 </div>
//               </div>
//               <div className="setting-contant">
//                 <div className="row demo-section">
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="nft.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/58.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="nft.html" className="demo-text">
//                         <h4>NFT <span>New</span>
//                         </h4></a><h4><a href="nft.html" className="demo-text">
//                         </a>
//                       </h4></div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="vegetables-4.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/vegetables-4.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="vegetables-4.html" className="demo-text">
//                         <h4>Vegetables 4 <span>New</span>
//                         </h4></a><h4><a href="vegetables-4.html" className="demo-text">
//                         </a>
//                       </h4></div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="vegetables-5.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/vegetables-5.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="vegetables-5.html" className="demo-text">
//                         <h4>Vegetables 5 <span>New</span>
//                         </h4></a><h4><a href="vegetables-5.html" className="demo-text">
//                         </a>
//                       </h4></div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="gradient.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/gradient.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="gradient.html" className="demo-text">
//                         <h4>gradient</h4></a><h4><a href="gradient.html" className="demo-text">
//                         </a>
//                       </h4></div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="index.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/fashion.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="index.html" className="demo-text">
//                         <h4>fashion</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="fashion-2.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/fashion-2.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="fashion-2.html" className="demo-text">
//                         <h4>fashion 2</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="fashion-3.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/fashion-3.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="fashion-3.html" className="demo-text">
//                         <h4>fashion 3</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="fashion-4.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/fashion-4.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="fashion-4.html" className="demo-text">
//                         <h4>fashion 4</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="fashion-5.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/fashion-5.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="fashion-5.html" className="demo-text">
//                         <h4>fashion 5</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="fashion-6.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/fashion-6.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="fashion-6.html" className="demo-text">
//                         <h4>fashion 6</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="fashion-7.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/fashion-7.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="fashion-7.html" className="demo-text">
//                         <h4>fashion 7</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="furniture.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/furniture.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="furniture.html" className="demo-text">
//                         <h4>furniture</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="furniture-2.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/furniture-2.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="furniture-2.html" className="demo-text">
//                         <h4>furniture 2</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="furniture-3.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/furniture-dark.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="furniture-3.html" className="demo-text">
//                         <h4>furniture dark</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="electronic-1.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/electronics.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="electronic-1.html" className="demo-text">
//                         <h4>electronics</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="electronic-2.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/electronics-2.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="electronic-2.html" className="demo-text">
//                         <h4>electronics 2</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="electronic-3.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/electronics-3.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="electronic-3.html" className="demo-text">
//                         <h4>electronics 3</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="marketplace-demo.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/marketplace.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="marketplace-demo.html" className="demo-text">
//                         <h4>marketplace</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="marketplace-demo-2.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/marketplace-2.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="marketplace-demo-2.html" className="demo-text">
//                         <h4>marketplace 2</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="marketplace-demo-3.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/marketplace-3.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="marketplace-demo-3.html" className="demo-text">
//                         <h4>marketplace 3</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="marketplace-demo-4.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/marketplace-4.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="marketplace-demo-4.html" className="demo-text">
//                         <h4>marketplace 4</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="vegetables.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/vegetables.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="vegetables.html" className="demo-text">
//                         <h4>vegetables</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="vegetables-2.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/vegetables-2.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="vegetables-2.html" className="demo-text">
//                         <h4>vegetables 2</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="vegetables-3.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/vegetables-3.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="vegetables-3.html" className="demo-text">
//                         <h4>vegetables 3</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="jewellery.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/jewellery.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="jewellery.html" className="demo-text">
//                         <h4>jewellery</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="jewellery-2.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/jewellery-2.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="jewellery-2.html" className="demo-text">
//                         <h4>jewellery 2</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="jewellery-3.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/jewellery-3.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="jewellery-3.html" className="demo-text">
//                         <h4>jewellery 3</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="bags.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/bag.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="bags.html" className="demo-text">
//                         <h4>bag</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="watch.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/watch.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="watch.html" className="demo-text">
//                         <h4>watch</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="medical.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/medical.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="medical.html" className="demo-text">
//                         <h4>medical</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="perfume.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/perfume.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="perfume.html" className="demo-text">
//                         <h4>perfume</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="yoga.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/yoga.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="yoga.html" className="demo-text">
//                         <h4>yoga</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="christmas.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/christmas.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="christmas.html" className="demo-text">
//                         <h4>christmas</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="bicycle.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/bicycle.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="bicycle.html" className="demo-text">
//                         <h4>bicycle</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="marijuana.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/marijuana.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="marijuana.html" className="demo-text">
//                         <h4>marijuana</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="gym-product.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/gym.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="gym-product.html" className="demo-text">
//                         <h4>gym</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="tools.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/tools.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="tools.html" className="demo-text">
//                         <h4>tools</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="shoes.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/shoes.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="shoes.html" className="demo-text">
//                         <h4>shoes</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="books.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/books.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="books.html" className="demo-text">
//                         <h4>books</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="kids.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/kids.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="kids.html" className="demo-text">
//                         <h4>kids</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="game.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/game.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="game.html" className="demo-text">
//                         <h4>game</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="beauty.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/beauty.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="beauty.html" className="demo-text">
//                         <h4>beauty</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="left_sidebar-demo.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/left-sidebar.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="left_sidebar-demo.html" className="demo-text">
//                         <h4>left sidebar</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="video-slider.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/video-slider.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="video-slider.html" className="demo-text">
//                         <h4>video slider</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="metro.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/metro.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="metro.html" className="demo-text">
//                         <h4>metro</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="goggles.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/goggles.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="goggles.html" className="demo-text">
//                         <h4>goggles</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="flower.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/flower.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="flower.html" className="demo-text">
//                         <h4>flower</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="light.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/light.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="light.html" className="demo-text">
//                         <h4>light</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="nursery.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/nursery.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="nursery.html" className="demo-text">
//                         <h4>nursery</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="pets.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/pets.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="pets.html" className="demo-text">
//                         <h4>pets</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="video.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/video.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="video.html" className="demo-text">
//                         <h4>video</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="lookbook-demo.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/lookbook.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="lookbook-demo.html" className="demo-text">
//                         <h4>lookbook</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="full-page.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/full-page.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="full-page.html" className="demo-text">
//                         <h4>full page</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="instagram-shop.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/instagram.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="instagram-shop.html" className="demo-text">
//                         <h4>instagram</h4>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-4 col-6 text-center demo-effects">
//                     <div className="set-position">
//                       <a href="parallax.html" className="layout-container">
//                         <img src="../assets/images/landing-page/demo/parallax.jpg" className="img-fluid bg-img bg-top" alt="" />
//                       </a>
//                       <a href="parallax.html" className="demo-text">
//                         <h4>parallax</h4>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* theme setting */}
//       {/* tap to top start */}
//       <div className="tap-top">
//         <div><i className="fa fa-angle-double-up" /></div>
//       </div>

//     </div>
//   </div>
