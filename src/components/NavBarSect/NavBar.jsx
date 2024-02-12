import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/images/ShelterStrideSideLogo.svg";
import Button from "./Button";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // const [sticky, setSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > 200);
  //     console.log(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const extendElement = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/">
          <img
            className="navbar-logo"
            onClick={closeMobileMenu}
            src={Logo}
            alt="Logo"
          />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <AiOutlineClose /> : <BiMenuAltRight />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/donate"
              // style={{ color: "#6c9" }}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Donate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-links" onClick={closeMobileMenu}>
              Blog <FiChevronDown />
            </NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={extendElement}
          >
            <NavLink to="/gift" className="nav-links">
              Gift a home <FiChevronDown />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <NavLink
              to="/contactus"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className="nav-links-mobile-log-in"
              onClick={closeMobileMenu}
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="nav-links-mobile-log-in"
              onClick={closeMobileMenu}
            >
              Log in
            </NavLink>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default NavBar;
