import React from "react";
import { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container pt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="firstName" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="firstName"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="lastName" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="lastName"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
