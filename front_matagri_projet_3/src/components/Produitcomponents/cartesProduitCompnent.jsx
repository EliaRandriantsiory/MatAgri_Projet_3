import PrintTextPrix from "../textComponent/printPrix";

function ProductCard({ materialItem }) {
  return (
    <div className="col-xl-3 col-6 col-grid-box">
      <div className="product-box">
        <div className="img-wrapper">
          <div className="front">
            <a href="#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                  JSON.parse(materialItem.imagePath)[0]
                }`}
                width={500}
                className="img-fluid blur-up lazyload bg-img"
              />
            </a>
          </div>
          <div className="back">
            <a href="#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                  JSON.parse(materialItem.imagePath)[0]
                }`}
                width={500}
                className="img-fluid blur-up lazyload bg-img"
              />
            </a>
          </div>
          <div className="cart-info cart-wrap">
            <button
              data-bs-toggle="modal"
              data-bs-target="#addtocart"
              title="Add to cart"
            >
              <i className="ti-shopping-cart" />
            </button>{" "}
            <a href="javascript:void(0)" title="Add to Wishlist">
              <i className="ti-heart" aria-hidden="true" />
            </a>{" "}
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#quick-view"
              title="Quick View"
            >
              <i className="ti-search" aria-hidden="true" />
            </a>{" "}
            <a href="compare.html" title="Compare">
              <i className="ti-reload" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="product-detail">
          <div>
            <div className="rating">
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
              <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
              <i className="fa fa-star" />
            </div>
            <a href="product-page(no-sidebar).html">
              <h6>{materialItem.nomMat}</h6>
            </a>
            <p>{materialItem.descriptionMat} </p>
            <h4>
              <PrintTextPrix TextPrix={materialItem.prixMAt} monnai={"MLG"} />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
