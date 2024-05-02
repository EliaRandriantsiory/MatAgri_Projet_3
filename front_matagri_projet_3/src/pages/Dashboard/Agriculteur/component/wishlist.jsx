function Wishlist() {
    return (
        <div className="tab-pane fade" id="info">
            <div className="row">
                <div className="col-12">
                    <div className="card dashboard-table mt-0">
                        <div className="card-body table-responsive-sm">
                            <div className="top-sec">
                                <h3>Mon Wishlist</h3>
                            </div>
                            <div className="table-responsive-xl">
                                <table className="table cart-table wishlist-table">
                                    <thead>
                                        <tr className="table-head">
                                            <th scope="col">image</th>
                                            <th scope="col">Order Id</th>
                                            <th scope="col">Détail du produit</th>
                                            <th scope="col">Prix</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="javascript:void(0)">
                                                    <img
                                                        src="../assets/images/pro3/1.jpg"
                                                        className="blur-up lazyloaded"
                                                        alt=""
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <span className="mt-0">#125021</span>
                                            </td>
                                            <td>
                                                <span>Purple polo tshirt</span>
                                            </td>
                                            <td>
                                                <span className="theme-color fs-6">$49.54</span>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0)" className="btn btn-xs btn-solid">Ajout panier</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
