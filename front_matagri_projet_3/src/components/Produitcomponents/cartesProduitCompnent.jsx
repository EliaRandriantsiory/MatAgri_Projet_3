import { Link } from "react-router-dom";
function ProductBox({ materielItem }) {
  return (
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
            <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart">
              <i className="ti-shopping-cart"></i>
            </button>
            <a href="javascript:void(0)" title="Add to Wishlist">
              <i className="ti-heart" aria-hidden="true"></i>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View">
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
