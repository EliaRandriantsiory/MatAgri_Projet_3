import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Profile() {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Récupérer l'ID utilisateur depuis le local storage
        const userId = localStorage.getItem('currentUser');
        setUserDetails(userId)
        if (userId) {
          // Récupérer les détails de l'utilisateur depuis l'API
          const response = await axios.get(`http://localhost:8082/api/home/listPersonnes/${userId}`);
          setUserDetails(response.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
      }
    };

    fetchUserDetails();
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
                            <h6>{userDetails.name}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Prénom</h6>
                          </div>
                          <div className="right">
                            <h6>{userDetails.lastname}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>CIN</h6>
                          </div>
                          <div className="right">
                            <h6>{userDetails.cin}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Adresse Email</h6>
                          </div>
                          <div className="right">
                            <h6>{userDetails.email ? userDetails.email : "Email non disponible"}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Région</h6>
                          </div>
                          <div className="right">
                            <h6>{userDetails.region}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Adresse</h6>
                          </div>
                          <div className="right">
                            <h6>{userDetails.address}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="details">
                          <div className="left">
                            <h6>Téléphone</h6>
                          </div>
                          <div className="right">
                            <h6>{userDetails.phone}</h6>
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
