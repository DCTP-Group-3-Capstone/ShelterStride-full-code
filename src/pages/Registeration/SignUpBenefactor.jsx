import React, { useState } from "react";
//import { useHistory } from 'react-router-dom';
import shelterstride from "../../assets/images/ShelterStrideSideLogo.svg";
import People from "../../assets/icon/Profle2.svg";
import Persons from "../../assets/icon/People.svg";
import Money from "../../assets/icon/Money.svg";
import Email from "../../assets/icon/Email.svg";
import Call from "../../assets/icon/Call.svg";
import UnSee from "../../assets/icon/Unsee.svg";
import lock from "../../assets/icon/lock.svg";
import "../../scss/pages/SignUpBenefactor.scss";
import DropdownSelect from "../../components/DropdownSelect";
import { Link } from "react-router-dom";
import See from "../../assets/icon/See.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import Spinner from '../../assets/icon/Spinner.svg';

function SignUpBenefactor() {

  const [isValidEmail, setIsValidEmail] = useState(true);

  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();


  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  // Create a state object to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    gender: "",
    familySize: "",
    monthlyIncome: "",
    password: "",
    confirmPassword: "",
    selectedInterestType: "",
  });


 // Function to update the form data state
 const updateFormData = (key, value) => {
  setFormData((prevData) => ({
    ...prevData,
    [key]: value,
  }));
};

  const genderOptions = ["Male", "Female"];
  //pages indication
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  //dropdown gender
  const handleGenderChange = (selected_gender) => {
    updateFormData("gender", selected_gender);
  
  };

  const handleInterest = (selected_intrest) => {
    updateFormData("selectedInterestType", selected_intrest);
    
  };



  const handleagechange = (event) => {
    const age_number = event.target.value;
    updateFormData("age", age_number);
 
  };

  const handlefamilysize = (event) => {
    const family_size = event.target.value;
    updateFormData("familySize", family_size);
  
  };
 

  const handlemonthlyIncome = (event) => {
    const monthly_income = event.target.value;
    updateFormData("monthlyIncome", monthly_income);
 
  };
 

  //progress bar assignment
  const ProgressBar = () => {
    const progress = (currentPage / totalPages) * 100;

    //internal declaration of progress bar and label
    return (
      <div className="progress-bar-container">
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="page-indicator">{`${currentPage} of ${totalPages}`}</div>
      </div>
    );
  };

  //email validations
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    updateFormData("email", newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail) || newEmail === "");
  };


  //contact number validation
  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    updateFormData("phoneNumber", newPhoneNumber);

    // Phone number logic
    const phoneRegex = /^\d{11}$/; // for 11 digits
    setIsValidPhoneNumber(
      phoneRegex.test(newPhoneNumber) || newPhoneNumber === ""
    );
  };

  //selected value
  const [value, setValue] = React.useState("Select");


  //handle password visibility and validations
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  //password handling
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    updateFormData("password", newPassword);

    // Reset the error message when the user starts typing a new password
    setIsValidPassword(true);

    // Password validation criteria
    const passwordvalidate = /^(?=.*[0-9])(?=.*[!.?@#$%^&*])(.{6,})$/;
    setIsValidPassword(
      passwordvalidate.test(newPassword) || newPassword === ""
    );
  };

  //confirm password handling
  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    updateFormData("confirmPassword", newConfirmPassword);

    // Reset the error message when the user starts typing a new password
    setIsValidConfirmPassword(true);

    // Check if confirm password matches the password
    setIsValidConfirmPassword(newConfirmPassword === formData.password);
  };

  const handleNextClick = () => {
    let isValid = true;

    // Perform validation for each page's fields
    switch (currentPage) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !isValidEmail || !isValidPhoneNumber) {
          isValid = false;
        }
        break;
      case 2:
        if (!formData.age || !formData.gender || !formData.familySize || !formData.monthlyIncome) {
          isValid = false;
        }
        break;
      case 3:
        if (!isValidPassword || !isValidConfirmPassword || !formData.interest || formData.interest == " ") {
          isValid = false;
        }
        break;
      default:
        break;
    }

    if (isValid && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      Toast.fire({
        icon: "error",
        title: "Please validate all fields to proceed."
      })
    }

  };


  const handleSignUp = async (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
      phoneNumber,
      familySize,
      monthlyIncome,
      confirmPassword,
      selectedInterestType,

    } = formData;

    if (!isValidPassword || !isValidConfirmPassword || selectedInterestType == " ") {
      setError("Please provide valid information");
      Toast.fire({
        icon: "error",
        title: "Please validate all fields to proceed."
      })
      return;
    }


    try {
      setIsLoading(true);
      const result = await axios.post("https://shelterstride.onrender.com/api/v1/signup", {
        usertype: "Benefactor",
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        age: age !== "" ? age : null,
        gender: gender !== "" ? gender : null,
        phone: phoneNumber !== "" ? phoneNumber : null,
        familysize: familySize !== "" ? familySize : null,
        monthlyincome: monthlyIncome !== "" ? monthlyIncome : null,
        interest: selectedInterestType,

      });
 //set is loading to false after getting response
      const { data, status } = result;
      setIsLoading(false);
      if (status === 201) {

        Swal.fire({
          title: "Success",
          text: "Signed up successfully",
          icon: "success",
          timer: 2000
        });

        // ROUTE to SIGNIN
        navigate("/Login")
      } else {
        Swal.fire({
          title: "Error",
          text: data.message,
          icon: "error",
          timer: 2000
        })
      }

    } catch (error) {
      setIsLoading(false);

      Swal.fire({
        title: "Error",
        text: "An unexpected error occurred, please try again",
        icon: "error",
        timer: 2000
      })
    }
  };

  
  //interface
  return (
    <>
      <div className="signupben-page">
        <div className="logolabel">
          <img
            src="src\assets\images\ShelterStrideSideLogo.svg"
            alt="Shelters Stride"
          />
        </div>
        <div className="signupben-container">
          <h2> Create your account</h2>

          {/*progress bar usage*/}
          <div className="pro-bar">
            <ProgressBar className="progress-barr"/>
          </div>

          {/*//three pages form*/}

          <form className="signupform-ben"  onSubmit={handleSignUp}>
            {/* Render form fields based on the current page */}
            {/*page 1*/}
            {currentPage === 1 && (
              <>
                <div className="signupben-Box">
                  <div className="signupben-form">
                    <label htmlFor="firstname">First Name</label>
                    <div className="signupben-group">
                      <img src={People} alt="People Icon" />
                      <input
                        type="text"
                        id="name"
                        value={formData.firstName}
                        onChange={(e) =>
                          updateFormData("firstName", e.target.value)
                        }
                        placeholder="Enter first name"
                      />
                    </div>

                    <label htmlFor="lastname">Last Name</label>
                    <div className="signupben-group">
                      <img src={People} alt="People Icon" />
                      <input
                        type="text"
                        id="name"
                        value={formData.lastName}
                        onChange={(e) =>
                          updateFormData("lastName", e.target.value)
                        }
                        placeholder="Enter first name"
                      />
                    </div>

                    <label htmlFor="email">Email Address</label>
                    <div className="signupben-group">
                      <img src={Email} alt="People Icon" />
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        //  style={{ backgroundImage: `url(${Email})` }}
                        value={formData.email}
                        onChange={handleEmailChange}
                        className={!isValidEmail ? "invalid" : ""}
                      />
                    </div>
                    {!isValidEmail && (
                      <p className="error-message">Invalid email address</p>
                    )}

                    <label htmlFor="phone">Phone Number</label>
                    <div className="signupben-group">
                      <img src={Call} alt="People Icon" />
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className={!isValidPhoneNumber ? "invalid" : ""}
                      />
                    </div>
                    {!isValidPhoneNumber && (
                      <p className="error-message">Invalid phone number</p>
                    )}
                  </div>
                </div>
              </>
            )}
            {/*page 2*/}
            {currentPage === 2 && (
              <>
                <div className="signupben-Box">
                  <div className="signupben-form">
                    <label htmlFor="age">Age</label>
                    <div className="signupben-group">
                      <input className="other-input"
                        type="number"
                        id="age"
                        value={formData.age}
                        onChange={handleagechange}
                        placeholder="Enter your age"
                        min="0"
                      />
                    </div>

                    <label htmlFor="gender">Gender</label>
                    <div className="signupben-group">
                      <img className="gen"  src={People} alt="" />
                      <DropdownSelect
                        options={genderOptions}
                        defaultSelected={"Gender"}
                        onSelect={handleGenderChange}
                      />
                    </div>

                    <label htmlFor="family">Family Size</label>
                    <div className="signupben-group">
                      <img src={Persons} alt="People Icon" />
                      <input
                        type="number"
                        id="familysize"
                        value={formData.familySize}
                        onChange={handlefamilysize}
                        min="0"
                        placeholder="Family Size"
                      />
                    </div>

                    <label htmlFor="monthlyIncome">Monthly Income</label>
                    <div className="signupben-group">
                      <img src={Money} alt="People Icon" />

                      <input
                        type="number"
                        id="monthlyincome"
                        value={formData.monthlyIncome}
                       onChange={handlemonthlyIncome}
                        placeholder="Monthly Income"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            {/*page 3*/}
            {currentPage === 3 && (
              <>
                <div
                  className="signupben-Box"
                  style={{
                    height: currentPage === totalPages ? "410px" : "auto",
                  }}
                >
                  <div className="signupben-form">
                    <label htmlFor="password">Password</label>
                    <div className="signupben-group">
                      <img src={lock} alt="People Icon" />
                      <input required
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        value={formData.password}
                        onChange={handlePasswordChange}
                        className={!isValidPassword ? "invalid" : ""}
                        placeholder="Enter your password"
                      />
                      <div
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                      >
                        <img src={passwordVisible ? See : UnSee} alt="Toggle Password Visibility" />
                      </div>
                    </div>
                    {!isValidPassword && (
                      <p className="password-message">
                        Password must be at least 6 characters and include
                        numbers and special characters.
                      </p>
                    )}

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <div className="signupben-group">
                      <img src={lock} alt="People Icon" />
                      <input required
                        type={passwordVisible ? "text" : "password"}
                        id="confirm-password"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className={!isValidConfirmPassword ? "invalid" : ""}
        
                      />
                      <div
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                      >
                        <img src={passwordVisible ? See : UnSee} alt="Toggle Password Visibility" />
                      </div>
                    </div>
                    {!isValidConfirmPassword && (
                      <p className="password-message">Passwords do not match</p>
                    )}

                    <label className="acclabel" htmlFor="Account-Interest">
                      What are you interested in?
                    </label>
                    <div className="signupben-group">
                      <DropdownSelect 
                        className="interest"
                        onSelect={handleInterest}
                        options={["Renting a home", "Buying a home"]}
                        defaultSelected={"Select"}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/*next and signup button*/}

            <div className="signupben-but">
              {currentPage < totalPages ? (
                <button type="button" onClick={handleNextClick}>
                  Next
                </button>
              ) : (
                <button className="sub" type="submit">
                  {isLoading ? <img src={Spinner} alt="loader" /> : " Sign Up"}
                </button>
              )}
            </div>

           

</form>
 <p className="terms-text">
              By signing up, you agree to our{""}
              <Link to="/termandpp">terms and privacy policy</Link>
            </p>
          

         
          <p className="signin-text">
            Have an account already? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUpBenefactor;