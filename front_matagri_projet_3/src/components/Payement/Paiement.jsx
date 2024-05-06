import React, { useEffect, useState } from "react";
import PrintPrixUser from "../textComponent/printPrixUser";
import { convertToMeridiem } from "@mui/x-date-pickers/internals/utils/time-utils";
import { Payement } from "../../pages/Payment";
import Payment from "../../pages/Payment";

import { Link } from "react-router-dom";
function Paiement() {
  const [prixapayer, SetPrixapayer] = useState();
  const [nomproduit, SetNomproduit] = useState();
  const [quantite, SetQuantite] = useState();
  const [nbredejour, SetNbredejour] = useState();
  const [mutualisation, SetMutualisation] = useState();
  const [montant, SetMontant] = useState();
  const [listMateriel, setListMateriel] = useState([]);
  const [updated, setUpdated] = useState();
  const [sommePrix, setsommePrix] = useState(0);
  const [nombreJourLocation, setNombreJourLocation] = useState(1);
  const [sommePrixTotal, setsommePrixTotal] = useState(0);
  // const [testGetPrix, setTestGetPrix] = useState();
  const prixLivraison = 2000;

  const sommeMontantTotal = () => {
    let sommeMontant = 0;
    listMateriel.forEach((materiel) => {
      sommeMontant += materiel.quantity * materiel.materiel.prixMAt;
    });
    // setTestGetPrix(sommeMontant + prixLivraison);
    return sommeMontant + prixLivraison;
  };
  useEffect(() => {
    setListMateriel(JSON.parse(localStorage.getItem("listpanier")));
    CalculeSommePrixTotal();
    console.log(sommePrixTotal);
  }, []);

  function calculeDifferenceDate(startDateString, endDateString) {
    let differenceInDays = 1;
    if (startDateString.trim() && endDateString.trim() === "") {
      return differenceInDays;
    }
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

    // Calculer la diffÃ©rence en millisecondes
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

    // Convertir la diffÃ©rence en jours
    differenceInDays = Math.floor(
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
      // console.log(calculeDifferenceDate("22/04/2024","25/05/2024"))
      // console.log(commande.materiel.prixMAt);
      let prixlocationMat =
        commande.quantity *
        calculeDifferenceDate(commande.startDate, commande.endDate) *
        commande.materiel.prixMAt;
      prxTotal += prixlocationMat;
    });
    setsommePrixTotal(prxTotal + prixLivraison);
  };

  return (
    <div>
      <div className="cart-section section-b-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="title1 section-t-space">
                <h2 className="title-inner1">Paiement</h2>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12"></div>
                    <div className="col-sm-12 table-responsive-xs">
                      <table className="table cart-table">
                        <thead>
                          <tr className="table-head">
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Nom du produit
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Quantité
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Prix journalier
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Nombre de jour
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Mutualisation
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              Montant
                            </th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {listMateriel.map((matHomePage, index) => (
                            <tr>
                              <td>{matHomePage.materiel.nomMat} </td>
                              <td>{matHomePage.quantity}</td>
                              <td>
                                <PrintPrixUser
                                  TextPrix={matHomePage.materiel.prixMAt}
                                  monnai={"MLG"}
                                />
                              </td>
                              <td>{matHomePage.quantity}</td>
                              <td>Non mutualiser</td>
                              <td>
                                <PrintPrixUser
                                  TextPrix={
                                    matHomePage.quantity *
                                    matHomePage.materiel.prixMAt
                                  }
                                  monnai={"MLG"}
                                />{" "}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                                <PrintPrixUser
                                  TextPrix={prixLivraison}
                                  monnai={"MLG"}
                                />
                              </label>
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
                                <PrintPrixUser
                                  TextPrix={sommeMontantTotal()}
                                  monnai={"MLG"}
                                />
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="row cart-buttons">
                      <div className="col-7" style={{ marginLeft: "490px" }}>
                        {/* <Link to={"/Payment"} className="btn btn-xs btn-solid">
                          Payer
                        </Link> */}
                        <Payment sommeMontantTotal={sommeMontantTotal} />
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

export default Paiement;
