import React, { useState } from "react";
import People from "../../../../../assets/icon/Profle2.svg";
import Email from "../../../../../assets/icon/Email.svg";
import Call from "../../../../../assets/icon/Call.svg";
import "./Guarantor.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Guarantor() {
  const [labelText, setLabelText] = useState("Name");
  const [selectedAccountType, setSelectedAccountType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = React.useState("Individual");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(""); // Define dateOfBirth
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true); // Define isValidPhoneNumber
  const navigate = useNavigate();

  const handleaccountype = (selectedAccountType) => {
    setSelectedAccountType(selectedAccountType);
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleStateChange = (selectedState) => {
    setState(selectedState);
    setCity("");
  };

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail) || newEmail === "");
  };

  const handleEmailFocus = () => {
    setIsValidEmail(true);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    setIsValidPassword(true);

    const passwordvalidate = /^(?=.*[0-9])(?=.*[!.?@#$%^&*])(.{6,})$/;
    setIsValidPassword(
      passwordvalidate.test(newPassword) || newPassword === ""
    );
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);

    setIsValidConfirmPassword(newConfirmPassword === password);
  };

  const handleTermsClick = () => {
    setShowModal(true);
  };

  const handleDateOfBirthChange = (event) => {
    // Define handleDateOfBirthChange
    const newDateOfBirth = event.target.value;
    setDateOfBirth(newDateOfBirth);
  };

  const handleInterest = (selectedInterest) => {
    // Define handleInterest
    // Handle interest selection
  };

  const genderOptions = ["Male", "Female", "Other"]; // Define genderOptions

  return (
    <>
      <div className="guarantor-page">
        <form>
          <h3>Kindly provide your guarantor details</h3>

          <div className="profileinfo2">
            <div className="address-part">
              <div className="address-part">
                <div>
                  <label htmlFor="firstname">First name</label>
                  <div className="profileform-group">
                    <img src={People} alt="People Icon" />
                    <input
                      type="text"
                      id="firstname"
                      value={name}
                      onChange={handleNameChange}
                      placeholder={labelText}
                    />
                  </div>
                </div>
              </div>

              <div className="address-part">
                <div>
                  <label htmlFor="firstname">Last name</label>
                  <div className="profileform-group">
                    <img src={People} alt="People Icon" />
                    <input
                      type="text"
                      id="firstname"
                      value={name}
                      onChange={handleNameChange}
                      placeholder={labelText}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="address-part">
            
                <div>
                  <label htmlFor="email">Email Address</label>
                  <div className="profileform-group">
                    <img src={Email} alt="Email Icon" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onFocus={handleEmailFocus}
                      onChange={handleEmailChange}
                      className={!isValidEmail ? "invalid" : ""}
                      placeholder="Enter your email"
                    />
                  </div>
                  {!isValidEmail && (
                    <p className="error-message">Invalid email address</p>
                  )}
                </div>
        
              <div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <div className="profileform-group">
                    <img src={Call} alt="People Icon" />
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      value=""
                      className={!isValidPhoneNumber ? "invalid" : ""}
                    />
                  </div>
                  {!isValidPhoneNumber && (
                    <p className="error-message">Invalid phone number</p>
                  )}
                </div>
              </div>
            </div>



            <div className="address-part">
         
                <div>
                  <label htmlFor="firstname">Guarantor's occupation</label>
                  <div className="profileform-group">
                    <img src={People} alt="People Icon" />
                    <input
                      type="text"
                      id="firstname"
                      value={name}
                      onChange={handleNameChange}
                      placeholder={labelText}
                    />
                  </div>
                </div>
          
        

            <div>
              <label htmlFor="address">Guarantor’s office address</label>
              <div className="profileform-group">
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={handleAddressChange}
                  required
                />
              </div>
            </div>
            </div>
          </div>
          <div>
            <label htmlFor="address">Guarantor’s home address</label>
            <div className="profileform-groupadd">
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                required
              />
            </div>
          </div>

          <div className="button-group">
            <button className="butt" type="submit">
              save changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Guarantor;
