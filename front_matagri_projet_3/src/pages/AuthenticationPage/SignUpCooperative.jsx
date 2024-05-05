import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    const trimmedValue = numericValue.slice(0, 10);
    setPhone(trimmedValue);
  };
  const handleOnChangeInputTextNif = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    const trimmedValue = numericValue.slice(0, 10);
    localStorage.setItem("nif", enteredValue);
    setNif(trimmedValue);
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

    if (passwordForm !== confirmPasswordForm) {
      setErrorPassword("Les mots de passe ne correspondent pas");
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

      localStorage.setItem('email', emailForm);
      localStorage.setItem('password', passwordForm);
      toast.success('Inscription réussie !');
      navigate("/ProfileAgriculteur");

    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);

    }
  };
  return (
    <section className="register-page section-b-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 style={{ color: "#ffb000" }}>INSCRIPTION COOPERATIVE</h3>
            <div className="theme-card">
              <form className="theme-form" onSubmit={handleOnclickSauvegarde}>
                <div className="form-row row">
                  <div className="col-md-6">
                    <label htmlFor="raison">Raison sociale</label>
                    <input
                      type="text"
                      className="form-control"
                      id="raison"
                      placeholder="Nom de la coopérative"
                      value={companyNameForm}
                      required
                      onChange={handleOnChangeInputTextRaison}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="siege" style={{ fontSize: "14px" }}>
                      Siège social
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="siege"
                      placeholder="votre siège"
                      value={addressForm}
                      required
                      onChange={(event) => handleOnChangeInputTextAdress(event)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="nif" style={{ fontSize: "14px" }}>
                      NIF
                    </label>
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
                    <label htmlFor="telephone" style={{ fontSize: "14px" }}>
                      Téléphone
                    </label>
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
                    <label htmlFor="email" style={{ fontSize: "14px" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Votre adresse e-mail"
                      value={emailForm}
                      required
                      onChange={(event) => handleOnChangeInputTextEmail(event)}
                    />
                  </div>
                  <div className="col-md-6" style={{ marginBottom: "20px" }}>
                    <label htmlFor="mon-menu" style={{ fontSize: "14px" }}>
                      Région
                    </label>
                    <input
                      type="text"
                      id="region"
                      placeholder="Votre région"
                      className="form-control"
                      value={regionForm}
                      onChange={handleOnChangeInputTextRegion}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="nb" style={{ fontSize: "14px" }}>
                      Nombre Agriculteurs
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="NbAgriculteur"
                      placeholder="Nombre agriculteurs"
                      value={NbAgriculteurForm}
                      required
                      onChange={(event) =>
                        handleOnChangeInputTextNbAgriculteur(event)
                      }
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="review" style={{ fontSize: "14px" }}>
                      Mot de passe
                    </label>
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
                    <label htmlFor="review" style={{ fontSize: "14px" }}>
                      Confirmer mot de passe
                    </label>
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

                <div id="checkTermeCondition">
                  <input
                    type="checkbox"
                    name="checkbox-button"
                    value="value"
                    id="checkPlus"
                    className="mr-2"
                    checked={isChecked}
                    onChange={handleOnChangecheckboxcgv}

                    style={{ marginRight: '10px' }}
                    />
                    {/* ito le terme */}
                    <a id="addCheckboxBtn" href="#">
                    <Terme onAccept={() => setIsChecked(true)}/>
                    </a>
                    {/* --------- */}
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    {errorPassword && (
                  <p style={{ color: "red" }}>{errorPassword}</p>
                )}
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-solid w-auto"
                      value={"S'inscrire"}
                      disabled={!isChecked}
                      style={{
                      backgroundColor: isChecked ? '#004225' : '#ccc',
                      color: '#fff', 
                      cursor: isChecked ? 'pointer' : 'not-allowed'
                    }}
                    />
                  </div>
                </form>
              </div>
              <div className="form-row row"></div>

            </div>
            <div className="form-row row"></div>
          </div>
        </div>
     
      <ToastContainer />
    </section>
  );
}
export default SignUpCooperative;
