import { Link } from "react-router-dom";
import { useState } from "react";
import Description from "../Dashboard/Fournisseur/description";

function CardProduct() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="title1 section-t-space">
        <h4>produits exclusifs</h4>
        <h2 className="title-inner1">Produits</h2>
      </div>


      <section className="section-b-space ratio_asos">
        <div className="container">
          <div className="row search-product">
            <div className="col-xl-2 col-md-4 col-6">
              <div className="product-box">
                <div className="img-wrapper">
                  <div className="front">
                    <a href="#">
                      <img
                        src="../assets/images/pro3/33.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="back">
                    <a href="#">
                      <img
                        src="../assets/images/pro3/34.jpg"
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
                    </button>{" "}
                    <Link to="description" onClick={handleOpenModal} title="Quick View">
                      <i className="ti-search"></i>
                    </Link>{" "}
                    <a href="javascript:void(0)" title="Add to Wishlist">
                      <i className="ti-heart" aria-hidden="true"></i>
                    </a>{" "}
                    <Link to="#" title="Compare">
                      <i className="ti-reload" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
                <div className="product-detail">
                  <div className="rating">
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>
                  </div>
                  <a href="#">
                    <h6>Tracteur</h6>
                  </a>
                  <h4>Ar 80 000.00</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Description showModal={showModal} closeModal={handleCloseModal} />
    </>
  );
}
export default CardProduct;
