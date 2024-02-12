import React, { useState, useEffect } from "react";

import { useDonateContext } from "../../components/payment/DonateContext";
import axios from "axios";
import check from "../../icon/greenCheckMark.svg";
import payPal from "../../icon/Paypal Logo.svg";
import wallet from "../../../../assets/icon/Wallet.svg";
import Success from "./success";
//import { useHistory } from "react-router-dom";

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
  const [isSuccess, setIsSuccess] = useState(false);
  const { selectedAmount } = useDonateContext();
  const [error, setError] = useState(null);
  const secret_token = localStorage.getItem('secret_token');


  useEffect(() => {
    // Function to authenticate the user and save the token
    const authenticateUser = async () => {
      try {
        // Perform user authentication and retrieve token from the server
        const response = await axios.post(authenticationApiUrl, {
          // Include login credentials here
        });

        // Extract the token from the response
        const { secret_token } = response.data;

        // Save the token to localStorage
        localStorage.setItem('secret_token', secret_token);

        // Proceed with any additional actions after successful authentication
      } catch (error) {
        console.error("Error authenticating user:", error.message);
      }
    };

    // Call the authentication function when the component mounts
    authenticateUser();
  }, []);
 //  const history = useHistory();
  const donationApiUrl =
  //   // process.env.DONATION_API_URL ||
     "https://shelterstride.onrender.com/api/v1/users/id/donation";
  // // const authenticationApiUrl =
  //   // process.env.LOGIN_API_URL ||
   "https://shelterstride.onrender.com/api/v1/login";
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
  const handleError = (e) => {
    setError(e.target.value);
  };

  const confirmPayment = async (e) => {
    e.preventDefault();

    try {
      // Retrieve token from local storage
      const secret_token = localStorage.getItem('secret_token ');

      if (!secret_token ) {
        // Token not found, redirect to login page or handle authentication error
        console.log("User is not logged in.");
     
        // Redirect to login page or handle authentication error
       return;
      }

      // Send token to authentication endpoint to verify user authentication
      const isAuthenticated = await axios.post("https://shelterstride.onrender.com/api/v1/login", {
        headers: {
          Authorization: `Bearer ${secret_token }`
        }
      });

      if (isAuthenticated) {
        // User is authenticated, proceed with payment processing

        const donationData = {
          firstName,
          lastName,
          email,
          phoneNumber,
          cardName,
          cardNumber,
          expiryDate,
          cvv,
          paymentOption,
          amount: selectedAmount, // Assuming selectedAmount is defined somewhere
        };

        // Send payment request
        axios.post(donationApiUrl, donationData, {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        });
        if (response.status === 200) {
          console.log("Donation successful!");
          setIsSuccess(true);
          // Reset form fields
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setCardName("");
          setCardNumber("");
          setExpiryDate("");
          setCVV("");
          setPaymentOption("wallet");
        } else {
          setError("Failed to donate. Please try again later.");
          console.error("Failed to donate:", response.statusText);
        }
      } else {
        // User is not authenticated, redirect to login page or handle authentication error
        console.log("User is not logg in.");
   
        // Redirect to login page or handle authentication error
      }
    } catch (error) {
      setError("Error processing payment. Please try again later.");
      console.error("Error processing payment:", error.message);
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
          <button onClick={confirmPayment}>Confirm payment</button>
          <button>Back</button>
        </div>
      </form>
      {isSuccess && <Success />}
    </div>
  );
}

export default PaymentDetails;
