import React, { useState } from "react";
import People from "../../../../../assets/icon/Profle2.svg";
import Email from "../../../../../assets/icon/Email.svg";
import lock from "../../../../../assets/icon/lock.svg";
import Call from "../../../../../assets/icon/Call.svg";
import UnSee from "../../../../../assets/icon/Unsee.svg";
import See from "../../../../../assets/icon/See.svg";
import "./Profile.scss";
import profileImage from "../../../../../assets/images/Profile-image.svg";
import DropdownSelect from "../../../../../components/DropdownSelect";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Profile() {
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

  const genderOptions = ["Male", "Female"]; // Define genderOptions

  return (
    <>
      <div className="profile-page">
        <form>

        <div className="profile">
      <img src={profileImage} alt="Profile" className="profile-picture" />
    </div>

          <div className="profileinfo">
            <div className="flname">
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

              <label htmlFor="gender">Gender</label>
              <div className="profileform-group2">
                <img className="gen" src={People} alt="" />
                <DropdownSelect
                  options={genderOptions}
                  defaultSelected={"Gender"}
                />
              </div>

              <label className="acclabel" htmlFor="Idcard-typeAccount-Interest">
                Id card type
              </label>
              <div className="profileform-group">
                <DropdownSelect
                  className="interest"
                  onSelect={handleInterest}
                  options={["NIN", "Driver license"]}
                  defaultSelected={"Select"}
                />
              </div>
            </div>

            <div className="profile-add">
              <label htmlFor="lastname">Last name</label>
              <div className="profileform-group">
                <img src={People} alt="People Icon" />
                <input
                  type="text"
                  id="lastname"
                  value={name}
                  onChange={handleNameChange}
                  placeholder={labelText}
                />
              </div>

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

              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <div className="profileform-group">
                <input
                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                  required
                />
              </div>

              <label htmlFor="phone">ID card number</label>
              <div className="profileform-group">
                <img src={Call} alt="People Icon" />
                <input
                  type="id"
                  id="ID"
                  placeholder="Enter your ID number"
                  value=""
                />
              </div>
            </div>
          </div>

          <div className="profileform-add">
          <label className="labb" htmlFor="address">Your Address</label>
            <div>
              <label htmlFor="address">Address</label>
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

            <div className="addpass">

         
<div className="statepass">
<label className="acclabel" htmlFor="Account-Interest">
              State
            </label>
            <div className="profileform-group">
              <DropdownSelect
                className="accounttype"
                onSelect={handleStateChange}
                options={["Lagos", "Oyo", "Ogun"]}
                defaultSelected={"Select"}
              />
            </div>

            <label className="labb" htmlFor="password">Change Password</label>
            <label htmlFor="password">Password</label>
            <div className="profileform-group">
              <img src={lock} alt="Password Icon" />
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
              />
              <div
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={passwordVisible ? See : UnSee}
                  alt="Toggle Password Visibility"
                />
              </div>
            </div>
           

</div>
         
           
<div className="citypass">


            <label className="acclabel" htmlFor="Account-Interest">
              City
            </label>
            <div className="profileform-group">
              <DropdownSelect
                className="accounttype"
                onSelect={handleCityChange}
                options={["Ibadan", "Abeokuta"]}
                defaultSelected={"Select"}
              />
            </div>
<div className="pass">
<label htmlFor="new-password">New Password:</label>
            <div className="profileform-group">
              <img src={lock} alt="People Icon" />
              <input
                type={passwordVisible ? "text" : "password"}
                id="new-password"
                placeholder="new password"
           
                onChange={handlePasswordChange}
                className={!isValidPassword ? "invalid" : ""}
              />
              <div
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={passwordVisible ? See : UnSee}
                  alt="Toggle Password Visibility"
                />
              </div>
            </div>
            {!isValidPassword && (
              <p className="error-message">
                Password must be at least 6 characters and include numbers and
                special characters.
              </p>
            )}
</div>
           
          </div>
          </div>
          </div>
          <div className="button-group">
            <button className="butt" type="submit">save changes</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
