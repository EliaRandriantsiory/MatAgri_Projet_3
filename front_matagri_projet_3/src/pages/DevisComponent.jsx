
function DevisComponents() {
    return (
      <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="multikart" />
        <meta name="keywords" content="multikart" />
        <meta name="author" content="multikart" />
        <link rel="icon" href="../assets/images/favicon/1.png" type="image/x-icon" />
        <link rel="shortcut icon" href="../assets/images/favicon/1.png" type="image/x-icon" />
        <title>Multikart - Multi-purpose E-commerce Html Template</title>
        {/*Google font*/}
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* Icons */}
        <link rel="stylesheet" type="text/css" href="../assets/css/vendors/font-awesome.css" />
        {/* Animate icon */}
        <link rel="stylesheet" type="text/css" href="../assets/css/vendors/animate.css" />
        {/* Themify icon */}
        <link rel="stylesheet" type="text/css" href="../assets/css/vendors/themify-icons.css" />
        {/* Bootstrap css */}
        <link rel="stylesheet" type="text/css" href="../assets/css/vendors/bootstrap.css" />
        {/* Theme css */}
        <link rel="stylesheet" type="text/css" href="../assets/css/style.css" />
        {/* invoice 1 start */}
        <section className="theme-invoice-1 section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 m-auto">
                <div className="invoice-wrapper">
                  <div className="invoice-header">
                    <div className="upper-icon">
                      <img src="../assets/images/invoice/invoice.svg" className="img-fluid" alt="" />
                    </div>
                    <div className="row header-content">
                      <div className="col-md-6">
                        <img src="./Logo-_Mat_2.png" className="w-50 h-60" alt="" />
                      </div>
                      <div className="col-md-6 text-md-end mt-md-0 mt-4">
                        <h2>MATAgri</h2>
                        <div className="mt-md-4 mt-3">
                          <h4 className="mb-2">
                            Antananarivo, 101
                          </h4>
                          <h4 className="mb-0">Faravohitra</h4>
                        </div>
                      </div>
                    </div>
                    <div className="detail-bottom">
                      <ul>
                        <li><span>Fait le :</span><h4> 12 mars 2024</h4></li>
                        <li><span>Devis n° :</span><h4> 908452</h4></li>
                        <li><span>email :</span><h4> user@gmail.com</h4></li>
                      </ul>
                    </div>
                  </div>
                  <div className="invoice-body table-responsive-md">
                    <table className="table table-borderless mb-0">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">nom de materiels</th>
                          <th scope="col">description</th>
                          <th scope="col">prix</th>
                          <th scope="col">date debut</th>
                          <th scope="col">date fin</th>
                          <th scope="col">total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">id</th>
                          <td>kubota</td>
                          <td>kubota 220cv</td>
                          <td>120 000 Ar</td>
                          <td>12-03-2024</td>
                          <td>07-04-2024</td>
                          <td>120 000 Ar</td>
                        </tr>

                      </tbody>
                      <tfoot>
                        <tr>
                          {/* <td colSpan={2} /> */}
                          <td className="font-bold text-dark">PRIX TOTAL</td>
                          <td className="font-bold text-theme">120 000 Ar</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="invoice-footer text-end">
                    <div className="buttons">
                      <a href="#" className="btn black-btn btn-solid rounded-2 me-2" onclick="window.print();">Exporter en  PDF</a>
                      <a href="#" className="btn btn-solid rounded-2" onclick="window.print();">Imprimer</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* invoice 1 end */}
        {/* latest jquery*/}
        {/* Bootstrap js*/}
      </div>
    );
  }
  export default DevisComponents;