import React from "react";
import { Component } from "react";
import { createProject } from "../../redux/actions/projectActions";
import { connect } from "react-redux";

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
    this.props.createProject(this.state);
  };

  render() {
    return (
      <div className="container pt-5  p-3 my-3 border">
        <h2 className="pt-2">Create Project</h2>
        <form onSubmit={this.handleSubmit} className="pt-4 pb-5">
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

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
