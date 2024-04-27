
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/StyleLoginPage.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/home/authentification', {
        email: email,
        password: password
      });
      const token = response.data.token;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('email', JSON.stringify(response.data.email));
      localStorage.setItem('password', JSON.stringify(response.data.password));
      // navigate("/dashboard_fournisseur");
      const userType = response.data.userType;
      
      switch (userType) {
        case 'agriculteur':
          navigate("/PageAccueilAgriculteur");
          break;
        case 'coopérative':
          navigate("/PageAccueilAgriculteur");
          break;
        case 'fournisseur':
          navigate("/dashboard_fournisseur");
          break;
        default:
          break;
      }
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Email ou mot de passe incorrect.');
      console.error('Login failed:', error);
    }
  };

  return (
    <>
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
                <button type="submit" className="btn btn-solid">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;