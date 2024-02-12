import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Button.scss";

const Button = () => {
  return (
    <>
      <NavLink to="/login">
        <button className="btn_log_in">Log in</button>
      </NavLink>
      <NavLink to="/createaccount">
        <button className="btn_sign_up">Sign up</button>
      </NavLink>
    </>
  );
};

export default Button;
