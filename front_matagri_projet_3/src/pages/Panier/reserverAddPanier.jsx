import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckIcon from "@mui/icons-material/Check";

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

  return (
    <div>
      <Button
        className="btn-solid btn-xs"
        style={{ border: "none", textTransform: "none"}}
        onClick={handleOpenCalendar}
      >
        <CalendarTodayIcon style={{paddingRight: "5px"}}/>
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
              showPreview={false}
              staticRanges={[]}
              inputRanges={[]}
              style={{width:'470px', height:'250px'}}
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
    </div>
  );
};

export default ReserverPanier;