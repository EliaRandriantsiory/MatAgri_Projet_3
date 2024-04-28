import { useEffect, useState } from "react";
import ProductsCard from "../../components/Produitcomponents/cartesProduitCompnent";
import CartProduitModel from "../../components/Produitcomponents/cartesProduitCompnent";
import axios from "axios";
import ProductCard from "../../components/Produitcomponents/cartesProduitCompnent";

function Material({}) {

   const [listMateriel, setListMateriel] = useState([]);
    useEffect(() => {
        axios
        .get(
          "http://localhost:8082/api/materiels/listMateriel"
        )
        .then((response) => {
        //   console.log(response.data)
          setListMateriel(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      
    },[])
    return ( 
      <div>
      <div>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-title">
                <h2>Matériels</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Matériels</li>
                </ol>
              </nav>
            </div>
          </div>
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
                        {
                           listMateriel.map(material =>
                           <>
                              <ProductCard materialItem={material} />
                           </>

                           )
                        }
                        {/* <ProductsCard /> */}
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
      {/* <footer className="footer-light">
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
      </footer> */}
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

export default Material;