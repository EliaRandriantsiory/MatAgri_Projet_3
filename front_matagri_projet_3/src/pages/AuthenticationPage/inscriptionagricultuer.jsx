import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function InscriptionAgriculteur() {
  const [label, setLabel] = useState({
    type: "mail",
    content: "Votre mail",
    placeholder: "Entrer ici votre mail",
  });
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
  };
  const handleOnChangeInputTextLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleOnChangeInputTextAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleOnChangeInputTextPhone = (event) => {
    setPhone(event.target.value);
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
  const handleOnclickSauvegarde = (event) => {
    event.preventDefault();
    setForm({
      name: nameForm,
      lastname: lastnameForm,
      address: addressForm,
      phone: phoneForm,
      cin: cinForm,
      email: emailForm,
      region: regionForm,
      password: passwordForm,
      confirmPassword: confirmPasswordForm,
    });

    try {
      const response = axios.post(
        "http://localhost:8082/api/home/add_agriculteur",
        {
          name: nameForm,
          lastname: lastnameForm,
          address: addressForm,
          phone: phoneForm,
          cin: cinForm,
          email: emailForm,
          region: regionForm,
          password: passwordForm,
          profile: {
            idprofile: 1,
            profile: "agriculteur",
            roles: [],
          },
          nif: null,
          stat: null,

          companyName: null,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // console.log("bonjour")
    // console.log(form)
  }, []);
  useEffect(() => {}, [form]);

  //   useEffect(( )=>{
  //     return console.log("phase de démontage")
  // },[form])

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
                        required
                        onChange={(event) => handleOnChangeInputTextNom(event)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">CIN</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cin"
                        placeholder="Votre numéro CIN"
                        required
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
                        required
                        onChange={(event) =>
                          handleOnChangeInputTextLastName(event)
                        }
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
                        onChange={(event) =>
                          handleOnChangeInputTextPhone(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Adresse</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Votre adresse"
                        required
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
                        required
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
                        required
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
                        required
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
