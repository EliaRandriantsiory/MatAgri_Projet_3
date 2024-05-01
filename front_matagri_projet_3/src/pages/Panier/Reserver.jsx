import React, { useEffect, useState } from "react";
import moment from 'moment';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
function Reserver({ open, onClose }) {
  let datedebut = Date();
  let datefin = Date();
  const [dateDebut, setDateDebut] = useState(new Date());
  const [dateFin, setDateFin] = useState(new Date());
  const [nbJoursLocation, setNbJoursLocation] = useState(0);
  const [creneau, setCreneau] = useState()
  

  // console.log(`Bonjour, je m'appelle ${name} et j'ai ${age} ans. ${age} `)
  // console.log(date_d, date_f)
  const handelOnClickVAlidateCreneau = () =>{
    console.log("bonjour"+dateFin)
    let strDateDebut = moment(dateDebut, 'ddd MMM DD YYYY HH:mm:ss').format('DD-MMMM-YYYY')
    let strDateFin = moment(dateFin, 'ddd MMM DD YYYY HH:mm:ss').format('DD-MMMM-YYYY')
    let dateCreneau = strDateDebut+' - '+strDateFin
    setCreneau(dateCreneau)
    // const diffInMs = Math.abs(dateFin - dateDebut);
    // const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    // setNbJoursLocation(Math.ceil(diffInDays));
    console.log(creneau)
    console.log(nbJoursLocation)

  }
  useEffect(() => {
    const diffInMs = Math.abs(dateFin - dateDebut);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    setNbJoursLocation(Math.ceil(diffInDays));
  }, [dateDebut, dateFin]);

  const handleChangeDateFin =(event)=>{

    setDateFin(event.target.value)
  }
  const handleChangeDateDebut =(event)=>{

    setDateDebut(event.target.value)
  }
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'number' ? parseFloat(target.value) : target.value;
    const name = target.name;

    switch (name) {
      // case 'prixLocationParJour':
      //   setPrixLocationParJour(value);
      //   break;
      case 'dateDebut':
        setDateDebut(new Date(value));
        console.log(dateDebut)
        break;
      case 'dateFin':
        setDateFin(new Date(value));
        console.log(dateFin)
        break;
      default:
        break;
    }
  };
  return (
    <>
      <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        {creneau}
        --
        {/* {nbJoursLocation} */}
      </a>
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
                
                </div>
                <div className="col-md-6">
                <label>
          Date de début :
          <input type="date" name="dateDebut" value={dateDebut.toISOString().split('T')[0]} onChange={handleChange} />
        </label>
        <label>
          Date de fin :
          <input type="date" name="dateFin" value={dateFin instanceof Date ? dateFin.toISOString().split('T')[0] : ''} onChange={handleChange} />
        </label>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      // value={date_f}
                      onChange={(newValue) => setDate_f(newValue)}
                    />
                  </LocalizationProvider> */}
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
                <button type="button" class="btn btn-solid" data-bs-dismiss="modal" onClick={handelOnClickVAlidateCreneau}>
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
