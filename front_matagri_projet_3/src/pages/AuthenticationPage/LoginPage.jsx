import { Link } from "react-router-dom";
import "../assets/css/StyleLoginPage.css";
function Login() {
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
