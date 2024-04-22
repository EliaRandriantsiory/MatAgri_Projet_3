import { Form } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { ReactComponent as CalendarIcon } from "../assets/svg/calendar-icon.svg";
import React from "react";
import "../assets/css/calendar/calendar-icon.css";
import axios from "axios";
import { create } from "lodash";

function SignUpCooperative() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [form, setForm] = useState({});
  const [nameForm, setName] = useState("");
  const [lastnameForm, setLastName] = useState("");
  const [NbAgriculteurForm, setNbAgriculteur] = useState("");
  const [addressForm, setAddress] = useState("");
  const [phoneForm, setPhone] = useState("");
  const [cinForm, setCin] = useState("");
  const [emailForm, setEmail] = useState("");
  const [regionForm, setRegion] = useState("");
  const [passwordForm, setPassword] = useState("");
  const [confirmPasswordForm, setConfirmPassword] = useState("");

  const handleOnChangeInputTextRaison = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const CustomDatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="custom-date-picker-input datepiker ">
      <input
        type="text"
        value={value}
        onClick={onClick}
        onChange={() => {}}
        ref={ref}
        className="form-control"
      />
      <span className="calendar-icon-container">
        <CalendarIcon className="calendar-icon" />
      </span>
    </div>
  ));
  const handleOnChangeInputTextNbAgriculteur = (event) => {
    setNbAgriculteur(event.target.value);
  };

  const handleOnChangeInputTextPhone = (event) => {
    setPhone(event.target.value);
  };
  const handleOnChangeInputTextNif = (event) => {
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
      companyName: nameForm,
      nif: lastnameForm,
      seat: addressForm,
      phone: phoneForm,
      cin: cinForm,
      email: emailForm,
      region: regionForm,
      password: passwordForm,
      confirmPassword: confirmPasswordForm,
      create: DatePicker,
    });
    try {
      const response = axios.post(
        "http://localhost:8082/api/home/add_agriculteur",
        {
          companyName: nameForm,
          nif: lastnameForm,
          seat: addressForm,
          phone: phoneForm,
          email: emailForm,
          region: regionForm,
          create: selectedDate,
          password: passwordForm,
          confirmpassword: confirmPasswordForm,
          name: null,
          lastname: null,
          cin: null,
          profile: {
            idprofile: 2,
            profile: "cooperative",
            roles: [],
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {}, [form]);
  return (
    <>
      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>VOUS ALLEZ VOUS INSCRIRE ENT TANT QUE COOPERATIVE</h3>
              <div className="theme-card">
                <form className="theme-form" onSubmit={handleOnclickSauvegarde}>
                  <div className="form-row row">
                    <div className="col-md-6">
                      <label htmlFor="email">Raison social</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=" nom de la société"
                        required
                        onChange={(event) =>
                          handleOnChangeInputTextRaison(event)
                        }
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
                      <label htmlFor="email">Siège social</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="votre siège"
                        required
                        onChange={(event) => handleOnChangeInputTextNif(event)}
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
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Votre adresse e-mail"
                        required
                        onChange={(event) =>
                          handleOnChangeInputTextEmail(event)
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
                        required
                        onChange={(event) =>
                          handleOnChangeInputTextConfirmPassword(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Nombre Agriculteur</label>
                      <input
                        type="text"
                        className="form-control"
                        id="NbAgriculteur"
                        placeholder="Nombre agriculteur"
                        required
                        onChange={(event) =>
                          handleOnChangeInputTextNbAgriculteur(event)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="mon-menu">région :</label>
                      <select id="region" className="form-control">
                        <option value="option1">Alaotra Mangoro</option>
                        <option value="option2">Analamanga</option>
                        <option value="option3">Atsimo Andrefana</option>
                        <option value="option5">Itasy</option>
                        <option value="option6">Menabe</option>
                        <option value="option7">Vakinakaratra</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="datepicker">Date de création</label>
                      <br />
                      <div id="pic">
                        <DatePicker
                          id="datepicker"
                          selected={selectedDate}
                          onChange={handleDateChange}
                          className="form-control"
                          customInput={<customDatePickerInput />}
                        />
                      </div>
                    </div>
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
    </>
  );
}

export default SignUpCooperative;
