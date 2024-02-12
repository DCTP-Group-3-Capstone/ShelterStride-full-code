import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Hidenavbar = ({ children }) => {
  const location = useLocation();
  const [noNavbar, setnoNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/createaccount") {
      setnoNavbar(false);
    } else {
      setnoNavbar(true);
    }
  }, [location]);
  return <div>{noNavbar && children}</div>;
};

export default Hidenavbar;
