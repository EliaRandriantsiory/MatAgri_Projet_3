import axios from "axios";
import { useEffect, useState } from "react";
import PrintTextPrix from "../../components/textComponent/printPrix";
import ProductCard from "../../components/Produitcomponents/cartesProduitCompnent";

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
  }, []);
  useEffect(() => {
    if (requestUser === "") {
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
              {/* <div className="page-title">
                <h2>rechercher</h2>
              </div> */}
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                {/* <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">rechercher</li>
                </ol> */}
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
                        placeholder="recherche materièls......"
                        onChange={handleOnChangeSearchMat}
                      />
                      <div class="input-group-append">
                        <button class="btn btn-solid">
                          <i class="fa fa-search"></i>rechercher
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
              <ProductCard materialItem={matHomePage} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- product section end --> */}
    </>
  );
}

export default SearchPage;
