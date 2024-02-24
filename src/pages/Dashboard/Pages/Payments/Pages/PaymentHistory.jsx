import React, { useState } from "react";
import surfing from "../../../../../assets/images/surfing.svg";
import "../Pages/PaymentHistory.scss";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function PaymentHistory() {

 
  const navigate = useNavigate();

  
  return (
    <>
      <div className="history-page">
       
       <div className="home-request">
       <h5>Your payment history  will appear here</h5>
    <div>
    <img src={surfing} alt="" />
    </div>  
    <h2>Looks like you haven’t made any payment yet</h2>

 
       </div>
     
     
      </div>
    </>
  );
}

export default PaymentHistory;