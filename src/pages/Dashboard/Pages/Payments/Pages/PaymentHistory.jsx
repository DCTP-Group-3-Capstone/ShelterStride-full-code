import React, { useState } from "react";
import surfing from "../../../../assets/images/surfing.svg";
import "../Pages/PaymentHistory.scss";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Guarantor() {

 
  const navigate = useNavigate();

  
  return (
    <>
      <div className="history-page">
       

       <h2>Buy A Home</h2>
       <p>Let's help you own a home</p>
       <div className="home-request">
       <h5>Your payment history  will appear here</h5>
    <div>
    <img src={surfing} alt="" />
    </div>  
    <h5>Looks like you haven’t made any payment yet</h5>

        <button>Get Started</button>
       </div>
     
     
      </div>
    </>
  );
}

export default Guarantor;
