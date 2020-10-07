import React from "react";
import { NavLink } from "react-router-dom";

const SignLinks = () => {
  return (
    <ul className="navbar-nav justify-content-end">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          New Project
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Log Out
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          <span className="badge bg-info">New</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignLinks;
