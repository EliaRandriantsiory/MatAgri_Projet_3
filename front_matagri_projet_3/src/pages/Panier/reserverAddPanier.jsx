import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckIcon from "@mui/icons-material/Check";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const ReserverPanier = () => {
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleOpenCalendar = () => {
    setShowCalendar(true);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  const handleConfirmSelection = () => {
    setShowCalendar(false);
  };

  const calculateNumberOfDays = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // Convert one day to milliseconds
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffDays = Math.round(Math.abs((start - end) / oneDay) + 1);
    return diffDays;
  };

  return (
    <div>
      <Button
        className="btn-solid btn-xs"
        style={{ border: "none", textTransform: "none" }}
        onClick={handleOpenCalendar}
      >
        <CalendarTodayIcon style={{ paddingRight: "5px" }} />
        Sélectionner une date
      </Button>

      <Modal
        show={showCalendar}
        onHide={handleCloseCalendar}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sélectionner une plage de dates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="datepicker-wrapper">
            <DateRange
              className="datepicker"
              ranges={selectedDates}
              onChange={(ranges) => setSelectedDates([ranges.selection])}
              rangeColors={["#FFD700"]}
              showSelectionPreview={false}
              showMonthAndYearPickers={false}
              showDateDisplay={false}
              showPreview={true}
              staticRanges={[]}
              inputRanges={[]}
              style={{ width: "470px", height: "250px" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "brown", border: "none" }}
            onClick={handleCloseCalendar}
          >
            Fermer
          </Button>
          <Button
            className="btn-solid btn-xs"
            style={{ border: "none" }}
            onClick={handleConfirmSelection}
          >
            <CheckIcon /> Confirmer la sélection
          </Button>
        </Modal.Footer>
      </Modal>
      <br/>
      {selectedDates[0] && (
        <div>
        <br/>
          <p>
            {selectedDates[0].startDate.toLocaleDateString()} -{" "}
            {selectedDates[0].endDate.toLocaleDateString()}
          </p>
          <p>
            Nombre de jours :{" "}
            {calculateNumberOfDays(
              selectedDates[0].startDate,
              selectedDates[0].endDate
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReserverPanier;
