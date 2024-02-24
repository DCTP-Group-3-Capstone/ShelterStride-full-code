import Swal from 'sweetalert2';
import Spinner from '../../assets/icon/Spinner.svg';
import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import { isLoggedIn, getId } from '../../auth.jsx'; // Import isLoggedIn and getId from auth.jsx
import { getUserInfo } from '../../getUserInfo.jsx'; 
import axios from 'axios'; // Import Axios for making API calls
import './Scheduleform.scss'; // Import SCSS file for styling

const SchedulePopupForm = ({ onClose }) => {
  const [inspectiondate, setInspectionDate] = useState("");
  const [inspectiontime, setInspectionTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const formRef = useRef(null);


  useEffect(() => {
    // Fetch user information when the component mounts
    const fetchUserData = async () => {
      if (isLoggedIn()) {
        try {
          const id = getId(); // Retrieve id
          const user = await getUserInfo(id); // Pass id to getUserInfo
          setUserInfo(user);
          console.log("User Information:", user); // Log the received userInfo
        } catch (error) {
          console.error('Error fetching user information:', error);
        }
      }
    };
    fetchUserData();
  }, []);
  const handleDateChange = (event) => {
    setInspectionDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setInspectionTime(event.target.value);
  };

  const handleConditionsChange = () => {
    setAcceptConditions((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if the user is logged in
    if (!isLoggedIn()) {
      // Prompt user to log in or sign up
      alert('Please log in or sign up to schedule a visit.');
      return;
    }
  
    // Check if user information is available
    if (!userInfo) {
      console.error('User information not available.');
      return;
    }
  
    const { id } = userInfo;
  
    try {
      setIsLoading(true);
  
      // Send visit scheduling request with user information
      const token = localStorage.getItem("token"); // Get the token from localStorage
    
      const response = await axios.post(`https://shelterstride.onrender.com/api/v1/users/${id}/visit?secret_token=${token}`, {
        inspectiondate,
        inspectiontime
      });
    
    //  console.log('API Response:', response.data);
  
      setIsLoading(false);
  
      // Show success popup
      Swal.fire({
        icon: 'success',
        title: 'Visit Scheduled!',
        text: 'Your visit has been successfully scheduled.',
        position: 'top',
        timer: 2000
      });
  
      // Close the popup form
      onClose();
    } catch (error) {
      setIsLoading(false);
  
      let errorMessage = "An unexpected error occurred, please try again";
  
      if (error.response && error.response.data) {
        errorMessage = error.response.data.error || errorMessage;
      }
      // Show error popup
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: errorMessage,
        timer: 3000,
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
          <span className="statement">
            I agree to ShelterStride’s subscription terms and privacy policy
          </span>
        </div>
        <button type="submit">
          {isLoading ? <img src={Spinner} alt="" /> : "Schedule a visit"}
        </button>
      </form>
    </div>,
    document.getElementById('popup-root')
  );
};

export default SchedulePopupForm;
