import { useEffect, useState } from "react";
import TableRow from "../../../../components/componentproduct/tableRowMat";
import axios from "axios";

function TabPaneProducts() {
    const [listMateriel, setListMateriel] = useState([]);
    useEffect(() => {
        // INITIALISATION DATA MATERIEL
    axios
    .get("http://localhost:8082/api/materiels/listMaterielUser")
    .then((response) => {
      setListMateriel(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
    },[])
    return ( 
        <div className="row">
                <div className="col-12">
                  <div className="card dashboard-table mt-0">
                    <div className="card-body">
                      <div className="top-sec">
                        <h3>Tous les produits</h3>
                        <input
                          type="button"
                          className="btn btn-sm btn-solid"
                          aria-hidden="true"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdropAddProduct"
                          value={"+ Ajouter Matériels"}
                        />
                      </div>
                      <div className="table-responsive-md">
                        <table className="table mb-0 product-table">
                          <thead>
                            <tr>
                              <th scope="col">image</th>
                              <th scope="col">Nom du Matériels </th>
                              <th scope="col">categories</th>
                              <th scope="col">prix</th>
                              <th scope="col">stock</th>
                              <th scope="col">editer/Supprimer</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listMateriel.map((materiel) => (
                              <TableRow materielItem={{ ...materiel }} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     );
}

export default TabPaneProducts;