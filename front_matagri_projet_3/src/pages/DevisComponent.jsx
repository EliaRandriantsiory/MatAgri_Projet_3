import NombreToLetter from "../utils/nombreEnLettre";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function DevisComponents() {
  const exportPDF = () => {
    const input = document.getElementById("pdf-content"); // Obtenez une référence à l'élément contenant le contenu à inclure dans le PDF

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("demo.pdf");
    });
  };
  return (
    <div>
      <section className="theme-invoice-1 section-b-space">
        <div className="container" id="pdf-content">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="invoice-wrapper">
                <div className="invoice-header">
                  <div className="upper-icon">
                    <img
                      src="../assets/images/invoice/invoice.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="row header-content">
                    <div className="col-md-6">
                      <img
                        src="./Logo-_Mat_2.png"
                        className="w-50 h-60"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 text-md-end mt-md-0 mt-4">
                      <h3>MATAgri</h3>
                      <div className="mt-md-4 mt-3">
                        <h4 className="mb-2">Antananarivo, 101</h4>
                        <h4 className="mb-0">Faravohitra</h4>
                      </div>
                    </div>
                  </div>
                  <div className="detail-bottom">
                    <table>
                      <tr>
                        <td>
                          <table>
                            <tr>
                              <td>
                                <h4>Fait le :</h4>
                              </td>
                              <td>
                                <h4>12 mars 2024</h4>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h4>Nom :</h4>
                              </td>
                              <td>
                                <h4>Kotobe</h4>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td>
                          <table>
                            <tr>
                              <td>
                                <h4>Devis n° :</h4>
                              </td>
                              <td>
                                <h4>0001</h4>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h4>email :</h4>
                              </td>
                              <td>
                                <h4>user@gmail.com</h4>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="invoice-body table-responsive-md">
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr >
                        <th style={{ textTransform: "none" }}>Nom du materiel</th>
                        <th style={{ textTransform: "none" }}>Description</th>
                        <th style={{ textTransform: "none" }}>Prix</th>
                        <th style={{ textTransform: "none" }}>De</th>
                        <th style={{ textTransform: "none" }}>A</th>
                        <th style={{ textTransform: "none" }}>Montant</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>kubota</td>
                        <td>kubota 220cv</td>
                        <td>120 000 Ar</td>
                        <td>12-03-2024</td>
                        <td>07-04-2024</td>
                        <td>120 000 Ar</td>
                      </tr>
                      <tr>
                        <td>kubota</td>
                        <td>kubota 220cv</td>
                        <td>120 000 Ar</td>
                        <td>12-03-2024</td>
                        <td>07-04-2024</td>
                        <td>120 000 Ar</td>
                      </tr>
                      <tr>
                        <td>kubota</td>
                        <td>kubota 220cv</td>
                        <td>120 000 Ar</td>
                        <td>12-03-2024</td>
                        <td>07-04-2024</td>
                        <td>120 000 Ar</td>
                      </tr>
                      <tr>
                        <td>kubota</td>
                        <td>kubota 220cv</td>
                        <td>120 000 Ar</td>
                        <td>12-03-2024</td>
                        <td>07-04-2024</td>
                        <td>120 000 Ar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-end">
                  <table style={{ border: "none" }}>
                    <tbody>
                      <tr>
                        <td>
                          <label
                            style={{
                              fontWeight: "bold",
                              marginRight: "50px",
                            }}
                          >
                            PRIX TOTAL :
                          </label>
                        </td>
                        <td>
                          <label
                            style={{
                              textAlign: "left",
                              marginRight: "60px",
                            }}
                          >
                            320 080 Ar
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ textAlign: "center" }}>
                  <label style={{ fontWeight: "bold", marginRight: "25px" }}>
                    Arrêté le présent devis à la somme de :
                  </label>
                  <label
                    style={{
                      textAlign: "left",
                      marginRight: "25px",
                    }}
                  >
                    {NombreToLetter(320080)} Ariary
                  </label>
                </div>

                <div className="invoice-footer text-end">
                  <div className="buttons">
                    <a
                      href="#"
                      className="btn black-btn btn-solid me-2"
                      onclick="window.print();"
                    >
                      Exporter en PDF
                    </a>
                    <button
                      className="btn btn-solid rounded-2"
                      onClick={exportPDF}
                    >
                      Imprimer
                    </button>
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
