import React, { useState, useEffect } from "react";

import "/src/pages/SubscribePage/Subscribe.scss";

//functions & constant
function Subscribe() {
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
          <h2> Subscribe</h2>

          <form className="schedule-form">
          <div className="form-group">
            <label htmlFor="password">Payment Plan</label>

            <input
            type="time"
            id="timeInput"
            name="selectedTime"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeInput">Move in date</label>
    

          
<input
            type="date"
            id="dateInput"
            name="selectedDate"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </div>


        <button type="button" onClick={handleSubmit}>
       Subscribe Now
        </button>

          </form>
        </div>
    </>
  );
}

export default Subscribe;
