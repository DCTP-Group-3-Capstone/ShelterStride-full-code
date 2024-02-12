 import "/src/scss/pages/_login.scss";
 
import Email from "../../assets/icon/Email.svg";
import lock from "../../assets/icon/lock.svg";
import See from "../../assets/icon/See.svg";
import UnSee from "../../assets/icon/Unsee.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from '../../assets/icon/Spinner.svg';


//functions
function Login() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();




  //email handling
  const handleEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail) || newEmail === "");
  };

  // Add onFocus event handler to reset error message
  const handleEmailFocus = () => {
    setIsValidEmail(true);
  };

  //password toggling
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  //password handling
  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);


  };

  //login handling

  const handleLoginApi = async (event) => {
    event.preventDefault();

    //handle page naviagtion
  

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

    if (!email || !password || password === " ") {
      Toast.fire({
        icon: "error",
        title: "Fields can't be empty"
      })
      setError("Please enter both email and password");

      return;
    }

    try {
      setIsLoading(true);

      const result = await axios.post("https://shelterstride.onrender.com/api/v1/login", {
        email,
        password
      });
  
    setIsLoading(false)
      const { status, data } = result;

      if (status == 200) {
     

        Swal.fire({
          title: "Success",
          text: "logged in successful",
          icon: "success",
          timer: 2000
        });

        // Set token in local storage
        localStorage.setItem("secret_token", data.token);
        // Redirect to profile page
        navigate("/donate")
      }

    } catch (error) {
      setIsLoading(false)

      let errorMessage = "An unexpected error occurred, please try again";

      if (error.response && error.response.data) {
        errorMessage = error.response.data.error || errorMessage;
      }

      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        timer: 2000
      });

    }
  }


  return (
    <>
      <div className="Login-page">
        <div className="logolabel">
          <img
            src="src\assets\images\ShelterStrideSideLogo.svg"
            alt="Shelters Stride"
          />
        </div>
        <div className="Login-container">
          <h2 className="welcome-back"> Welcome Back</h2>
          <form onSubmit={handleLoginApi}>
            <div className="Login-Box">
              <div className="Login-form">
                <label htmlFor="email">Email Address</label>
                <div className="form-group">
                  <img src={Email}
                    alt="Email Icon" />
                  <input type="email"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                    onFocus={handleEmailFocus}
                    placeholder="Enter your email" />
                </div>
                {!isValidEmail && (
                  <p className="error-message">Invalid email address</p>
                )}



                <label htmlFor="password">Password</label>
                <div className="form-group">
                  <img src={lock} alt="Password Icon" />
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handlePassword}
                    placeholder="Enter your password"
                  />
                  <div
                    className="password-toggle"
                    onClick={togglePasswordVisibility}>
                    <img src={passwordVisible ? See : UnSee} alt="Toggle Password Visibility" />
                  </div>
                </div>

                <p className="forgot-password">
                  <a
                    href="/forgot-password"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Forgot Password?
                  </a>
                </p>

                <div className="button-group">
                <button type="submit">
                    {isLoading ? <img src={Spinner} alt="loader" /> : "Sign in"}
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p className="signup-text">
            New to ShelterStride ?{""}

            <Link to="/createaccount">Sign up</Link>

          </p>
        </div>
      </div>
    </>
  );
}

export default Login;