import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import Reserver from "./Reserver";
import RowPanierComponent from "./composant/rowPanier";
import { Link, json } from "react-router-dom";
// import PrintTextPrix from "../../components/textComponent/printPrix";

function Panier() {
  const [listMateriel, setListMateriel] = useState([]);
  useEffect(() => {
    // console.log(localStorage.getItem("listpanier"));
    setListMateriel(JSON.parse(localStorage.getItem("listpanier")));
    // console.log("bonjour PAnier" + listMateriel[0]);
    console.log(listMateriel);

    // if (listMateriel) {
    //   localStorage.getItem("listpanier").forEach((element) => {
    //     console.log(element);
    //   });
    // }
  }, []);
  useEffect(() => {
    console.log(localStorage.getItem("listpanier"));
    if (listMateriel) {
      setListMateriel(JSON.parse(localStorage.getItem("listpanier")));
      console.log(localStorage.getItem("listpanier"));
      console.log("bonjour" + listMateriel.length);
    }
    // setListMateriel(localStorage.getItem("listpanier"));
  }, [localStorage.getItem("listpanier")]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8082/api/materiels/listMateriel")
  //     .then((response) => {
  //       console.log(response.data);
  //       setListMateriel(response.data);
  //       console.log("bonjour");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  // setTotal(quantity * prix);
  // setTotalproducts(quantity * prix);



  return (
    <div>
      <div className="cart-section section-b-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="title1 section-t-space">
                <h4>Panier</h4>
                <h2 className="title-inner1">Panier</h2>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12"></div>
                    <div className="col-sm-12 table-responsive-xs">
                      <table className="table cart-table">
                        <thead>
                          <tr className="table-head">
                            <th scope="col" style={{ fontSize: "12px" }}>
                              image
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              nom du produit
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              quantité
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              prix
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              action
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              total
                            </th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {listMateriel.map((matHomePage) => (
                            <>
                              {/* <RowPanierComponent materielItem_={matHomePage} /> */}
                              {/* <PrintTextPrix
                                TextPrix={matHomePage.prixMAt}
                                monnai={"MLG"}
                              /> */}
                            </>
                          ))}
                        </tbody>
                      </table>
                      <div className="table-responsive-md">
                        <table className="table cart-table "></table>
                        <div className="table-responsive-md">
                          <table className="table cart-table "></table>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-4"
                        style={{ marginLeft: "810px", marginTop: "10px" }}
                      />
                    </div>

                    <div className="row cart-buttons">
                      <div className="col-6">
                        <Link to={"/Material"} className="btn btn-solid">
                          Continuer l'achat
                        </Link>
                      </div>
                      <div className="col-4">
                        <a href="#" className="btn btn-solid">
                          Commander
                        </a>
                      </div>
                    </div>
                    {/* <Modal
                      open={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    >
                      <Reserver
                        open={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                      />
                    </Modal> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Panier;
