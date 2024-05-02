
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Commande from "./component/commande";
import Profile from "./component/profil";
import Wishlist from "./component/wishlist";
function DashBordAgriculteur() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const  [lastname, setLastname] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cin, setCin] = useState("");
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
          axios.get("http://localhost:8082/api/home/listPersonnes",{
  name: name,
  lastname: lastname,
  region: region,
  address: address,
  phone: phone,
  cin: cin,
})
        localStorage.setItem("name", JSON.stringify(response.data.name))
        localStorage.setItem("lastname", JSON.stringify(response.data.lastname))
        localStorage.setItem("region", JSON.stringify(response.data.region))
        localStorage.setItem("address", JSON.stringify(response.data.adress))
        localStorage.setItem("phone", JSON.stringify(response.data.phone))
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [email, password]);

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
    <div>
      <section className="dashboard-section section-b-space user-dashboard-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="dashboard-sidebar">
                <div className="profile-top">
                  <div className="profile-image">
                  <i className="fa-solid fa-circle-user img-fluid" style={{color: '#FFB000', height:"250px", marginLeft:'20px'}}></i>
                  </div>
                  <div className="profile-detail">
                    <h5>{localStorage.getItem("name")}</h5>
                    <h6>{localStorage.getItem("email") ? localStorage.getItem("email") : "Email non disponible"}</h6>
                  </div>
                </div>
                <div className="faq-tab">
                  <ul className="nav nav-tabs" id="top-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        data-bs-target="#info"
                        className="nav-link active"
                      >
                        Mon wishlist
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        data-bs-target="#orders"
                        className="nav-link"
                      >
                        Mes commandes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        className="nav-link"
                      >
                        Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="faq-content tab-content" id="top-tabContent">
                <Wishlist/>
                <Commande/>
                <Profile/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashBordAgriculteur;