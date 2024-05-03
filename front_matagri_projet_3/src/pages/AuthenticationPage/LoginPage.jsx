import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../assets/css/StyleLoginPage.css";
import Avatar from "../avatar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8082/api/home/authentification",
        {
          email: email,
          password: password,
        }
      );
      if (response.data) {
        // Stocker les informations de l'utilisateur dans le local storage
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        localStorage.setItem("idUser", response.data.idUser); // Ajouter l'idUser
        
        // Gérer la redirection en fonction du profil de l'utilisateur
        if (response.data.profile.profile === "fournisseur") {
          navigate("/dashboard_fournisseur");
          toast.success("Authentification réussie!!");
        } else if (response.data.profile.profile === "cooperative") {
          toast.success("Authentification réussie!!");
          setIsConnected(true);
          navigate("/ProfileAgriculteur");
        } else if (response.data.profile.profile === "agriculteur") {
          toast.success("Authentification réussie!!");
          setIsConnected(true);
          navigate("/");
        }
  
        // Réinitialiser les champs email et password après soumission du formulaire
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setError("Email ou mot de passe incorrect.");
      console.error("Échec de la connexion:", error);
    }
  };
  
  return (
    <section id="LoginPageSection" className="login-page section-b-space">
      <div className="container ">
        <div className="col-lg-6">
          <h3>Login</h3>
          <div className="theme-card">
            <form className="theme-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Votre adresse Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="btn btn-solid">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
      <Avatar isConnected={isConnected} />
    </section>
  );
}

export default Login;