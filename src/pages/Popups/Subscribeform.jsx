// SubscribePopupForm.jsx
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import DropdownSelect from "../../components/DropdownSelect";
import React, { useState, useEffect, useRef } from 'react';
import './Subscribeform.scss'; // Import SCSS file for styling

const SubscribePopupForm = ({ onClose }) => {
  const [moveindate, setmoveindate] = useState("");
  const [plan, setpaymentplan] = useState("");


  const formRef = useRef(null);

  const handleDateChange = (event) => {
    setmoveindate(event.target.value);
  };

  const handlepaymentplanchange = (event) => {
    setpaymentplan(event.target.value);
  };

 //api
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Selected Date:", moveindate);
    console.log("Selected plan:", plan);
  
    try {
      // Make an Axios POST request to your API endpoint
      const response = await axios.post("https://shelterstride.onrender.com/api/v1/users/id/subscription", {
        moveindate,
        plan,
        precost : "125000",
        spacename: "Outlet 1",
        status: "pending",

      });
  
      console.log('API Response:', response.data);
  
      // Show success popup
      Swal.fire({
        icon: 'success',
        title: 'Subscription Successful!',
        text: 'Your subscription has been successfully submitted.',
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
        text: 'An error occurred while processing your subscription. Please try again later.',
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

  return (
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
                        defaultSelected={"Select"}
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
        <button type="submit">Subscribe Now</button>

        <div className="total-sub">
          <div className="sub-fees">
            <h5 htmlFor="subfee"> Subscription Fee</h5>
            <h5 htmlFor="subfee"> N 125,000</h5>
          </div>
          <div className="sub-fees">
            <h5 htmlFor="subfee"> Service charge</h5>
            <h5 className='sub-charge' htmlFor="subfee"> N 0,000</h5>
          </div>
         <hr />
         <div className="sub-fees">
            <h5 htmlFor="subfee"> Total</h5>
            <h5 htmlFor="subfee"> N 125,000</h5>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubscribePopupForm;
