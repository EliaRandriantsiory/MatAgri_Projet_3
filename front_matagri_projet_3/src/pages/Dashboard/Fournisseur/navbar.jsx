import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modification from "../../../components/componentproduct/modification";
import SupprimerMateriel from "../../../components/componentproduct/suppressionMateriel";
import TableRow from "../../../components/componentproduct/tableRowMat";
import TabPaneSetting from "./component/tabPaneSettings";
import TabPaneDashboard from "./component/tabPaneDashboard";
import TabPaneProducts from "./component/tabPaneProducts";
import TabPaneOrders from "./component/tabPaneOrders";
import TabPaneProfile from "./component/tabPaneProfile";
function Navigation() {
  
  const [currentProfilUser, setCurrentProfilUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    
    

      // initialisation donnée current user
    axios
      .post("http://localhost:8082/api/home/authentification", {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("pwd"),
      })
      .then((response) => {
        setCurrentProfilUser(response.data)
      });

  }, []);
  if(!currentProfilUser){
    navigate("/home");
  }
  
  // console.log(listMateriel);

  const handleOnClickLogout = (event) => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
    localStorage.clear()
    setCurrentProfilUser({});

    navigate("/home");
  };

  return (
    <div className="row">
        <div className="col-lg-3">
          <div className="profile-top">
            <div className="profile-image">
              <img
                src="/front_matagri_projet_3/public/assets/images/logos/17.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="profile-detail">
              <h5>Fashion Store</h5>
              <h6>750 followers | 10 review</h6>
              <h6>
                {currentProfilUser.name}
              </h6>
            </div>
          </div>
          <div className="faq-tab">
            <ul className="nav nav-tabs" id="top-tab" role="tablist">
              <li className="nav-item">
                <Link
                  data-bs-toggle="tab"
                  className="nav-link active"
                  to={"#dashboard"}
                >
                  dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-bs-toggle="tab"
                  className="nav-link"
                  to={"#products"}
                >
                  products
                </Link>
              </li>
              <li className="nav-item">
                <Link data-bs-toggle="tab" className="nav-link" to={"#orders"}>
                  orders
                </Link>
              </li>
              <li className="nav-item">
                <Link data-bs-toggle="tab" className="nav-link" to={"#profile"}>
                  profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-bs-toggle="tab"
                  className="nav-link"
                  to={"#settings"}
                >
                  settings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="modal"
                  data-bs-target="#logout"
                  to={"/home"}
                  onClick={(event) => handleOnClickLogout(event)}
                >
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="faq-content tab-content" id="top-tabContent">
            <div className="tab-pane fade show active" id="dashboard">
            <TabPaneDashboard />
            </div>
            <div className="tab-pane fade" id="products">
            <TabPaneProducts  />
            </div>
            <div className="tab-pane fade" id="orders">
              <TabPaneOrders />
            </div>
            <div className="tab-pane fade" id="profile">
            <TabPaneProfile />
            </div>
            <div className="tab-pane fade" id="settings">
              <TabPaneSetting />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navigation;
