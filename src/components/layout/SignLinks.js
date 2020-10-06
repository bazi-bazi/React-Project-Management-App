import React from "react";
import { NavLink } from "react-router-dom";

const SignLinks = () => {
  return (
    <ul className="nav justify-content-end">
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
          <span class="badge bg-info">New</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignLinks;
