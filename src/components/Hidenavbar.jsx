import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Hidenavbar = ({ children }) => {
  const location = useLocation();
  const [noNavbar, setnoNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/createaccount" 
    || location.pathname === "/signupbenefactor" 
    || location.pathname === "/signup" 
     || location.pathname === "/dashboard/rent"
     || location.pathname === "/dashboard/buy"
     || location.pathname === "/dashboard/maintenance"
     || location.pathname === "/dashboard/payment"
     || location.pathname === "/dashboard/payment/" 
     || location.pathname === "/dashboard/payment/paymenthistory" 
     || location.pathname === "/dashboard/settings" 
     || location.pathname === "/dashboard/settings/rental" 
     || location.pathname === "/dashboard/settings/employmentDetails" 
     || location.pathname === "/dashboard/settings/guarantor" 
     || location.pathname === "/dashboard/settings/document" 
     || location.pathname === "/dashboard/settings/" 
   
    || location.pathname === "/dashboard" ) {
      setnoNavbar(false);
    } else {
      setnoNavbar(true);
    }
  }, [location]);
  return <div>{noNavbar && children}</div>;
};

export default Hidenavbar;
