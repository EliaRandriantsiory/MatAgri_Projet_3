function ProfilFournisseur() {
    return ( 
        <>
            <div className="tab-pane fade" id="settings">
              <div className="row">
                <div className="col-12">
                  <div className="card mt-0">
                    <div className="card-body">
                      <div className="dashboard-box">
                        <div className="dashboard-title">
                          <h4>settings</h4>
                        </div>
                        <div className="dashboard-detail">
                          <div className="account-setting">
                            <h5>Notifications</h5>
                            <div className="row">
                              <div className="col">
                                <div className="form-check">
                                  <input
                                    className="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    defaultValue="option1"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleRadios1"
                                  >
                                    Allow Desktop Notifications
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="account-setting">
                            <h5>deactivate account</h5>
                            <div className="row">
                              <div className="col">
                                <div className="form-check">
                                  <input
                                    className="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios1"
                                    id="exampleRadios4"
                                    defaultValue="option4"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleRadios4"
                                  >
                                    I have a privacy concern
                                  </label>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-solid btn-xs"
                                >
                                  Deactivate Account
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="account-setting">
                            <h5>Delete account</h5>
                            <div className="row">
                              <div className="col">
                                <div className="form-check">
                                  <input
                                    className="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios3"
                                    id="exampleRadios7"
                                    defaultValue="option7"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleRadios7"
                                  >
                                    No longer usable
                                  </label>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-solid btn-xs"
                                >
                                  Delete Account
                                </button>
                              </div>
                            </div>
                          </div>
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
export default ProfilFournisseur;