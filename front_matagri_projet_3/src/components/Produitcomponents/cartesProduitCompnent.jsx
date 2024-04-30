import { useEffect, useState } from "react";
import PrintTextPrix from "../textComponent/printPrix";

function ProductCard({ materialItem }) {
  const [listPanierMat, setListPanierMat] = useState([]);
  const [panierMAt, setPanierMat] = useState({});
  const [quantity, setQuantity] = useState();

  const handleOnClickAddCard = (event) => {
    // console.log(materialItem);
    setPanierMat({
      materiel: {
        materielId: materialItem.materielId,
        categorieMat: materialItem.categorieMat,
        nomMat: materialItem.nomMat,
        stockMat: materialItem.stockMat,
        descriptionMat: materialItem.descriptionMat,
        techniqueMat: materialItem.techniqueMat,
        imagePath: materialItem.imagePath,
        id_user: materialItem.id_user,
        prixMAt: materialItem.prixMAt,
      },
      users: {
        // idUser: 1,
        // name: null,
        // lastname: null,
        // address: null,
        // phone: null,
        // nif: null,
        // stat: null,
        // cin: null,
        // email: "rakoto@gmail.com",
        // region: null,
        // nbFarme: null,
        // companyName: null,
        // password: "rakoto",
        // materiels: [],
        // profile: {
        //   idprofile: 1,
        //   profile: "agriculteur",
        //   roles: [],
        // },
      },
      quantity: 2,
      startDate: "2024-11-15",
      endDate: "2024-11-05",
    });

    // listPanierMat.push(panierMAt);
  };
  useEffect(() => {
    setListPanierMat([...listPanierMat, panierMAt]);

    localStorage.setItem("listpanier", JSON.stringify(listPanierMat));
    // console.log(listPanierMat);
  }, [panierMAt]);
  // localStorage.setItem("listpanier", listPanierMat);
  useEffect(() => {
    console.log(listPanierMat.length);
  }, [localStorage.getItem("listpanier")]);
  return (
    <>
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
              <button onClick={handleOnClickAddCard}>
                <i className="ti-shopping-cart" />
              </button>
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
                {/* <PrintTextPrix TextPrix={materialItem.prixMAt} monnai={"MLG"} /> */}
              </h4>
              <ul className="color-variant">
                <li className="bg-light0" />
                <li className="bg-light1" />
                <li className="bg-light2" />
              </ul>
            </div>
          </div>
        </div>
      </div>
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
                      src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                        JSON.parse(materialItem.imagePath)[0]
                      }`}
                      width={700}
                      height={1000}
                      className="img-fluid blur-up lazyload bg-img"
                    />
                  </div>
                </div>
                <div className="col-lg-6 rtl-text">
                  <div className="product-right">
                    <h2>{materialItem.name}</h2>
                    <h3></h3>
                    <ul hidden className="color-variant">
                      <li className="bg-light0" />
                      <li className="bg-light1" />
                      <li className="bg-light2" />
                    </ul>
                    <div className="border-product">
                      <h6 className="product-title">Details materiels</h6>
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
                      <button
                        onClick={handleOnClickAddCard}
                        className="btn btn-solid"
                      >
                        Ajouter au panier
                      </button>

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
    </>
  );
}

export default ProductCard;
