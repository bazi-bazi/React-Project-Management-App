import React from "react";
import { Link } from "react-router-dom";
import SignLinks from "./SignLinks";
import SignOutLinks from "./SignOutLinks";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid container-lg">
        <Link to="/" className="navbar-brand">
          Project Management App
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <SignLinks />
          <SignOutLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
