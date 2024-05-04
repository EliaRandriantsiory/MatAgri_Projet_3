import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Profile() {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ici, vous devez récupérer les données de l'utilisateur depuis le localStorage ou l'API
        const userData = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(userData);
        console.log(userData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="tab-pane fade" id="profile">
        <div className="row">
          <div className="col-12">
            <div className="card mt-0">
              <div className="card-body">
                <div className="dashboard-box">
                  <div className="dashboard-title">
                    <h4>Profile</h4>
                  </div>
                  <div className="dashboard-detail">
                    <ul>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Nom</h6>
                          </div>
                          <div className="right">
                            <h6>{currentUser.name}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Prénom</h6>
                          </div>
                          <div className="right">
                            <h6>{currentUser.lastname}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>CIN</h6>
                          </div>
                          <div className="right">
                            <h6>{currentUser.cin}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Adresse Email</h6>
                          </div>
                          <div className="right">
                            <h6>{currentUser.email ? currentUser.email : "Email non disponible"}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Région</h6>
                          </div>
                          <div className="right">
                            <h6>{currentUser.region}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Adresse</h6>
                          </div>
                          <div className="right">
                            <h6>{currentUser.address}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Téléphone</h6>
                          </div>
                          <div className="right">
                            <h6>{currentUser.phone}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Password</h6>
                          </div>
                          <div className="right">
                            <h6>*******</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
