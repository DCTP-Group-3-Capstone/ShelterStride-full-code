// SchedulePopupForm.jsx
import Swal from 'sweetalert2';
import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import Axios for making API calls
import './Scheduleform.scss'; // Import SCSS file for styling

const SchedulePopupForm = ({ onClose }) => {
  const [inspectiondate, setinspectiondate] = useState("");
  const [inspectiontime, setinspectiontime] = useState("");
  const [acceptConditions, setAcceptConditions] = useState(false);

  const formRef = useRef(null);

  const handleDateChange = (event) => {
    setinspectiondate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setinspectiontime(event.target.value);
  };

  const handleConditionsChange = () => {
    setAcceptConditions((prev) => !prev);
  };


  //api
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Selected Date:", inspectiondate);
    console.log("Selected Time:", inspectiontime);
    
    try {
        const response = await axios.post("https://shelterstride.onrender.com/api/v1/users/id/visit", {
          inspectiondate,
          inspectiontime,
        });
        
        console.log('API Response:', response.data);
        
        // Show success popup
        Swal.fire({
          icon: 'success',
          title: 'Visit Scheduled!',
          text: 'Your visit has been successfully scheduled.',
          position: 'top'
        });
    
        // Close the popup form
        onClose();
      } catch (error) {
        console.error('Error:', error);
    
        // Show error popup
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An error occurred while scheduling the visit. Please try again later.',
          position: 'top'
        });
      }
    };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="popupsche-form" ref={formRef}>
      <button className="close-btn" onClick={onClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className='label-d'>
            <label htmlFor="dateInput">Inspection Date</label>
          </div>   
          <input
            type="date"
            id="dateInput"
            name="inspectiondate"
            value={inspectiondate}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-group">
          <div className='label-d'> 
            <label htmlFor="timeInput">Inspection Time</label>
          </div>
          <input
            type="time"
            id="timeInput"
            name="inspectiontime"
            value={inspectiontime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div className="form-check">
          <input
            className="check"
            type="checkbox"
            checked={acceptConditions}
            onChange={handleConditionsChange}
          />
          I agree to ShelterStride’s subscription terms and privacy policy
        </div>
        <button type="submit">Schedule a Visit</button>
      </form>
    </div>,
     document.getElementById('popup-root')
  );
};

export default SchedulePopupForm;