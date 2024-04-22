import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import React, { Button } from "react-bootstrap";
import "../assets/css/SignUpProvider/provider.css";
import TermeF from "./TermeF";

function SignUpProvider() {
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
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">NIF</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cin"
                        placeholder="Votre numéro CIN"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Siège sociale</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Votre prénom"
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
                        placeholder="Votre adresse"
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
                      <label htmlFor="mon-menu">Région :</label>
                      <select id="region" className="form-control">
                        <option value="option1">Alaotra Mangoro</option>
                        <option value="option2">Analamanga</option>
                        <option value="option3">Atsimo Andrefana</option>
                        <option value="option5">Itasy</option>
                        <option value="option6">Menabe</option>
                        <option value="option7">Vakinakaratra</option>
                      </select>
                    </div>
                  </div>
                  <div id="checkTermeCondition">
                    <input
                      type="checkbox"
                      name="checkbox-button"
                      value="value"
                      id="checkPlus"
                    ></input>
                    <TermeF />
                  </div>
                  <a href="#" className="btn btn-solid w-auto">
                    S'inscrire
                  </a>
                </form>
              </div>
              <div className="form-row row"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpProvider;
