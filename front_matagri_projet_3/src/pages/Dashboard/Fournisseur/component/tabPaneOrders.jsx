function TabPaneOrders() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card dashboard-table mt-0">
          <div className="card-body">
            <div className="top-sec">
              <h3>orders</h3>
              <a href="#" className="btn btn-sm btn-solid">
                add product
              </a>
            </div>
            <div className="table-responsive-sm">
              <table className="table mb-0 order-table-vendor">
                <thead>
                  <tr>
                    <th scope="col">order id</th>
                    <th scope="col">product details</th>
                    <th scope="col">status</th>
                    <th scope="col">price</th>
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
