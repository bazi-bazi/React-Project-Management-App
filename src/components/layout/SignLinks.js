import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut }  from "../../redux/actions/authActions";

const SignLinks = (props) => {
  return (
    <ul className="navbar-nav justify-content-end">
      <li className="nav-item">
        <NavLink to="/create" className="nav-link">
          New Project
        </NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          <span className="badge bg-info">New</span>
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignLinks)
