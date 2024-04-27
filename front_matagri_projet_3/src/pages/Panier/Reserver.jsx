import React from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Modal } from "@mui/material";

function Reserver() {
  let datedebut = Date();
  let datefin = Date();

  const [date_d, setDate_d] = React.useState(dayjs(datedebut));
  const [date_f, setDate_f] = React.useState(dayjs(datefin));
  return (
    <>
      <Modal>
        <Modal.Header>
          <Modal.Title>Réservation</Modal.Title>
          <Modal.Body>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={date_d} />
              </LocalizationProvider>
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={date_f} />
              </LocalizationProvider>
            </div>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Reserver;
