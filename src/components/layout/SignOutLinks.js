import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/signoutlinks.css";

const SignOutLinks = () => {
  return (
    <ul className="links">
      <li className="links__list">
        <NavLink to="/" className="links__list">
          Signup
        </NavLink>
        <NavLink to="/" className="links__list">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignOutLinks;
