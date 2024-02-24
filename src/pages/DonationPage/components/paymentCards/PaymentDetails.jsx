import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Spinner from '../../../../assets/icon/Spinner.svg';
import { isLoggedIn, getId } from '../../../../auth.jsx'; // Import isLoggedIn and getId from auth.jsx
import { getUserInfo } from '../../../../getUserInfo.jsx'; 
import { useDonateContext } from "../../components/payment/DonateContext";
import axios from "axios";
import check from "../../icon/greenCheckMark.svg";
import payPal from "../../icon/Paypal Logo.svg";
import wallet from "../../../../assets/icon/Wallet.svg";
import { subscriptionPrice } from '../../../Rentahomeproductpage/RentAHomeProduct.jsx';


function PaymentDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [paymentOption, setPaymentOption] = useState("wallet");
  const { selectedAmount } = useDonateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null); // Define the error state

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentOption: "wallet"
  });


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

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };
  

  const confirmPayment = async (e) => {
    e.preventDefault();
  
    if (!isLoggedIn()) {
      alert('Please log in or sign up to schedule a visit.');
      return;
    }
  
    if (!userInfo) {
      console.error('User information not available.');
      return;
    }
  
    const { id } = userInfo;
  
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
  
      const response = await axios.post(`https://shelterstride.onrender.com/api/v1/users/${id}/donation?secret_token=${token}`, {
        amount: selectedAmount
      });
  
      console.log('API Response:', response.data);
      setIsLoading(false);
  
      Swal.fire({
        icon: 'success',
        title: 'Donation Successful!',
        text: 'Your Donation has been successfully submitted.',
        timer: 2000,
      });
  
      // Reset the form data
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setCardName("");
      setCardNumber("");
      setExpiryDate("");
      setCVV("");
      setPaymentOption("wallet");
  
    } catch (error) {
      setIsLoading(false);
  
      let errorMessage = 'An unexpected error occurred, please try again';
      console.log(errorMessage);
  
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage;
      }
  
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: errorMessage,
        timer: 3000
      });
    }
  };
  
  
  



 
  return (
    <div className="paymentDetails">
      <div className="donationAmountSelected">
        <div className="img">
          <img src={check} alt="Check mark" />
        </div>
        <div className="amountText">
          <h6>Your Donation Amount</h6>
          <p>{selectedAmount}/Month</p>
        </div>
      </div>
      <form className="form">
        <div className="yourInfo">
          <div>
            <div>
              <h6>YOUR INFORMATION</h6>
            </div>

            <div className="inputWrapper">
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name*"
              />
            </div>
            <div className="inputWrapper">
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name*"
              />
            </div>
            <div className="inputWrapper">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email* "
              />
            </div>
            <div className="inputWrapper">
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone (Optional)"
              />
            </div>
          </div>
          <div className="inputCheckbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By providing your mobile phone number you agree that Shelter
              stride may contact you by phone and/or text message regarding
              Shelterstride news and updates. You can opt-out at any time. See{" "}
              <strong>Privacy Policy</strong> for details.
            </label>
          </div>
          <div className="paymentText">
            <h5>PAYMENT</h5>
          </div>
          <div className="inputRadio">
            <div>
              <input
                type="radio"
                id="wallet"
                value="wallet"
                checked={paymentOption === "wallet"}
                onChange={handlePaymentOptionChange}
              />
              <label htmlFor="wallet">
                <img src={wallet} alt="Wallet" />
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="paypal"
                value="paypal"
                checked={paymentOption === "paypal"}
                onChange={handlePaymentOptionChange}
              />
              <label htmlFor="paypal">
                <img src={payPal} alt="PayPal" />
              </label>
            </div>
          </div>
        </div>

        <div className="inputWrapper">
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={handleCardNameChange}
            maxLength="30"
            placeholder="Card Name*"
            required
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            placeholder="Card Number*"
            required
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength="4"
            placeholder="Expiration*"
            required
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCVVChange}
            maxLength="3"
            placeholder="CVV*"
            required
          />
        </div>
        <div>
          <p>
            By Clicking “Confirm Payment” I agree to the companies term of
            services
          </p>
        </div>
        <div className="confirmButton">
          <button onClick={confirmPayment}>
           {isLoading ? <img src={Spinner} alt="" /> : "Confirm Payment"}</button>
          <button>Back</button>
        </div>
      </form>
      
    </div>
  );
}

export default PaymentDetails;
