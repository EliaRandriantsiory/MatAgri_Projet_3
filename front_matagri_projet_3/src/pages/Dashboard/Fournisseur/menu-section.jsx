function Menu() {
  return (
    <div className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="page-title">
              <h2> dashboard</h2>
            </div>
          </div>
          <div className="col-sm-6">
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Accueil</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  dashboard
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
