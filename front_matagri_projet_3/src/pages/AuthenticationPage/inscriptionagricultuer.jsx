import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import Terme from "./Terme";
function InscriptionAgriculteur() {
  const [inscriptionAgriculteurRedirect, setInscriptionAgriculteurRedirect] = useState()
  const [EtatCGV, setEtatCgv] = useState("");
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [nameForm, setName] = useState("");
  const [lastnameForm, setLastName] = useState("");
  const [addressForm, setAddress] = useState("");
  const [phoneForm, setPhone] = useState("");
  const [cinForm, setCin] = useState("");
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

  const handleOnChangeInputTextNom = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeInputTextLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleOnChangeInputTextAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleOnChangeInputTextPhone = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    setPhone(numericValue);
  };
  
  const handleOnChangeInputTextCin = (event) => {
    setCin(event.target.value);
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
      setErrorPassword("Les mots de passe ne sont pas identiques");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8082/api/home/ajoutUser", {
        address: addressForm,
        phone: phoneForm,
        cin: cinForm,
        name: nameForm,
        lastname: lastnameForm,
        region: regionForm,
        email: emailForm,
        password: passwordForm,
        confirmPassword: confirmPasswordForm,
        profile: {
          idprofile: 1,
          profile: "agriculteur",
          roles: []
        }
      });
      console.log(response.data);
      navigate("/PageAccueilAgriculteur");
      localStorage.setItem('email', emailForm);
      localStorage.setItem('password', passwordForm);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };
 
  useEffect(() => {
    
    setName(localStorage.getItem("nom"))
    setLastName(localStorage.getItem("prenom"))
    setAddress(localStorage.getItem("adresse"))
    setPhone(localStorage.getItem("phone"))
    setCin(localStorage.getItem("cin"))
    setEmail(localStorage.getItem("email"))
    setRegion(localStorage.getItem("region"))
    
  }, []);
  useEffect(() => {console.log(inscriptionAgriculteurRedirect)}, [inscriptionAgriculteurRedirect]);

  return (
      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>INSCRIPTION AGRICULTEUR</h3>
              <div className="theme-card">
                <form className="theme-form" onSubmit={handleOnclickSauvegarde}>
                  <div className="form-row row">
                    <div className="col-md-6">
                      <label htmlFor="nom" style={{fontSize:'14px'}}>Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Votre nom"
                        value={nameForm}
                        onChange={(event) => handleOnChangeInputTextNom(event)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cin" style={{fontSize:'14px'}}>CIN</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cin"
                        placeholder="Votre numéro CIN"
                        
                        value={cinForm}
                        onChange={(event) => handleOnChangeInputTextCin(event)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="prenom" style={{fontSize:'14px'}}>Prénom</label>
                      <input
                        type="text"
                        className="form-control"
                        id="prenom"
                        placeholder="Votre prénom"
                        value={lastnameForm}
                        onChange={(event) =>
                          handleOnChangeInputTextLastName(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="telephone" style={{fontSize:'14px'}}>Téléphone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tel"
                        placeholder="Votre numéro de tétéphone"
                        value={phoneForm}
                        inputMode="numeric"
                        onChange={(event) =>
                          handleOnChangeInputTextPhone(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="adresse" style={{fontSize:'14px'}}>Adresse</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Votre adresse"
                        value={addressForm}
                        onChange={(event) =>
                          handleOnChangeInputTextAddress(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="review" style={{fontSize:'14px'}}>Mot de passe</label>
                      <input
                        type="password"
                        className="form-control"
                        id="passeword"
                        placeholder=" votre mot de passe"
                        value={passwordForm}
                        onChange={(event) =>
                          handleOnChangeInputTextPassword(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" style={{fontSize:'14px'}}>email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Votre adresse email"
                        value={emailForm}
                        onChange={(event) =>
                          handleOnChangeInputTextEmail(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="review" style={{fontSize:'14px'}}>Confirmer mot de passe</label>
                      <input
                        type="password"
                        className="form-control"
                        id="passConfirm"
                        placeholder=" Confirmer mot de passe"
                        value={confirmPasswordForm}
                        onChange={(event) =>
                          handleOnChangeInputTextConfirmPassword(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="mon-menu" style={{fontSize:'14px'}}>région :</label>
                      <select
                        id="region"
                        onChange={handleOnChangeInputTextRegion}
                        className="form-control" value={regionForm}>
                        <option value="-------------">-------------</option>
                        <option value="Alaotra Mangoro">Alaotra Mangoro</option>
                        <option value="Analamanga">Analamanga</option>
                        <option value="Atsimo Andrefana">
                          Atsimo Andrefana
                        </option>
                        <option value="Itasy">Itasy</option>
                        <option value="Menabe">Menabe</option>
                        <option value="Vakinakaratra">Vakinakaratra</option>
                      </select>
                    </div>
                    <br></br>
                    <div id="checkTermeCondition" className="mt-4">
                      <input
                        type="checkbox"
                        name="checkbox-button"
                        value="Check"
                        id="checkPlus"
                        checked={isChecked}
                        onChange={handleOnChangecheckboxcgv}
                        style={{ marginRight: '10px', fontSize: '14px' }}

                      ></input>
                      <a id="addCheckboxBtn" href="#">
                    <Terme onAccept={() => setIsChecked(true)}/>
                    </a>
                    </div>
                  </div>
                    {/* --------- */}
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    {errorPassword && (
                  <p style={{ color: "red" }}>{errorPassword}</p>
                )}
                  <input
                    className="btn btn-solid w-auto"
                    type="submit"
                    value={"S'inscrire"}
                    disabled={!isChecked}
                  />
                </form>
              </div>
              <div className="form-row row"></div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default InscriptionAgriculteur;