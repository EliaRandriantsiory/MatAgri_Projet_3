import { Link, useNavigate } from "react-router-dom";
import "../assets/css/StyleLoginPage.css";
import {useEffect, useState } from "react";
import axios from "axios";


function Login() {
  const [currentProfilUSer, setCurrentProfilUser] = useState({});
  useEffect(() => {
    axios.post('http://localhost:8082/api/home/authentification',{
      email:"rakoto@gmail.com",
      password:"rakoton"
    }

    )
  .then((response) => {
    // Récupérer les données renvoyées par le backend
    // setCurrentUser(response.data);
     setCurrentProfilUser({...response.data}) 
    
  })
  .catch((error) => {
    // Gérer les erreurs de la requête
    console.error(error);
  });
  
  },[])
 
  const navigate = useNavigate();

  
  // const handleOnClickLogout = (event) => {
  //   currentProfilUSer({})
  //   Navigate("/home");
  // };
  // setCurrentProfilUser({...user})
    console.log(currentProfilUSer)
    if (Object.keys(currentProfilUSer).length !== 0) {
        console.log("Bonjour");
      } else {
        navigate("/home");
        console.log("Erreur");
      }

  return (
    <>
      <section id="LoginPageSection" className="login-page section-b-space">
        <div className="container ">
          <div className="col-lg-6">
            <h3>Login</h3>
            <div className="theme-card">
              <form className="theme-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Votre adresse Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="review">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="review"
                    placeholder="Votre mot de passe"
                    required
                  />
                </div>
                <Link to={"/PageAccueilAgriculteur"} className="btn btn-solid">
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
