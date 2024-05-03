import React from "react";

const ProductBox = ({ materialItem }) => {
  // const [materialItem,setMatItem] = useState({...materialItem})
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
            <button>
              <i className="ti-shopping-cart" />
            </button>{" "}
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
              <h6>{materialItem.nomMat} </h6>
            </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
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
  );
};

export default ProductBox;
