import React, { useState } from "react";
import "../../Payments/Pages/PaymentDetails.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function PaymentDetails() {
  const [bnv, setBNV] = useState("");
  const [accountName, setAccountName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBNVChange = (event) => {
    const value = event.target.value;
    // Validate if the input is a number
    if (!isNaN(value)) {
      setBNV(value);
    }
  };

  const handleAccountNameChange = (event) => {
    const value = event.target.value;
    // Validate if the input contains only letters (no numbers or special characters)
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setAccountName(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submit logic here
  };

  return (
    <>
      <div className="paymentdetails-page">
        <form onSubmit={handleSubmit}>
          <div className="profileinfo2">
            <div className="address-part">
              <div>
                <label htmlFor="bnv">BVN</label>
                <div className="profileform-group">
                  <input
                    type="text"
                    id="bnv"
                    value={bnv}
                    onChange={handleBNVChange}
                    placeholder="Type your BVN here"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="accountName">Account Name</label>
                <div className="profileform-group">
                  <input
                    type="text"
                    id="accountName"
                    value={accountName}
                    onChange={handleAccountNameChange}
                    placeholder="Type your account name here"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="button-group">
            <button className="butt" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PaymentDetails;
