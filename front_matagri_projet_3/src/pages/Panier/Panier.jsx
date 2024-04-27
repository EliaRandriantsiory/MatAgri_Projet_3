import React, { useState } from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function Panier() {
  let datedebut = Date();
  let datefin = Date();

  const [date_d, setDate_d] = React.useState(dayjs(datedebut));
  const [date_f, setDate_f] = React.useState(dayjs(datefin));

  const [reserver, setReserver] = useState("");

  const handleClickReserver = (event) => {
    setReserver(event.target.value);
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
                            <td>image</td>
                            <td>tracteur</td>
                            <td>
                              <div class="qty-box">
                                <div class="input-group">
                                  <input
                                    type="number"
                                    name="quantity"
                                    class="form-control input-number"
                                    value="1"
                                  />
                                </div>
                              </div>
                            </td>
                            <td>1000000AR</td>
                            <td>
                              <div>
                                <a href="#" className="btn btn-solid">
                                  Reserver
                                </a>
                              </div>
                            </td>
                            <td>LAFO BE</td>
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
                    <div className="row cart-buttons">
                      <div className="col-6">
                        <a href="#" className="btn btn-solid">
                          continue shopping
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#" className="btn btn-solid">
                          Commander
                        </a>
                      </div>
                    </div>
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
