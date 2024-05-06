import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TabPaneProfile() {
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
        <div className="row">
                <div className="col-12">
                  <div className="card mt-0">
                    <div className="card-body">
                      <div className="dashboard-box">
                        <div className="dashboard-title">
                          <h4>Profil</h4>
                          <span
                            data-toggle="modal"
                            data-bs-target="#edit-profile"
                          >
                            edit
                          </span>
                        </div>
                        <div className="dashboard-detail">
                          <ul>
                            <li>
                              <div className="details">
                                <div className="left">
                                  <h6>Nom du fournisseur</h6>
                                </div>
                                <div className="right">
                                  <h6>{currentUser.companyName}</h6>
                                </div>
                              </div>
                            </li>
                            {/* Repeat this structure for other list items */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     );
}

export default TabPaneProfile;