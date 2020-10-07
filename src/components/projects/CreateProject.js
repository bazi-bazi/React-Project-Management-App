import React from "react";
import { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
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
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="content" className="col-sm-2 col-form-label">
              Content
            </label>
            <div className="col-sm-10">
              <textarea
                type="password"
                className="form-control"
                id="content"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default CreateProject;
