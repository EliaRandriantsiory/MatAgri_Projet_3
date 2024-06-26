import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/SignUpProvider/provider.css";
function SignUpProvider() {
  const navigate = useNavigate();
  const [companyNameForm, setCompanyName] = useState("")
  const [createForm, setCreate] = useState("")
  const [nifForm, setNif] = useState("")
  const [addressForm, setAddress] = useState("");
  const [phoneForm, setPhone] = useState("");
  const [emailForm, setEmail] = useState("");
  const [regionForm, setRegion] = useState("");
  const [EtatCGV, setEtatCgv] = useState("");
  const [passwordForm, setPassword] = useState("");
  const [confirmPasswordForm, setConfirmPassword] = useState("");


  const handleOnChangecheckboxcgv = (event) => {
    setEtatCgv(event.target.value);
    console.log(event.target.value)
  };

  const handleOnChangeInputTextAdress = (event) => {
    setAddress(event.target.value);
    localStorage.setItem('adress',event.target.value)
  };

  const handleOnChangeInputTextNif = (event) => {
    setNif(event.target.value);
    localStorage.setItem('nif',event.target.value)
  };

  const handleOnChangeInputTextPhone = (event) => {
    setPhone(event.target.value);
    localStorage.setItem('phone',event.target.value)
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
  
  const handleOnChangeInputTextCompany = (event) => {
    setCompanyName(event.target.value);
  };

  const handleOnclickSauvegarde = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/api/home/ajoutUser", {
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
          roles: []
      }
      });
      console.log(response.data);
      navigate("/dashboard_fournisseur");
    } catch (error) {

      console.error("Erreur lors de l'inscription :", error);
    }
    event.preventDefault();
    console.log(EtatCGV)
    navigate("/dashboard_fournisseur")

    localStorage.setItem('email', emailForm);
    localStorage.setItem('password', passwordForm);
    
    if(passwordForm!==confirmPasswordForm){
      navigate("/InscriptionAgriculteur")
    }else{
    navigate("/dashboard_fournisseur")}
  };

  return (
      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>VOUS ALLEZ VOUS INSCRIRE EN TANT QUE FOURNISSEUR</h3>
              <div className="theme-card">
                <form className="theme-form" onSubmit={handleOnclickSauvegarde}>
                  <div className="form-row row">
                    <div className="col-md-6">
                      <label htmlFor="email">Raison sociale</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Votre raison sociale"
                        required
                        value={companyNameForm}
                        onChange={(event) => handleOnChangeInputTextCompany(event)}
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
                        value={nifForm}
                        onChange={(event) => handleOnChangeInputTextNif(event)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Siège social</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Votre siège social"
                        required
                        value={addressForm}
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
                        required
                        value={phoneForm}
                        onChange={(event) => handleOnChangeInputTextPhone(event)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Votre adresse email"
                        required
                        value={emailForm}
                        onChange={(event) => handleOnChangeInputTextEmail(event)}
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
                        value={passwordForm}
                        onChange={(event) => handleOnChangeInputTextPassword(event)}
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
                        value={confirmPasswordForm}
                        onChange={(event) => handleOnChangeInputTextConfirmPassword(event)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="mon-menu">Région :</label>
                      <select id="region" value={regionForm} className="form-control" onChange={handleOnChangeInputTextRegion}>
                        <option value="">-------------</option>
                        <option value="Alaotra Mangoro">Alaotra Mangoro</option>
                        <option value="Analamanga">Analamanga</option>
                        <option value="Atsimo Andrefana">Atsimo Andrefana</option>
                        <option value="Itasy">Itasy</option>
                        <option value="Menabe">Menabe</option>
                        <option value="Vakinakaratra">Vakinakaratra</option>
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
                    <a id="addCheckboxBtn" href="#" onChange={handleOnChangecheckboxcgv}>
                      Terme et contrat de location
                    </a>
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
    
  );
  }


export default SignUpProvider;
