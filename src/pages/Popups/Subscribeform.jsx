// SubscribePopupForm.jsx
import Swal from 'sweetalert2';
import Spinner from '../../assets/icon/Spinner.svg';
import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import { subscriptionPrice } from '../Rentahomeproductpage/RentAHomeProduct.jsx';
import { isLoggedIn, getId } from '../../auth.jsx'; // Import isLoggedIn and getId from auth.jsx
import { subscriptionPrice2 } from '../Buyahomeproductpage/BuyAHomeProduct.jsx';
import { getUserInfo } from '../../getUserInfo.jsx'; 
import axios from 'axios';
import DropdownSelect from "../../components/DropdownSelect";
import './Subscribeform.scss'; // Import SCSS file for styling

const SubscribePopupForm = ({ onClose }) => {
  const [moveindate, setmoveindate] = useState("");
  const [plan, setpaymentplan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const formRef = useRef(null);
  const currentDate = new Date(); // Define currentDate with the current date and time


  useEffect(() => {
    // Fetch user information when the component mounts
    const fetchUserData = async () => {
      if (isLoggedIn()) {
        try {
          const id = getId(); // Retrieve id
          const user = await getUserInfo(id); // Pass id to getUserInfo
          setUserInfo(user);
         
        } catch (error) {
          console.error('Error fetching user information:', error);
        }
      }
    };
    fetchUserData();
  }, []);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setmoveindate(selectedDate);
  
  };
  

  const handlepaymentplanchange = (plan) => {
    setpaymentplan(plan);
    
  };
  
  
  
  

 //api
  const handleSubmit = async (event) => {
    event.preventDefault();

  

    // Check if the user is logged in
    if (!isLoggedIn()) {
      // Prompt user to log in or sign up
    //  alert('Please log in or sign up to schedule a visit.');
    
      Swal.fire({
        title: "Error",
        text: "Please log in or signup to continue",
        icon: "error",
        timer: 2000
      });
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
      // Make an Axios POST request to your API endpoint
    // Send visit scheduling request with user information
    const token = localStorage.getItem("token"); // Get the token from localStorage
    
    const response = await axios.post(`https://shelterstride.onrender.com/api/v1/users/${id}/subscription?secret_token=${token}`, {
        plan,
        spacename: 'Outlet 1',
        moveindate,
        precost: subscriptionPrice || subscriptionPrice2, // Using the appropriate subscription price 
        subscriptiondate: currentDate.toISOString(), // Format the date to ISO string     
        status: 'pending'

      });
  
     // console.log('API Response:', response.data);
      setIsLoading(false);
      // Show success popup
      Swal.fire({
        icon: 'success',
        title: 'Subscription Successful!',
        text: 'Your subscription has been successfully submitted.',
        position: 'top',
        timer: 2000
      });
  
      // Close the popup form
      onClose();
    } catch (error) {
      setIsLoading(false);

      let errorMessage = "An unexpected error occurred, please try again";
      console.log(errorMessage);

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
    <div className="popupsub-form" ref={formRef}>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="label-d">
            <label htmlFor="timeInput">Payment Plan</label>
          </div>
      <div className="paymentplan">
      <DropdownSelect className="paymentplan"
                      onSelect={handlepaymentplanchange}
                        options={['Monthly', 'Yearly']}
                        defaultSelected={"Monthly"}
                      />
      </div>   
        </div>
        <div className="form-group">
          <div className="label-d">
            {" "}
            <label htmlFor="dateInput">Move in date</label>
          </div>
          <input
            type="date"
            id="dateInput"
            name="moveindate"
            value={moveindate}
            onChange={handleDateChange}
            required
          />
        </div>
        <button type="submit">
          {isLoading ? <img src={Spinner} alt="" /> : "Subscribe Now"}
        </button>

        <div className="total-sub">
          <div className="sub-fees">
            <h5 htmlFor="subfee"> Subscription Fee</h5>
            <h5 htmlFor="subfee">N{subscriptionPrice || subscriptionPrice2}</h5>
          </div>
          <div className="sub-fees">
            <h5 htmlFor="subfee"> Service charge</h5>
            <h5 className='sub-charge' htmlFor="subfee"> N 0,000</h5>
          </div>
         <hr />
         <div className="sub-fees">
            <h5 htmlFor="subfee"> Total</h5>
            <h5 htmlFor="subfee">N{subscriptionPrice || subscriptionPrice2}</h5>
          </div>
        </div>
      </form>
    </div>,
    document.getElementById('popup-root')
  );
};

export default SubscribePopupForm;
