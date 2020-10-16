import React from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = (props) => {
  const {project, auth} = props;
  if (!auth.uid) return <Redirect to="/signin" />
  if (project) {
    return (
    <div className="container pt-5">
      <div className="card mb-3 bg-light.bg-gradient text-dark shadow p-4 mb-4 bg-white border border-light rounded-lg ">
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-text">
            {project.content}
          </p>
          <div className="border-success pt-3">
  <span className="font-weight-bold">Posted By {project.authorFirstName} {project.authorLastName}</span><br />
            <small className="text-muted font-italic">{project.createdAt && moment(project.createdAt.toDate()).calendar()}</small>
          </div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
     <div className="container pt-5">
       <p>loading project...</p>
     </div>
      );
  }
  
};

const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
