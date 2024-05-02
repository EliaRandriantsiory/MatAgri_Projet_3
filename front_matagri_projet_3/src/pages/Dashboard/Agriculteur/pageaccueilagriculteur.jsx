import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
function PageAccueilAgriculteur() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const  [lastname, setLastname] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [currentProfilUser, setCurrentProfilUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (email && password) {
      axios
        .post("http://localhost:8082/api/home/authentification", {
          email: email,
          password: password,
        })
        .then((response) => {
          localStorage.setItem("email", JSON.stringify(response.data.email));
          setCurrentProfilUser(response.data.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [email, password]);

  useEffect(() => {
    console.log(currentProfilUser)
  },[])

  const handleOnClickLogout = (event) => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    localStorage.removeItem("lastname");
    localStorage.removeItem("region");
    localStorage.removeItem("address");
    localStorage.removeItem("phone");
    localStorage.removeItem("cin");
    setCurrentProfilUser({});
    navigate("/home");
  };

  return (
    <>
      <header className="header-2">
        <>
          <div className="breadcrumb-section">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="page-title">
                    <h2>Tableau de bord</h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <nav aria-label="breadcrumb" className="theme-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home" data-lng="en">
                          Accueil
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        <a href="#" onClick={handleOnClickLogout}>Déconnexion</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </>
      </header>
      <Outlet />
      <footer className="footer-light">
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    <img src="assets/images/icon/logo/Logo-_Mat_2.png" alt="" />
                  </div>
                  <p style={{textAlign:'center' ,fontSize:'14px'}}>
                  Application de location, livraison et mutualisation de
                    matériels agricoles.
                  </p>
                  <div className="footer-social" style={{ marginLeft: '127px'}}>
                    <ul>
                      <li>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f " style={{ color: '#004225'}} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-google" style={{color:'#004225'}}/>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ color: '#004225' }} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color:'#004225'}}/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4 style={{ fontSize: '14px' }}>Nos catégories</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Tracteurs</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Motoculteurs</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Charrues</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Moissonneuses</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Décompactateur</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                  <h4 style={{ fontSize: '14px' }}>Pourquoi nous choisir ?</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Louer du matériel agricole</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Mutualisation</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Mes produits que j'adore</a>
                      </li>
                      <li>
                        <a href="#" style={{textAlign:'justify' ,fontSize:'14px'}}>Nous contacter</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4 style={{ fontSize: '14px', marginLeft: '25px' }}>Nos informations</h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li>
                        <i className="fa fa-map-marker" style={{textAlign:'justify' ,fontSize:'14px', paddingRight:'10px'}}/>
                        MatAgri, Faravohitra, <br/>101 Antananarivo
                      </li>
                      <li>
                        <i className="fa fa-phone" style={{textAlign:'justify' ,fontSize:'14px' , paddingRight:'10px'}}/>
                        +261 34 20 125 43
                      </li>
                      <li>
                        <i className="fa fa-envelope" style={{textAlign:'justify' ,fontSize:'14px' , paddingRight:'10px'}}/>
                        Email : <a href="#">matagri@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <div className="theme-settings">
        <ul>
          <li>
            <div className="dark-btn">Dark</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PageAccueilAgriculteur;