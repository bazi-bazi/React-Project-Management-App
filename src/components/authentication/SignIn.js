import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { signIn } from '../../redux/actions/authActions'

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const {authError} = this.props;
    return (
      <div className="container pt-5  p-3 my-3 border">
        <h2 className="pt-2">Sign in</h2>
        <form onSubmit={this.handleSubmit} className="pt-4 pb-5">
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
          <div>
    {authError ? <p className="alert alert-danger mt-3" role="alert">{authError}</p> : null }
</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
