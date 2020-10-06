import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/signoutlinks.css";

const SignLinks = () => {
  return (
    <ul className="links">
      <li className="links__list">
        <NavLink to="/" className="links__list">
          New Project
        </NavLink>
        <NavLink to="/" className="links__list">
          Log Out
        </NavLink>
        <NavLink to="/" className="links__list-icon">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignLinks;
