import React from "react";
import { Link } from "react-router-dom";
import "./styles/navigation.css";
import SignLinks from "./SignLinks";
import SignOutLinks from "./SignOutLinks";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          Project Management App
        </Link>
        <div className="navbar__links">
          <SignLinks />
          <SignOutLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
