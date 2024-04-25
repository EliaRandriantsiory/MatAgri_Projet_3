import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Terme from "./Terme";

function SignUpCooperative() {
  const navigate = useNavigate();
  const [companyNameForm, setCompanyName] = useState("");
  const [EtatCGV, setEtatCgv] = useState("");
  const [nifForm, setNif] = useState("");
  const [NbAgriculteurForm, setNbAgriculteur] = useState("");
  const [addressForm, setAddress] = useState("");
  const [phoneForm, setPhone] = useState("");
  const [emailForm, setEmail] = useState("");
  const [regionForm, setRegion] = useState("");
  const [passwordForm, setPassword] = useState("");
  const [confirmPasswordForm, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleOnChangecheckboxcgv = (event) => {
    setEtatCgv(event.target.checked);
    setIsChecked(event.target.checked);
    setErrorMessage(false);
  };
  const handleOnChangeInputTextAdress = (event) => {
    setAddress(event.target.value);
    localStorage.setItem("adress", event.target.value);
  };

  const handleOnChangeInputTextRaison = (event) => {
    setCompanyName(event.target.value);
  };
  const handleOnChangeInputTextNbAgriculteur = (event) => {
    setNbAgriculteur(event.target.value);
  };

  const handleOnChangeInputTextPhone = (event) => {
    setPhone(event.target.value);
  };
  const handleOnChangeInputTextNif = (event) => {
    setNif(event.target.value);
  };

  const handleOnChangeInputTextEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangeInputTextRegion = (event) => {
    setRegion(event.target.value);
  };

  const handleOnChangeInputTextPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnChangeInputTextConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleOnclickSauvegarde = async (event) => {
    event.preventDefault();

    if (!isChecked) {
      setErrorMessage("Veuillez accepter les termes et conditions de location");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8082/api/home/ajoutUser",
        {
          companyName: companyNameForm,
          nif: nifForm,
          address: addressForm,
          phone: phoneForm,
          email: emailForm,
          region: regionForm,
          nbFarme: NbAgriculteurForm,
          password: passwordForm,
          confirmPassword: confirmPasswordForm,
          profile: {
            idprofile: 2,
            profile: "coopérative",
            roles: [],
          },
        }
      );
      console.log(response.data);
      navigate("/PageAccueilAgriculteur");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
    event.preventDefault();
    console.log(EtatCGV);
    navigate("/PageAccueilAgriculteur");

    localStorage.setItem("email", emailForm);
    localStorage.setItem("password", passwordForm);

    if (passwordForm !== confirmPasswordForm) {
      setErrorPassword("Les mots de passe ne sont pas identiques");
    } else {
      navigate("/PageAccueilAgriculteur");
    }
  };
  return (
    <section className="register-page section-b-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3>VOUS ALLEZ VOUS INSCRIRE EN TANT QUE COOPERATIVE</h3>
            <div className="theme-card">
              <form className="theme-form" onSubmit={handleOnclickSauvegarde}>
                <div className="form-row row">
                  <div className="col-md-6">
                    <label htmlFor="email">Raison sociale</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Nom de la société"
                      value={companyNameForm}
                      required
                      onChange={handleOnChangeInputTextRaison}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">NIF</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nif"
                      value={nifForm}
                      placeholder="Votre numéro NIF"
                      required
                      onChange={handleOnChangeInputTextNif}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Siège social</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="votre siège"
                      value={addressForm}
                      required
                      onChange={(event) => handleOnChangeInputTextAdress(event)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Téléphone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tel"
                      placeholder="Votre numéro de tétéphone"
                      value={phoneForm}
                      required
                      onChange={(event) => handleOnChangeInputTextPhone(event)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Votre adresse e-mail"
                      value={emailForm}
                      required
                      onChange={(event) => handleOnChangeInputTextEmail(event)}
                    />
                  </div>
                  <div className="col-md-6" style={{ marginBottom: "20px" }}>
                    <label htmlFor="mon-menu">région :</label>
                    <select
                      id="region"
                      className="form-control"
                      value={regionForm}
                      onChange={handleOnChangeInputTextRegion}
                    >
                      <option value="">--------------------</option>
                      <option value="Alaotra Mangoro">Alaotra Mangoro</option>
                      <option value="Analamanga">Analamanga</option>
                      <option value="Atsimo Andrefana">Atsimo Andrefana</option>
                      <option value="Itasy">Itasy</option>
                      <option value="Menabe">Menabe</option>
                      <option value="Vakinakaratra">Vakinakaratra</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Nombre Agriculteur</label>
                    <input
                      type="number"
                      className="form-control"
                      id="NbAgriculteur"
                      placeholder="Nombre agriculteur"
                      value={NbAgriculteurForm}
                      required
                      onChange={(event) =>
                        handleOnChangeInputTextNbAgriculteur(event)
                      }
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="review">Mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder=" votre mot de passe"
                      value={passwordForm}
                      required
                      onChange={(event) =>
                        handleOnChangeInputTextPassword(event)
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="review">Confirmer mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      id="passConfirm"
                      placeholder=" Confirmer mot de passe"
                      value={confirmPasswordForm}
                      required
                      onChange={(event) =>
                        handleOnChangeInputTextConfirmPassword(event)
                      }
                    />
                  </div>
                </div>

                <div id="checkTermeCondition" className="mt-4">
                  <input
                    type="checkbox"
                    name="checkbox-button"
                    value="value"
                    id="checkPlus"
                    className="mr-2"
                    checked={isChecked}
                    onChange={handleOnChangecheckboxcgv}
                  />
                  <a id="addCheckboxBtn" href="#">
                    <Terme />
                  </a>
                </div>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                {errorPassword && (
                  <p style={{ color: "red" }}>{errorPassword}</p>
                )}

                <div>
                  <input
                    type="submit"
                    className="btn btn-solid w-auto"
                    value={"S'inscrire"}
                  />
                </div>
              </form>
            </div>
            <div className="form-row row"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SignUpCooperative;
