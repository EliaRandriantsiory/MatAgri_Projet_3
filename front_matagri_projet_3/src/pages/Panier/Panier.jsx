import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import Reserver from "./Reserver";
import RowPanierComponent from "./composant/rowPanier";
import { Link, json } from "react-router-dom";
import PrintTextPrix from "../../components/textComponent/printPrix";
import Devis from "../../components/textComponent/Devis";
import PrintPrixUser from "../../components/textComponent/printPrixUser";

function Panier() {
  const [listMateriel, setListMateriel] = useState([null]);
  const [updated, setUpdated] = useState();
  const [sommePrix, setsommePrix] = useState(0);
  const [nombreJourLocation, setNombreJourLocation] = useState(1);
  const [sommePrixTotal, setsommePrixTotal] = useState(0);
  const prixLivraison = 2000;

  function calculeDifferenceDate(startDateString, endDateString) {
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
  }
  const CalculeSommePrixTotal = () => {
    let prxTotal = 0;
    JSON.parse(localStorage.getItem("listpanier")).forEach((commande) => {
      console.log(commande);
      console.log(commande.quantity);
      // console.log(new Date())
      console.log(
        calculeDifferenceDate(commande.startDate, commande.endDate) + 1
      );
      // console.log(commande.materiel.prixMAt);
      console.log(commande.quantity + commande.materiel.prixMAt);
      let prixlocationMat =
        commande.quantity *
        (calculeDifferenceDate(commande.startDate, commande.endDate) + 1) *
        commande.materiel.prixMAt;
      prxTotal += prixlocationMat;

      setsommePrixTotal(sommePrixTotal + prixlocationMat);
      // console.log("prix Total: "+sommePrixTotal+prixlocationMat)

      // const differenceDate = calculeDifferenceDate(
      //   commande.startDate,
      //   commande.endDate
      // );
      // setsommePrixTotal(
      //   commande.quantity * differenceDate * commande.materiel.prixMAt
      // );
      // console.log(sommePrixTotal);
      // console.log(
      //   commande.quantity * differenceDate * commande.materiel.prixMAt
      // );
      // console.log(commande.startDate)
      // console.log(commande.endDate)
      // console.log(differenceDate)
    });
    // setsommePrixTotal(prxTotal + prixLivraison);
  };

  const handleCloseRowPanier = (index) => {
    let currentPanierMat = JSON.parse(localStorage.getItem("listpanier"));
    // console.log(currentPanierMat);
    currentPanierMat.splice(index, 1);
    localStorage.setItem("listpanier", JSON.stringify(currentPanierMat));
    // console.log(JSON.stringify(currentPanierMat.splice(index, 1)));
    setUpdated(true);
    console.log("bonjour");
    // localStorage.setItem("listpanier", JSON.stringify(currentPanierMat.splice(index,1)))
    // setListMateriel([])
    // console.log(index)
  };

  const updatePanierMatData = (
    index,
    materielItem_,
    qt,
    prixTotal,
    startDateCrenau,
    endDateCrenau
  ) => {
    let currentPanierMat = JSON.parse(localStorage.getItem("listpanier"));
    currentPanierMat[index].quantity = qt;
    currentPanierMat[index].startDate = startDateCrenau;
    currentPanierMat[index].endDate = endDateCrenau;
    localStorage.setItem("listpanier", JSON.stringify(currentPanierMat));
    console.log(currentPanierMat);
  };

  useEffect(() => {
    setListMateriel(JSON.parse(localStorage.getItem("listpanier")));
  }, [updated]);

  useEffect(() => {}, [localStorage.getItem("listpanier")]);

  useEffect(() => {
    setListMateriel(JSON.parse(localStorage.getItem("listpanier")));
    console.log(JSON.parse(localStorage.getItem("listpanier")));
    // CalculeSommePrixTotal();
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
                            {/* <th scope="col" style={{ fontSize: "12px" }}>
                              image
                            </th> */}
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Designation
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              quantité
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Prix journalier
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Dates
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Lieu d'exploitation
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              total
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Action
                            </th>
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
                                updatePanierMatData={updatePanierMatData}
                                handleCloseRowPanier={handleCloseRowPanier}
                              />
                            </>
                          ))}
                        </tbody>
                      </table>
                      {/* <div className="table-responsive-md">
                        <table className="table cart-table "></table>
                        <div className="table-responsive-md">
                          <table className="table cart-table "></table>
                        </div>
                      </div> */}
                    </div>

                    <div
                      className="d-flex justify-content-end"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        // background: "#f2f2f2",
                        width: "84.8vw",
                        height: "20vh",
                      }}
                    >
                      <div>
                        <div>
                          <label style={{ fontWeight: "bold" }}>
                            Frais de transport
                          </label>
                          <label
                            style={{
                              textAlign: "right",
                              marginLeft: "5px",
                              width: "20.5vw",
                              // background: "red",
                            }}
                          >
                            <PrintPrixUser
                              TextPrix={prixLivraison}
                              monnai={"MLG"}
                            />{" "}
                            / km
                          </label>
                        </div>
                        <div>
                          <label
                            style={{
                              fontWeight: "bold",
                              marginleft: "27px",
                            }}
                          >
                            Montant total à payer
                          </label>
                          <label
                            style={{
                              textAlign: "right",
                              marginLeft: "5px",
                              width: "15vw",
                              // background: "red",
                            }}
                          >
                            <PrintPrixUser
                              TextPrix={sommePrixTotal}
                              monnai={"MLG"}
                            />
                          </label>
                        </div>
                      </div>
                      <div
                        className="col-sm-12 table-responsive-xs"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          width: "82vw",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "82vw",
                            height: "3vh",
                          }}
                        >
                          <li>
                            <Link
                              to={"/Material"}
                              className="btn btn-solid"
                              style={{ marginLeft: "5vw" }}
                            >
                              Continuer l'achat
                            </Link>
                          </li>
                          <li
                            style={{
                              position: "absolute",
                              right: 165,
                            }}
                          >
                            <Link to="/devis">Aller au devis</Link>
                          </li>
                          <li
                            style={{
                              position: "absolute",
                              right: 0,
                            }}
                          >
                            <Link to="/paiement" className="btn  btn-solid">
                              Commander
                            </Link>
                          </li>
                        </ul>
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
  );
}

export default Panier;
