import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function ReserverPanier({ open, onClose }) {
  const [date_d, setDate_d] = useState(dayjs());
  const [date_f, setDate_f] = useState(dayjs());
  const [nombreJours, setNombreJours] = useState(0);
  const [error, setError] = useState("");

  const handleDateChange_d = (e) => {
    const newDate = dayjs(e.target.value);
    console.log("New date for date_d:", newDate);
    setDate_d(newDate);
    if (newDate.isAfter(date_f)) {
      setError("La date de début ne peut pas être après la date de fin");
    } else {
      setError("");
      calculateNumberOfDays(newDate, date_f);
    }
  };

  const handleDateChange_f = (e) => {
    const newDate = dayjs(e.target.value);
    console.log("New date for date_f:", newDate);
    setDate_f(newDate);
    if (newDate.isBefore(date_d)) {
      setError("La date de fin ne peut pas être avant la date de début");
    } else {
      setError("");
      calculateNumberOfDays(date_d, newDate);
    }
  };

  const calculateNumberOfDays = (start, end) => {
    const diffInDays = end.diff(start, 'day');
    setNombreJours(diffInDays);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <input
              type="date"
              value={date_d.format("YYYY-MM-DD")}
              onChange={handleDateChange_d}
            />
          </LocalizationProvider>
        </div>
        <div className="col-md-6">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <input
              type="date"
              value={date_f.format("YYYY-MM-DD")}
              onChange={handleDateChange_f}
            />
          </LocalizationProvider>
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <br />
        Nombre de jours : {nombreJours}
      </div>
    </>
  );
}

export default ReserverPanier;