import React, { useState, useEffect } from "react";

import "/src/pages/ScheduleVisitPage/Schedule.scss";

//functions & constant
function Schedule() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [acceptConditions, setAcceptConditions] = useState(false);

  //date
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  //time
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  //tandc
  const handleConditionsChange = () => {
    setAcceptConditions((prev) => !prev);
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to the server or perform further actions
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
  };

  //interface
  return (
    <>
      <div className="schedulepage">
          <h2> Schedule a visit</h2>

          <form className="schedule-form">
          <div className="form-group">
            <label htmlFor="password">Inspection Date</label>

            <input
            type="date"
            id="dateInput"
            name="selectedDate"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeInput">Inspection Time</label>
          <input
            type="time"
            id="timeInput"
            name="selectedTime"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>

        <div className="form-check">
            <input className="check" type="checkbox"
            checked={acceptConditions}
            onChange={handleConditionsChange} />
               I agree to ShelterStride’s subscription terms and privacy policy
        </div>

        <button type="button" onClick={handleSubmit}>
        Schedule a visit
        </button>

          </form>
        </div>
    </>
  );
}

export default Schedule;
