import { Link } from "react-router-dom";

function Choiceusers() {
  return (
    <div
      className="header-choice"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <section className="theme-invoice-1 section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="invoice-wrapper">
                <div className="invoice-header">
                  <h3>Agriculteur</h3>
                  <p>
                    "Optimisez votre exploitation et bénéficiez d'une remise 12%
                    en vous mutualisant pour la location du matériel de votre
                    choix, profitez en !";
                  </p>
                  <Link className="btn btn-solid" to={"/InscriptionAgriculteur"}>
                    s'inscrire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="theme-invoice-1 section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="invoice-wrapper">
                <div className="invoice-header">
                  <h3>Coopérative</h3>
                  <p>
                    "Économisez jusqu'à 12% pour la location d'un matériel
                    agricole en tant que coopérative ! Rejoignez notre
                    plateforme pour profiter de cette offre."
                  </p>
                  <Link className="btn btn-solid" to={"/SignUpCooperative"}>
                    s'inscrire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="theme-invoice-1 section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="invoice-wrapper">
                <div className="invoice-header">
                  <h3>Fournisseur</h3>
                  <p>
                    "Élargissez votre clientèle et maximisez vos revenus en
                    proposant votre matériel agricole à la location sur notre
                    plateforme dès aujourd'hui !"
                  </p>
                  <Link to={"/SignUpProvider"} className="btn btn-solid" id="four">
                    s'inscrire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Choiceusers;
