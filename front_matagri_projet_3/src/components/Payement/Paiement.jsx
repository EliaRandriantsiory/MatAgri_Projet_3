import React, { useState } from "react";

function Paiement() {
  const [prixapayer, SetPrixapayer] = useState();
  const [nomproduit, SetNomproduit] = useState();
  return (
    <div>
      <div className="container text-center">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div className="d-flex flex-row align-items-center">
            <h4 className="text-uppercase mt-1">Paiement</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div md="7" lg="7" xl="6" className="mb-4 mb-md-0">
              <div className="mb-0 text-success" value={prixapayer}>
                lala
              </div>
              <div className="mb-3" value={nomproduit}>
                lolo
              </div>
              <div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row mt-1"></div>
                </div>
                <div class="d-flex flex-column mb-3">
                  <div
                    classname="btn-group"
                    vertical
                    aria-label="Vertical button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option1"
                      autocomplete="off"
                    />
                    <label
                      className="btn btn-outline-primary btn-lg"
                      for="option1"
                    >
                      <div className="d-flex justify-content-between">
                        <span>VISA </span>
                        <span>**** 5436</span>
                      </div>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option2"
                      autocomplete="off"
                      checked
                    />
                    <label
                      className="btn btn-outline-primary btn-lg"
                      for="option2"
                    >
                      <div className="d-flex justify-content-between">
                        <span>MASTER CARD </span>
                        <span>**** 5038</span>
                      </div>
                    </label>
                  </div>
                </div>
                <button classname="btn btn-solid">Proccéder au paiement</button>
              </div>
            </div>
          </div>

          <div className="col col-lg-6 col-xl-6">
            <div md="5" lg="4" xl="4" offsetLg="1" offsetXl="2">
              <div className="p-3" style={{ backgroundColor: "#eee" }}>
                <span className="fw-bold">Récapitulation de la commande</span>
                <div className="d-flex justify-content-between mt-2">
                  <span>Prix journalier</span> <span>180000Ar</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>quantité</span> <span>3</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Distance</span> <span>120km</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Frais de transport (Km)</span> <span>240000Ar</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Mutualisation (-12%)</span> <span>+</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-2">
                  <span className="lh-sm">
                    Total du frais de transport avec Mutualisation
                    <br />
                  </span>
                  <span>20000Ar</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="lh-sm">
                    Total de la location du materiel
                  </span>
                  <span>540000Ar</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-2">
                  <span>Total du sevice</span>{" "}
                  <span class="text-success">740000ar</span>
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
