import React, { useState } from "react";
import People from "../../../../../assets/icon/Profle2.svg";
import "./EmploymentDetails.scss";
import Money from "../../../../../assets/icon/Money.svg";
import DropdownSelect from "../../../../../components/DropdownSelect";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function EmploymentDetails() {
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
      <div className="employment-page">
        <form>
          <h3>Kindly provide your employment history</h3>

          <div className="profileinfo2">
            <div className="address-part">
              <div>
                <label className="acclabel" htmlFor="Account-Interest">
                  Employment status
                </label>
                <div className="profileform-group">
                  <DropdownSelect
                    className="accounttype"
                    onSelect={handleStateChange}
                    options={["Oyo", "Ogun"]}
                    defaultSelected={"Select"}
                  />
                </div>
              </div>

              <div className="address-part">
                <div>
                  <label htmlFor="firstname">Company/employer’s name</label>
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
              <label htmlFor="monthlyIncome">Monthly Income</label>
      

            <div className="profileform-group">
              <img src={Money} alt="People Icon" />

              <input
                type="number"
                id="monthlyincome"
                //    value={formData.monthlyIncome}
                //    onChange={handlemonthlyIncome}
                placeholder="Monthly Income"
                min="0"
              />
            </div>
            </div>

           
              <div>
                <label htmlFor="firstname">Job title</label>
         

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
            <div>
              <label htmlFor="address">Office address</label>
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

export default EmploymentDetails;
