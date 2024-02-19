import React, { useState } from "react";
import housesearching from "../../../../assets/images/housesearching.svg";
import "../BuyHome/HomeBuy.scss";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Guarantor() {

 
  const navigate = useNavigate();

  
  return (
    <>
      <div className="homebuy-page">
       

       <h2>Buy A Home</h2>
       <p>Let's help you own a home</p>
       <div className="home-request">
       <h5>Your buy a home request will appear here</h5>
    <div>
    <img src={housesearching} alt="" />
    </div>  

        <button>Get Started</button>
       </div>
     
     
      </div>
    </>
  );
}

export default Guarantor;
