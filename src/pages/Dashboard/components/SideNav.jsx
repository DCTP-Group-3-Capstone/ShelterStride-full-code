import "../components/SideNav.scss";
import React, { useState, useRef, useEffect } from 'react';;
import Logo from "../../../assets/images/ShelterStrideSideLogo.svg";
import BackArrow from "../../../assets/icon/backArrow.svg";
import Homes from "../../../assets/icon/Homes.svg";
import Booking from "../../../assets/icon/booking.svg";
import Wallet from "../../../assets/icon/Wallet.svg";
import Settings from "../../../assets/icon/settings.svg";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const sideNavRef = useRef(null);

  const handleLinkClick = (linkId) => {
    // Remove active class from previously active link
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    // Add active class to the clicked link
    const link = document.getElementById(linkId);
    link.classList.add('active');
    setActiveLink(link);
  };

  return (
    <div className="sidebar-wrapper" ref={sideNavRef}>
      <div className="logo-wrapper">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span className="acct-type">For Beneficiary</span>
        </div>

        <div className="nav-toggler">
          <img src={BackArrow} alt="toggle-icon" />
        </div>
      </div>
      <div className="nav-menulists">
        <div className="nav-items">
          <h2>MENU</h2>
          <div className="menu">

            <Link id="dashboard"
              to="/dashboard"
              className={`nav-item ${activeLink === "dashboard" ? "active" : ""}`}
              onClick={() => handleLinkClick("dashboard")}
            >
              <img src={Homes} alt="Home" />
              <p>Dashboard</p>
            </Link>

            <Link id="rent"
              to={"/dashboard/rent"}
              className={`nav-item ${activeLink === "rent" ? "active" : ""}`}
              onClick={() => handleLinkClick("rent")}
            >
              <img src={Booking} alt="Book" />
              <p>Rent a home</p>
            </Link>

            <Link id="buy"
              to={"/dashboard/buy"}
              className={`nav-item ${activeLink === "buy" ? "active" : ""}`}
              onClick={() => handleLinkClick("buy")}
            >
              <img src={Booking} alt="Buy" />
              <p>Buy a home</p>
            </Link>

            <Link id="maintenance"
              to={"/dashboard/maintenance"}
              className={`nav-item ${activeLink === "maintenance" ? "active" : ""}`}
              onClick={() => handleLinkClick("maintenance")}
            >
              <img src={Booking} alt="Maintenance" />
              <p>Maintenance</p>
            </Link>

            <Link id="payment"
              to={"/dashboard/payment"}
              className={`nav-item ${activeLink === "payment" ? "active" : ""}`}
              onClick={() => handleLinkClick("payment")}
            >
              <img src={Wallet} alt="" />
              <p>Payments</p>
            </Link>
          </div>
        </div>

        <div className="account">
          <h2>ACCOUNT MANAGEMENT</h2>

          <Link id="settings"
            to={"/dashboard/settings"}
            className={`nav-item ${activeLink === "settings" ? "active" : ""}`}
            onClick={() => handleLinkClick("settings")}
          >
            <img src={Settings} alt="" />
            <p>Account Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
