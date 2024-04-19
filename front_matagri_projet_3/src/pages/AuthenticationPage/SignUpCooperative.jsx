/* eslint-disable no-undef */

import { Form } from "react-router-dom";

function SignUpCooperative() {
  return (
    <>
      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Inscription</h3>
              <div className="theme-card">
                <form className="theme-form">
                  <div className="form-row row">
                    <div className="col-md-6">
                      <label htmlFor="email">Raison sociale</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Votre nom de société"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">NIF</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cin"
                        placeholder="Votre numéro NIF"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Siège sociale</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="votre siège"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Téléphone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tel"
                        placeholder="Votre numéro de tétéphone"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Votre adresse e-mail"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="review">Mot de passe</label>
                      <input
                        type="password"
                        className="form-control"
                        id="passeword"
                        placeholder=" votre mot de passe"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Nombre Agriculteteur</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Nombre agriculteur"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="review">Confirmer mot de passe</label>
                      <input
                        type="password"
                        className="form-control"
                        id="passConfirm"
                        placeholder=" Confirmer mot de passe"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="mon-menu">région :</label>
                      <select id="region" class="form-control">
                        <option value="option1">Alaotra Mangoro</option>
                        <option value="option2">Analamanga</option>
                        <option value="option3">Atsimo Andrefana</option>
                        <option value="option5">Itasy</option>
                        <option value="option6">Menabe</option>
                        <option value="option7">Vakinakaratra</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="form-row row"></div>

              <a href="#" className="btn btn-solid w-auto">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpCooperative;
