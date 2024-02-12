import React, { useState, useEffect } from "react";
import shelterstride from "../../assets/images/ShelterStrideSideLogo.svg";
import People from "../../assets/icon/Profle2.svg";
import Email from "../../assets/icon/Email.svg";
import lock from "../../assets/icon/lock.svg";
import UnSee from "../../assets/icon/Unsee.svg";
import See from "../../assets/icon/See.svg";
import "/src/scss/pages/SignUp.scss";
import DropdownSelect from "../../components/DropdownSelect";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 
import Swal from 'sweetalert2';
import Spinner from '../../assets/icon/Spinner.svg';


import axios from "axios";

function SignUp() {
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
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState("Individual");
  const navigate = useNavigate();


  const handleaccountype = (selectedAccountType) => {
    setSelectedAccountType(selectedAccountType);

  


    // Update label and placeholder based on selected account type
    if (selectedAccountType === "Individual") {
      setLabelText("Name");
    } else if (selectedAccountType === "Company") {
      setLabelText("Company Name");
    }
  };

  //change text in response to select choices

  const getPlaceholderText = () => {
    if (selectedAccountType === "Individual") {
      return "Enter your name";
    } else if (selectedAccountType === "Company") {
      return "Enter company name";
    } else {
      return "Enter your name";
    }
  };

  //name changes
  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  //email validations
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail) || newEmail === "");
  };

  // Add onFocus event handler to reset error message
  const handleEmailFocus = () => {
    setIsValidEmail("true");
  };

  //handle password visibility and validations
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  //password handling
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

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
    setConfirmPassword(newConfirmPassword);

    // Reset the error message when the user starts typing a new password
    setIsValidConfirmPassword(true);

    // Check if confirm password matches the password
    setIsValidConfirmPassword(newConfirmPassword === password);
  };


 // Event handler for "terms and privacy policy" link
 const handleTermsClick = () => {
  //setShowModal(true);
};



const handlesubmission = async (event) => {
  event.preventDefault();

  const nameParts = name.split(" ");
  const firstname = nameParts[0];
  const lastname = nameParts[nameParts.length - 1];
  

 // TOAST CONFIG
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


if (!name || !email || !password || !selectedAccountType) {

  Toast.fire({
    icon: "error",
    title: "Fields can't be empty"
  })
  setError("Fill all fields");
  return;
}
  
if (!isValidConfirmPassword) {
 
  Toast.fire({
    icon: "error",
    title: "Password does not match"
  })
  setError("Confirm Password");
  return;
}

if (!isValidPassword) {
  
  Toast.fire({
    icon: "error",
    title: "Password not valid"
  })
  setError("Please enter a valid email");
  return;
}
try {
  setIsLoading(true);
  const result = await axios.post("https://shelterstride.onrender.com/api/v1/signup", {
    usertype: "Donor",
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    companyname: name !== "" ? name : null,
    accounttype: selectedAccountType !== "" ? selectedAccountType : null,
  });

 
  setIsLoading(false); 
  const { data, status } = result;

  if (status === 201) {
 

    Swal.fire({
      title: "Success",
      text: "Signed up successfully",
      icon: "success",
      timer: 2000
    });

    // ROUTE to SIGNIN
    navigate("/login")
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
  // Handle unexpected errors


  Swal.fire({
    title: "Error",
    text: "An unexpected error occurred, please try again",
    icon: "error",
    timer: 2000
  })
}

}

return (
  <>

    <div className="Signupsponsor-page">
      <div className="logolabel">
        <img src={shelterstride} alt="Shelters Stride" />
      </div>

      <div className="Signupsponsor-container">
        <h2> Create your account</h2>




        <div className="Signupsponsor-Box">
          <div className="Signupsponsor-form">
            {/*first input*/}
<form onSubmit={handlesubmission}>
            <label className="acclabel" htmlFor="Account-Interest">
              Account Type
            </label>

            <div className="Signupsponsorform-group">

                    <DropdownSelect className="accounttype"
                     onSelect={handleaccountype}
                      options={['Individual', 'Company']}
                      defaultSelected={"Select"}
                    />
                    </div>

            {/*second input*/}

            <label htmlFor="firstandlastname">{labelText}</label>
            <div className="Signupsponsorform-group">
              <img src={People} alt="People Icon" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder={getPlaceholderText()}
              />
            </div>

            {/*third input*/}
            <label htmlFor="email">Email Address</label>
            <div className="Signupsponsorform-group">
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

            {/*fourth input*/}
            <label htmlFor="password">Password</label>
            <div className="Signupsponsorform-group">
              <img src={lock} alt="Password Icon" />

              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
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
              <p className="error-message">
                Password must be at least 6 characters and include numbers and
                special characters.
              </p>
            )}

            {/*sixth input*/}
            <label htmlFor="confirm-password">Confirm Password:</label>
            <div className="Signupsponsorform-group">
              <img src={lock} alt="People Icon" />
              <input
                type={passwordVisible ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirm password"
                value={confirmPassword}
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
              <p className="error-message">Passwords do not match</p>
            )}

           {/*signup button*/}
           <div className="Signupsponsorbutton-group">
              <button type="submit">
              {isLoading ? <div className="overlay"><img className="spin" src={Spinner} alt="loader" /></div> : "Sign Up"}
              </button>
            </div>
</form>
            <p className="terms-text">
              By signing up, you agree to our{""}
              <span onClick={handleTermsClick} className="terms-link">
            <Link to="#" className="terms-link">
              terms and privacy policy
            </Link>
          </span>
            </p>
          </div>

      
        </div>

        <p className="signin-text">
          Have an account already?{" "}
         
          <Link to="/login">Sign in</Link>
         
        </p>


      </div>


    </div>
  </>
);




}

export default SignUp;
