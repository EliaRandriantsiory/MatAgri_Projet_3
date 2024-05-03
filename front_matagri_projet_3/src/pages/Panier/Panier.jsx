import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import Reserver from "./Reserver";
import RowPanierComponent from "./composant/rowPanier";
import { Link, json } from "react-router-dom";
import PrintTextPrix from "../../components/textComponent/printPrix";
import Devis from "../../components/textComponent/Devis";


function Panier() {
const [listMateriel, setListMateriel] = useState([]);
  const [updated, setUpdated] = useState();
  const [sommePrix, setsommePrix] = useState(0);
  const [nombreJourLocation, setNombreJourLocation] = useState(1);
  const [sommePrixTotal,setsommePrixTotal] = useState()

  function calculeDifferenceDate (startDateString, endDateString) {
    const startDateParts = startDateString.split("/");
    const startDate = new Date(
      parseInt(startDateParts[2]),
      parseInt(startDateParts[1]) - 1,
      parseInt(startDateParts[0])
    );
    const endDateParts = endDateString.split("/");
    const endDate = new Date(
      parseInt(endDateParts[2]),
      parseInt(endDateParts[1]) - 1,
      parseInt(endDateParts[0])
    );

    // Calculer la différence en millisecondes
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

    // Convertir la différence en jours
    const differenceInDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    // console.log(differenceInDays)
    return differenceInDays;
  };
  const CalculeSommePrixTotal = () => {
    JSON.parse(localStorage.getItem("listpanier")).forEach((commande) => {
      const differenceDate = calculeDifferenceDate(commande.startDate,commande.endDate)
      setsommePrixTotal(commande.quantity*differenceDate*commande.materiel.prixMAt);
      console.log(sommePrixTotal)
      console.log(commande.quantity*differenceDate*commande.materiel.prixMAt)
      
      // console.log(commande.startDate)
      // console.log(commande.endDate)
      
      // console.log(differenceDate)
      
    });
  };

  const handleCloseRowPanier = (index) => {
    let currentPanierMat = JSON.parse(localStorage.getItem("listpanier"));
    console.log(currentPanierMat);
    currentPanierMat.splice(index, 1);
    localStorage.setItem("listpanier", JSON.stringify(currentPanierMat));
    // console.log(JSON.stringify(currentPanierMat.splice(index, 1)));
    setUpdated(true);
    console.log("bonjour");
    // localStorage.setItem("listpanier", JSON.stringify(currentPanierMat.splice(index,1)))
    // setListMateriel([])
    // console.log(index)
  };
  const updatePanierMat = (
    index,
    materielItem_,
    prixTotal,
    nombreJourLocation
  ) => {
    let currentPanierMat = JSON.parse(localStorage.getItem("listpanier"));
    // console.log(materielItem_)
    // console.log(index, materielItem_, prixTotal,nombreJourLocation);

    // sommePrixTotal()
  };
  useEffect(() => {
    setListMateriel(JSON.parse(localStorage.getItem("listpanier")));
    // console.log(sommePrix);
    // sommePrixTotal();
  }, [updated]);

  useEffect(() => {
    // console.log(localStorage.getItem("listpanier")+"bonjour")
  }, [localStorage.getItem("listpanier")]);

  useEffect(() => {
    setListMateriel(JSON.parse(localStorage.getItem("listpanier")));
    // console.log("bonjour update")
    // console.log(sommePrix);
    CalculeSommePrixTotal();
  }, []);

  return (
    <div>
      <div className="cart-section section-b-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="title1 section-t-space">
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
                          {/* {listMateriel.map((matHomePage) => (
                            <>
                            {matHomePage.prixMAt}
                          <RowPanierComponent materielItem_={matHomePage} /> </>
                          ))} */}
                          {listMateriel.map((matHomePage, index) => (
                            <>
                              <RowPanierComponent
                                materielItem_={matHomePage}
                                index={index}
                                updatePanierMat={updatePanierMat}
                                handleCloseRowPanier={handleCloseRowPanier}
                              />
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
                    <div className="d-flex justify-content-end">
                      <table style={{ border: "none" }}>
                        <tbody>
                          <tr>
                            <td>
                              <label style={{ fontWeight: "bold" }}>
                                Frais de transport
                              </label>
                            </td>
                            <td>
                              <label
                                style={{
                                  textAlign: "left",
                                  marginRight: "75px",
                                }}
                              >
                                1 000,00 Ar
                              </label>
                            </td><td>

                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label
                                style={{
                                  fontWeight: "bold",
                                  marginRight: "27px",
                                }}
                              >
                                Montant total à payer
                              </label>
                            </td>
                            <td>
                              <label
                                style={{
                                  textAlign: "left",
                                  marginRight: "75px",
                                }}
                              >
                                24 000 000 Ar
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="d-flex justify-content-end">
                    <table style={{ border: "none" }}>
                    <tbody>
                    <tr>
                      <td>
                      <Link to={"/Material"} className="btn btn-solid">
                        Continuer l'achat
                      </Link>  
                      </td>
                      <td>

                      </td>
                      <td></td>
                      <td></td>
                      <td><Link to="/devis" className="btn btn-xs btn-solid">
                          Aller au devis
                        </Link></td>
                      <td><Link to="/paiement" className="btn btn-xs btn-solid">
                          Commander
                        </Link></td>
                        <td></td>
                        
                    </tr>
                    </tbody>
                    </table>
                      
                      {/* <div className="col-6">                      
                        <Link to={"/Material"} className="btn btn-solid">
                        
                          Continuer l'achat
                        </Link>

                      </div>
                      <div className="col-3">
                        
                      </div>
                      <div className="col-3">
                        
                      </div> */}
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

