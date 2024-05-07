import NombreToLetter from "../utils/nombreEnLettre";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function DevisComponents() {
  const exportPDF = () => {                                                                                                                               

    const input = document.getElementById("pdf-content"); // Obtenez une référence à l'élément contenant le contenu à inclure dans le PDF
    const buttons = input.querySelectorAll(".buttons");
    buttons.forEach((button) => {
      button.style.display = "none";
    });
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");

        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;

        pdf.addImage(imgData, "PNG", -200, -75, 1000, 800);
        pdf.save("demo.pdf");
        buttons.forEach((button) => {
          button.style.display = "block";
        });
      })
      .catch((err) => console.error(err));
  };
  return (

    <div id="pdf-content">
      <section className="theme-invoice-1 section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="invoice-wrapper">
                <div className="invoice-header">
                  <div className="row header-content">
                    <div className="col-md-6">
                      <img
                        src="./Logo-_Mat_2.png"
                        className="w-50 h-60"
                        alt=""
                      />
                    </div>

                  </div>
                  <div className="detail-bottom">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6">
                          <h4>Faravohitra</h4>
                          <h4>Antananarivo, 101</h4> 
                          <br />
                          <h4><b>Devis n°</b> : 2222</h4>
                          <h4>Date : 08-05-2024</h4>                       
                        </div>
                        <div class="col-md-6 justify-content-md-end" style={{textAlign:"left", marginLeft:"600px", marginTop:"-107px"}}>
                          <h4>Client : Bema</h4>
                          <h4>Adresse : Ankorondrano</h4>
                          <h4>Email : Users@gmail.com</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice-body table-responsive-md">
                  <table className="table table-borderless mb-0">
                    <thead>

                      <tr>
                        <th style={{ textTransform: "none" }}>
                          Designation
                        </th>
                        <th style={{ textTransform: "none" }}>Description détaillée</th>
                        <th style={{ textTransform: "none" }}>Qté</th>
                        <th style={{ textTransform: "none" }}>
                          Prix Journalier
                        </th>
                        <th style={{ textTransform: "none" }}>De</th>
                        <th style={{ textTransform: "none" }}>A</th>
                        <th style={{ textTransform: "none" }}>Montant</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>kubota</td>
                        <td>kubota 220cv</td>
                        <td>1</td>
                        <td>120 000 Ar</td>
                        <td>12-03-2024</td>
                        <td>07-04-2024</td>
                        <td>120 000 Ar</td>
                      </tr>
                      <tr>
                        <td>kubota</td>
                        <td>kubota 220cv</td>
                        <td>1</td>
                        <td>120 000 Ar</td>
                        <td>12-03-2024</td>
                        <td>07-04-2024</td>
                        <td>120 000 Ar</td>
                      </tr>
                      <tr>
                        <td>kubota</td>
                        <td>kubota 220cv</td>
                        <td>1</td>
                        <td>120 000 Ar</td>
                        <td>12-03-2024</td>
                        <td>07-04-2024</td>
                        <td>120 000 Ar</td>
                      </tr>
                      <tr>
                        <td>kubota</td>
                        <td>kubota 220cv</td>
                        <td>1</td>
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
                            Frais de Livraison :
                          </label>
                        </td>
                        <td>
                          <label
                            style={{
                              textAlign: "left",
                              marginRight: "60px",
                            }}
                          >
                            20 000 Ar
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label
                            style={{
                              fontWeight: "bold",
                              marginRight: "50px",
                            }}
                          >
                            TOTAL A PAYER :
                          </label>
                        </td>
                        <td>
                          <label
                            style={{
                              textAlign: "left",
                              marginRight: "60px",
                            }}
                          >
                            320 000 Ar
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ textAlign: "center" }}>
                  <label style={{marginRight: "392px" }}>
                    <b>Arrêté le présent devis à la somme de :</b>  {NombreToLetter(320000)} Ariary
                  </label>
                  <label style={{marginRight: "670px" }}>
                    Mode de Paiement : CB
                  </label>
                  <label style={{marginRight: "710px" }}>
                    Validité : 15 jours
                  </label>

                </div>
                <br />
                <div className="invoice-footer text-end">
                  <div className="buttons">
                    <button className="btn btn-solid" onClick={exportPDF}>
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
