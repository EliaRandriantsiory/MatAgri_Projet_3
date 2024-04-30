import axios from "axios";
import { useEffect, useState } from "react";
import PrintTextPrix from "../../components/textComponent/printPrix";

function SearchPage() {
  const [listMateriel, setListMateriel] = useState([]);
  const [requestUser, setRequestUser] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/materiels/listMateriel")
      .then((response) => {
        //   console.log(response.data)
        setListMateriel(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);
  useEffect(() => {
    if (requestUser==="") {
      axios
        .get(
          "http://localhost:8082/api/materiels/listMaterielfilterBynameMat?paramFiltr=" +
            requestUser
        )
        .then((response) => {
          //   console.log(response.data)
          setListMateriel(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [requestUser]);

  const handleOnChangeSearchMat = (e) => {
    setRequestUser(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      {/* <!-- breadcrumb start --> */}
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-title">
                <h2>search</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">search</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb End --> */}

      {/* <!--section start--> */}
      <section class="authentication-page">
        <div class="container">
          <section class="search-block">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 offset-lg-3">
                  <form class="form-header">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Search Products......"
                        onChange={handleOnChangeSearchMat}
                      />
                      <div class="input-group-append">
                        <button class="btn btn-solid">
                          <i class="fa fa-search"></i>Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* <!-- section end --> */}

      {/* <!-- product section start --> */}
      <section class="section-b-space ratio_asos">
        <div class="container">
          <div class="row search-product">
            {listMateriel.map((matHomePage) => (
              <div className="col-xl-2 col-md-4 col-6">
                <div className="product-box">
                  <div className="img-wrapper">
                    <div className="front">
                      <a href="#">
                        {/* C:\Users\inclu\Documents\Nouveau dossier\MatAgri_Projet_3\front_matagri_projet_3\src\pages\assets\images\materiels\charrue-4-corps-non-stop.jpg */}
                        <img
                          src={`${
                            process.env.PUBLIC_URL
                          }/assets/images/materiels/${
                            JSON.parse(matHomePage.imagePath)[0]
                          }`}
                          width={500}
                          className="img-fluid blur-up lazyload bg-img"
                        />
                      </a>
                    </div>
                    <div className="back">
                      <a href="#">
                        <img
                          src={`${
                            process.env.PUBLIC_URL
                          }/assets/images/materiels/${
                            JSON.parse(matHomePage.imagePath)[1]
                          }`}
                          width={500}
                          className="img-fluid blur-up lazyload bg-img"
                        />
                      </a>
                    </div>

                    {/* {JSON.parse(matHomePage.imagePath).map((imagePath) => ())} */}
                    <div className="cart-info cart-wrap">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart"
                        title="Add to cart"
                      >
                        <i className="ti-shopping-cart"></i>
                      </button>{" "}
                      <a href="javascript:void(0)" title="Add to Wishlist">
                        <i className="ti-heart" aria-hidden="true"></i>
                      </a>{" "}
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view"
                        title="Quick View"
                      >
                        <i className="ti-search" aria-hidden="true"></i>
                      </a>{" "}
                      <a href="compare.html" title="Compare">
                        <i className="ti-reload" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-detail">
                    <div className="rating">
                      <i className="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>
                    </div>
                    <a href="product-page(no-sidebar).html">
                      <h6>{matHomePage.nomMat}</h6>
                    </a>
                    <h4><PrintTextPrix TextPrix={matHomePage.prixMAt} monnai={"MLG"} /></h4>
                    {/* <ul className="color-variant">
                    <li className="bg-light0"></li>
                    <li className="bg-light1"></li>
                    <li className="bg-light2"></li>
                  </ul> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- product section end --> */}
    </>
  );
}

export default SearchPage;
