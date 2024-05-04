import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Commande from './component/commande';
import Profile from './component/profil';
import axios from 'axios';

function DashBordAgriculteur() {
  const [currentUser, setCurrentUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(localStorage.getItem("currentUser"))
  },[])

  const handleOnClickLogout = () => {
    localStorage.clear();
    setCurrentUser({});
    navigate('/home');
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
                    <i className="fa-solid fa-circle-user img-fluid" style={{ color: '#FFB000', height: '250px', marginLeft: '20px' }}></i>
                  </div>
                  <div className="profile-detail">
                    <h5> {currentUser.lastname}</h5>
                    <h6>{currentUser.email ? currentUser.email : 'Email non disponible'}</h6>
                  </div>
                </div>
                <div className="faq-tab">
                  <ul className="nav nav-tabs" id="top-tab" role="tablist">
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
                <Commande />
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashBordAgriculteur;
