import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/SignUpProvider/provider.css";
import TermeF from "./TermeF";
function SignUpProvider() {
  const navigate = useNavigate();
  const [companyNameForm, setCompanyName] = useState("");
  const [createForm, setCreate] = useState("");
  const [nifForm, setNif] = useState("");
  const [addressForm, setAddress] = useState("");
  const [phoneForm, setPhone] = useState("");
  const [emailForm, setEmail] = useState("");
  const [regionForm, setRegion] = useState("");
  const [EtatCGV, setEtatCgv] = useState("");
  const [passwordForm, setPassword] = useState("");
  const [confirmPasswordForm, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [error, setError] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const handleOnChangecheckboxcgv = (event) => {  
    setEtatCgv(event.target.checked);
    setIsChecked(event.target.checked);
    setErrorMessage(false);
  };

  const handleOnChangeInputTextAdress = (event) => {
    setAddress(event.target.value);
    localStorage.setItem("adress", event.target.value);
  };

  const handleOnChangeInputTextNif = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    const trimmedValue = numericValue.slice(0, 10);
    localStorage.setItem("nif", enteredValue);
    setNif(trimmedValue);
  };
  const handleOnChangeInputTextPhone = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    const trimmedValue = numericValue.slice(0, 10);
    localStorage.setItem("phone", enteredValue);
    setPhone(trimmedValue);
  };
  const handleOnChangeInputTextEmail = (event) => {
    setEmail(event.target.value);
    localStorage.setItem("email", event.target.value);
  };

  const handleOnChangeInputTextRegion = (event) => {
    setRegion(event.target.value);
    localStorage.setItem("region", event.target.value);
  };

  const handleOnChangeInputTextPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnChangeInputTextConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleOnChangeInputTextCompany = (event) => {
    setCompanyName(event.target.value);
  };

  const handleOnclickSauvegarde = async (event) => {
    event.preventDefault();

    // Vérifier si les termes et conditions sont acceptés
    if (!isChecked) {
      setErrorMessage("Veuillez accepter les termes et conditions de location");
      return;
    }

    // Vérifier si les mots de passe correspondent
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
          password: passwordForm,
          confirmPassword: confirmPasswordForm,
          profile: {
            idprofile: 3,
            profile: "fournisseur",
            roles: [],
          },
        }

      );
      // console.log(response.data);

      toast.success('Inscription réussie !');

      navigate("/dashboard_fournisseur");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }

    // Réinitialiser les messages d'erreur
    setErrorMessage(false);
    setErrorPassword(false);

    // Enregistrer les informations dans le stockage local
    localStorage.setItem("email", emailForm);
    localStorage.setItem("password", passwordForm);

    // Authentification utilisateur
    try {
      const response = await axios.post(
        "http://localhost:8082/api/home/authentification",
        {
          email: emailForm,
          password: passwordForm,
        }
      );
      if (response.data) {
        // Stocker les informations de l'utilisateur dans le local storage
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        localStorage.setItem("currentUserSession", JSON.stringify(response.data));
        // console.log(response.data)
        // localStorage.setItem("idUser", response.data.idUser); // Ajouter l'idUser
        
        // Gérer la redirection en fonction du profil de l'utilisateur
        if (response.data.profile.profile === "fournisseur") {
          navigate("/dashboard_fournisseur");
          toast.success("Authentification réussie!!");
        } else if (response.data.profile.profile === "cooperative") {
          toast.success("Authentification réussie!!");
          setIsConnected(true);
          navigate("/");
        } else if (response.data.profile.profile === "agriculteur") {
          toast.success("Authentification réussie!!");
          setIsConnected(true);
          navigate("/");
        }
        else{
          // Réinitialiser les champs email et password après soumission du formulaire
          setEmail("");
          setPassword("");
        }
      }
    } catch (error) {
      setError("Email ou mot de passe incorrect.");
      console.error("Échec de la connexion:", error);
    }

  
  };

  return (
    <section className="register-page section-b-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 style={{ color: "#862b0d" }}>INSCRIPTION FOURNISSEUR</h3>
            <div className="theme-card">
              <form className="theme-form" onSubmit={handleOnclickSauvegarde}>
                <div className="form-row row">
                  <div className="col-md-6">
                    <label htmlFor="email" style={{ fontSize: "14px" }}>
                      Raison sociale
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Votre raison sociale"
                      required
                      value={companyNameForm}
                      onChange={(event) =>
                        handleOnChangeInputTextCompany(event)
                      }
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
                      placeholder="Votre siège social"
                      required
                      value={addressForm}
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
                      id="cin"
                      placeholder="Votre numéro NIF"
                      required
                      value={nifForm}
                      onChange={(event) => handleOnChangeInputTextNif(event)}
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
                      required
                      value={phoneForm}
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
                      placeholder="Votre adresse email"
                      required
                      value={emailForm}
                      onChange={(event) => handleOnChangeInputTextEmail(event)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="review" style={{ fontSize: "14px" }}>
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="passeword"
                      placeholder=" votre mot de passe"
                      required
                      value={passwordForm}
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
                      required
                      value={confirmPasswordForm}
                      onChange={(event) =>
                        handleOnChangeInputTextConfirmPassword(event)
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="mon-menu" style={{ fontSize: "14px" }}>
                      Région
                    </label>
                    <input
                      type="text"
                      id="region"
                      placeholder="Votre région"
                      value={regionForm}
                      className="form-control"
                      onChange={handleOnChangeInputTextRegion}
                    />
                  </div>
                </div>
                <div id="checkTermeCondition">
                  <input
                    type="checkbox"
                    name="checkbox-button"
                    value="Check"
                    id="checkPlus"
                    checked={isChecked}
                    onChange={handleOnChangecheckboxcgv}
                    style={{ marginRight: "10px" }}
                  ></input>
                  <a id="addCheckboxBtn" href="#">
                    <TermeF onAccept={() => setIsChecked(true)} />
                  </a>
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
                    style={{
                      backgroundColor: isChecked ? '#004225' : '#ccc',
                      color: '#fff', 
                      cursor: isChecked ? 'pointer' : 'not-allowed'
                    }}
                  />
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

export default SignUpProvider;
