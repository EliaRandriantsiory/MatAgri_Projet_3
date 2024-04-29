import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Modal, Dialog, DialogTitle, DialogContent } from "@mui/material";

function Reserver({ open, onClose }) {
  let datedebut = Date();
  let datefin = Date();

  const [date_d, setDate_d] = React.useState(dayjs(datedebut));
  const [date_f, setDate_f] = React.useState(dayjs(datefin));

  return (
    <>
      <button
        className="btn btn-solid"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Reserver
      </button>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Reservation
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={date_d}
                      onChange={(newValue) => setDate_d(newValue)}
                    />
                  </LocalizationProvider>
                </div>
                <div className="col-md-6">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={date_f}
                      onChange={(newValue) => setDate_f(newValue)}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-solid"
                  data-bs-dismiss="modal"
                  id="annuler"
                >
                  Annuler
                </button>
                <button type="button" class="btn btn-solid">
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserver;
