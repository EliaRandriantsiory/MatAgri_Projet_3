import React from "react";
import { useEffect, useState  } from "react";
import { useNavigate   } from 'react-router-dom';

import axios from "axios";
import DashboardUser from "../dasboard";
function InscriptionAgriculteur() {
  const [inscriptionAgriculteurRedirect, setInscriptionAgriculteurRedirect] = useState()
  
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

  const handleOnChangeInputTextNom = (event) => {
    setName(event.target.value);
    localStorage.setItem('nom',event.target.value)
  };
  const handleOnChangeInputTextLastName = (event) => {
    setLastName(event.target.value);
    localStorage.setItem('prenom',event.target.value)
  };
  const handleOnChangeInputTextAddress = (event) => {
    setAddress(event.target.value);
    localStorage.setItem('adresse',event.target.value)
  };
  const handleOnChangeInputTextPhone = (event) => {
    setPhone(event.target.value);
    localStorage.setItem('phone',event.target.value)
  };
  const handleOnChangeInputTextCin = (event) => {
    setCin(event.target.value);
    localStorage.setItem('cin',event.target.value)
  };
  const handleOnChangeInputTextEmail = (event) => {
    setEmail(event.target.value);
    localStorage.setItem('email',event.target.value)
  };
  const handleOnChangeInputTextRegion = (event) => {
    setRegion(event.target.value);
    localStorage.setItem('region',event.target.value)
  };
  const handleOnChangeInputTextPassword = (event) => {
    setPassword(event.target.value);

  };
  const handleOnChangeInputTextConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };


  const handleOnclickSauvegarde = (event) => {
    event.preventDefault();
    console.log(emailForm)
    sessionStorage.setItem('email',emailForm)
      navigate("/Dashboard")
    // if(passwordForm!==confirmPasswordForm){
    //   navigate("/InscriptionAgriculteur")
    // }
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
    <>
      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Inscription</h3>
              <div className="theme-card">
                <form className="theme-form" onSubmit={handleOnclickSauvegarde}>
                  <div className="form-row row">
                    <div className="col-md-6">
                      <label htmlFor="email">Nom</label>
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
                      <label htmlFor="cin">CIN</label>
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
                      <label htmlFor="email">Prénom</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Votre prénom"
                        
                        value={lastnameForm}
                        onChange={(event) =>
                          handleOnChangeInputTextLastName(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="telephone">Téléphone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tel"
                        placeholder="Votre numéro de tétéphone"
                        
                        value={phoneForm}
                        onChange={(event) =>
                          handleOnChangeInputTextPhone(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="adresse">Adresse</label>
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
                      <label htmlFor="review">Mot de passe</label>
                      <input
                        type="password"
                        className="form-control"
                        id="passeword"
                        placeholder=" votre mot de passe"
                        
                        onChange={(event) =>
                          handleOnChangeInputTextPassword(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Votre adresse email"
                        
                        value={emailForm}
                        onChange={(event) =>
                          handleOnChangeInputTextEmail(event)
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
                        
                        onChange={(event) =>
                          handleOnChangeInputTextConfirmPassword(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="mon-menu">région :</label>
                      <select
                        id="region"
                        onChange={handleOnChangeInputTextRegion}
                        className="form-control"
                      >
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
                    <div id="checkTermeCondition">
                      <input
                        type="checkbox"
                        name="checkbox-button"
                        value="value"
                        id="checkPlus"
                      ></input>
                      <a id="addCheckboxBtn" href="#">
                        Terme et contrat de location
                      </a>
                    </div>
                  </div>
                  <input
                    className="btn btn-solid w-auto"
                    type="submit"
                    value={"S'inscrire"}
                  />
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

export default InscriptionAgriculteur;
