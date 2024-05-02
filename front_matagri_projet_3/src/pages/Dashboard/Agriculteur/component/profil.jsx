
function Profile() {
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
                              {/* <EditPersonne/> */}
                            </div>
                            <div className="dashboard-detail">
                              <ul>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Nom</h6>
                                    </div>
                                    <div className="right">
                                      <h6>{localStorage.getItem("name")}</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Prénom</h6>
                                    </div>
                                    <div className="right">
                                      <h6>{localStorage.getItem("lastname")}</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>CIN</h6>
                                    </div>
                                    <div className="right">
                                      <h6>{localStorage.getItem("cin")}</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Adresse Email</h6>
                                    </div>
                                    <div className="right">
                                      <h6>{localStorage.getItem("email") ? localStorage.getItem("email") : "Email non disponible"}</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Région</h6>
                                    </div>
                                    <div className="right">
                                      <h6>{localStorage.getItem("region")}</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Adresse</h6>
                                    </div>
                                    <div className="right">
                                      <h6>{localStorage.getItem("address")}</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Téléphone</h6>
                                    </div>
                                    <div className="right">
                                      <h6>
                                        {localStorage.getItem("phone")}
                                      </h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Password</h6>
                                    </div>
                                    <div className="right">
                                      <h6>
                                        *******{" "}
                                      </h6>
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