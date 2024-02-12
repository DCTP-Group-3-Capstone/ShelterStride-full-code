 
import React from 'react';
import { Link } from 'react-router-dom'; 
 import shelterstride from "../../assets/images/ShelterStrideSideLogo.svg";
 import usericon from "../Registeration/icons/Benefactor.svg";
import usericon2 from "../Registeration/icons/Sponsor.svg";
import "/src/scss/pages/CreateAccount.scss";



const CreateAccount = () => {
  return (
    <>




    <div className="container">
      <div className="heading">
      <img src={shelterstride} alt="shelterstridelogo" />
      </div>

      <div className="question">
        <h3>How will you like to join us at ShelterStride?</h3>
      </div>

      <div className="account-type">
        <div className="benefactor">
          <div className="title">


          <img src={usericon} alt="user-icon" />
            <h4>Join as a Benefactor</h4>
          </div>
          <p>
            ShelterStride gives you to opportunity to rent and buy your dream
            home through installments. You have the ability to decide how your
            payment plan works.
          </p>

          <Link to="/signupbenefactor">
          <button className="button1">Continue as Benefactor</button>
          </Link>
        </div>
        
        <hr />
        <div className="sponsor">
          <div className="title">
          <img src={usericon2} alt="user-icon2" />
            <h4>Join as a Sponsor</h4>
          </div>
          <p>
            ShelterStride is a platform that helps disadvantaged persons find a
            place to call home. Are you passionate about helping people? if
            yes, ShelterStride is the best place for you.
          </p>

          <Link to="/signup">
              <button className="button2">Continue as a Sponsor</button>
            </Link>
        </div>
      </div>

      <p className="signin-text">
        Have an account already?{" "}
        <a href="/signin" target="_blank" rel="noopener noreferrer">
        <Link to="/login">Sign in</Link>
        </a>
      </p>
    </div>
    
    </>
  );
};

export default CreateAccount;
