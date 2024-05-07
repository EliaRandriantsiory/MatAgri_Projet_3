import { useState } from "react";

function EditPersonne() {
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
    const trimmedValue = numericValue.slice(0, 10);
    setPhone(trimmedValue);
  };
  
  
  const handleOnChangeInputTextCin = (event) => {
    const enteredValue = event.target.value;
    const numericValue = enteredValue.replace(/\D/g, "");
    const trimmedValue = numericValue.slice(0, 12);
    setCin(trimmedValue);
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
    return ( 
        <>
            <a style={{color: "yellow"}} href data-bs-target="#exampleModal" data-bs-toggle="modal">
                edit
            </a>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modification</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form className="theme-form">
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
                      <label htmlFor="email" style={{fontSize:'14px'}}>Email</label>
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
                      <label htmlFor="mon-menu" style={{fontSize:'14px'}}>Région :</label>
                      <input type="text"
                        id="region"
                        placeholder="votre region"
                        onChange={handleOnChangeInputTextRegion}
                        className="form-control" value={regionForm}/>
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
                    </div>
                    </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-solid" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-solid">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default EditPersonne;