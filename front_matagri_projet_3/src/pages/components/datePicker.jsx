import React, { useState } from "react"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

function ReactDatePicker(){

    const [selectedDate,setSelectedDate]= useState(null)
    return(
        <div className="col-md-6">
            <DatePicker>
                selected = {selectedDate}
                oneChange = {date =>setSelectedDate(date)}
                dateFormat = "dd/MM/yyyy"
                showYearDropdown 
                scrollableMonthYearDropdown
            </DatePicker>
        </div>
    )
}
export default ReactDatePicker;