import React, { useState } from "react";

function Paiement() {
  const [prixapayer, SetPrixapayer] = useState();
  const [nomproduit, SetNomproduit] = useState();
  const [quantite, SetQuantite] = useState();
  const [nbredejour, SetNbredejour] = useState();
  const [mutualisation, SetMutualisation] = useState();
  const [montant, SetMontant] = useState();

  const handleNomproductsChange = (e) => {
    SetNomproduit(e.target.value);
  };
  const handlePrixChange = (e) => {
    SetPrixapayer(e.target.value);
  };
  const handleQuantityChange = (e) => {
    SetQuantite(e.target.value);
  };
  const handleNbredejourChange = (e) => {
    SetNbredejour(e.target.value);
  };
  const handleMutualisationChange = (e) => {
    SetMutualisation(e.target.value);
  };
  const handleMontantChange = (e) => {
    SetMontant(e.target.value);
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
                              Prix
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
                          <tr>
                            <td onChange={handleNomproductsChange} />
                            <td onChange={handleQuantityChange} />
                            <td onChange={handlePrixChange} />
                            <td onChange={handleNbredejourChange} />
                            <td on onChange={handleMutualisationChange} />
                            <td on onChange={handleMontantChange}></td>
                          </tr>
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
                                1 000,00 Ar
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
                                24 000 000 Ar
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="row cart-buttons">
                      <div className="col-7" style={{ marginLeft: "490px" }}>
                        <a className="btn btn-xs btn-solid">Payer</a>
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
