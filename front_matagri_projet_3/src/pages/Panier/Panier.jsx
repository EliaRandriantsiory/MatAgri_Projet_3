import axios from "axios";
import { useState } from "react";
import { Modal } from "@mui/material";
import Reserver from "./Reserver";
import Devis from "../../components/textComponent/Devis";
import { Link } from "react-router-dom";

function Panier() {
  const [data, setData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);
  const [nomproducts, setNomproducts] = useState("");
  const [prix, setPrix] = useState("");
  const [total, setTotal] = useState("");
  const [totalproducts, setTotalproducts] = useState("");

  const handleTotalPChange = () => {
    const newTotal = parseFloat(totalproducts) + parseFloat(total);
    setTotalproducts(newTotal);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleimageChange = (event) => {
    setImage(event.target.value);
  };

  const handleNomproductsChange = (event) => {
    setNomproducts(event.target.value);
  };
  const handlePrixChange = (event) => {
    setPrix(event.target.value);
  };
  const handleTotalChange = (event) => {
    setTotal(quantity * prix);
  };

  const handleClickReserver = () => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <div className="cart-section section-b-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="title1 section-t-space">
                <h4>Panier</h4>
                <h2 className="title-inner1">Panier</h2>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12"></div>
                    <div className="col-sm-12 table-responsive-xs">
                      <table className="table cart-table">
                        <thead>
                          <tr className="table-head">
                            <th scope="col" style={{ fontSize: "12px" }}>
                              image
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              nom du produit
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              quantité
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              prix
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              action
                            </th>
                            <th scope="col" style={{ fontSize: "12px" }}>
                              total
                            </th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td onChange={handleimageChange} />
                            <td onChange={handleNomproductsChange} />
                            <td>
                              <div class="qty-box">
                                <div class="input-group">
                                  <input
                                    type="number"
                                    name="quantity"
                                    class="form-control input-number"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min={1}
                                  />
                                </div>
                              </div>
                            </td>
                            <td onChange={handlePrixChange} />
                            <td>
                              <div>
                                <Reserver />
                              </div>
                            </td>
                            <td on onChange={handleTotalChange} />
                            <td>
                              <a href="#" class="icon">
                                <i class="ti-close"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="table-responsive-md">
                        <table className="table cart-table "></table>
                        <div className="table-responsive-md">
                          <table className="table cart-table "></table>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-4"
                        style={{ marginLeft: "810px", marginTop: "10px" }}
                        onChange={handleTotalPChange}
                      />
                    </div>
                    <div className="row cart-buttons">
                      <div className="col-6">
                        <a href="#" className="btn btn-xs btn-solid">
                          continue shopping
                        </a>
                      </div>
                      <div className="col-3">
                        <Link to="/devis" className="btn btn-xs btn-solid">
                          Aller au devis
                        </Link>
                      </div>
                      <div className="col-3">
                        <Link to="/paiement" className="btn btn-xs btn-solid">
                          Commander
                        </Link>
                      </div>
                    </div>
                    <Modal
                      open={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    >
                      <Reserver
                        open={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                      />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panier;
