import React from "react";
import { Link } from "react-router-dom";
import SignLinks from "./SignLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const Navigation = (props) => {
  const {auth} = props;
  const links = auth.uid ? <SignLinks /> : <SignOutLinks />;
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid container-lg">
        <Link to="/" className="navbar-brand">
          Project Management App
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
        {auth.isLoaded && 
               links
          }
        </div>
      </div>
    </nav>
  );
};


const mapDispatchToProps =(state)=> {

  return {
    auth: state.firebase.auth
  }
}

export default connect(mapDispatchToProps)(Navigation);
