import ListCommande from "./rowCommande";

function Commande() {
    return ( <>
        <div className="tab-pane fade" id="orders">
                  <div className="row">
                    <div className="col-12">
                      <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-sm">
                          <div className="top-sec">
                            <h3>Mes commandes</h3>
                          </div>
                          <div className="table-responsive-xl">
                            <table className="table cart-table order-table">
                              <thead>
                                <tr className="table-head">
                                  <th scope="col">Designation</th>
                                  <th scope="col">Quantité</th>
                                  <th scope="col">Détails du produit</th>
                                  <th scope="col">Statut</th>
                                  <th scope="col">Prix journalier</th>
                                  <th scope="col">Dates</th>
                                  <th scope="col">Total</th>
                                  <th scope="col">Vue</th>
                                </tr>
                              </thead>
                              <ListCommande/>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </> );
}

export default Commande;