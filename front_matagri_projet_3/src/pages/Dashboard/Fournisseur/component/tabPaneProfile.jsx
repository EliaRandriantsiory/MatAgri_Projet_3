function TabPaneProfile() {
    return ( 
        <div className="row">
                <div className="col-12">
                  <div className="card mt-0">
                    <div className="card-body">
                      <div className="dashboard-box">
                        <div className="dashboard-title">
                          <h4>profile</h4>
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
                                  <h6>company name</h6>
                                </div>
                                <div className="right">
                                  <h6>Fashion Store</h6>
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