function TabPaneOrders() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card dashboard-table mt-0">
          <div className="card-body">
            <div className="top-sec">
              <h3>Etat Matériels</h3>
              {/* <a href="#" className="btn btn-sm btn-solid">
                add product
              </a> */}
            </div>
            <div className="table-responsive-sm">
              <table className="table mb-0 order-table-vendor">
                <thead>
                  <tr>
                    <th scope="col">Matériels</th>
                    <th scope="col">Détails commande</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{/* Order rows */}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabPaneOrders;
