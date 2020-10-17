import React from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";
import "../../app.css";
import "../../animation.css";
import "../../bootstrap-datepicker.css";
import "../../bootstrap.min.css";
import "../../aos.css";
import "../../owl.theme.default.min.css";
import "../../custome.css";

const ProjectDetails = (props) => {
  const {project, auth} = props;
  if (!auth.uid) return <Redirect to="/signin" />
  if (project) {
    return (
    <div className="container pt-5">
      <div className="card mb-3 bg-light.bg-gradient text-dark shadow p-4 mb-4 bg-white border border-light rounded-lg ">
      <div className="row">
							<div className="col-md-12 ">
		            <div className="job-post-item p-5 d-block d-lg-flex align-items-center">
		              <div className="one-third mb-4 mb-md-0">
		                <div className="job-post-item-header align-items-center">
		                	
		                  <h2 className="mr-3 text-black "> {project.title} </h2>
		                </div>
                         <p className="card-text">
                          {project.content}
                         </p>
		                <div className="job-post-item-body d-block d-md-flex">
		                  <div className="mr-3"><span className="icon-layers"></span>Posted by : {project.authorFirstName} {project.authorLastName}</div><br />
		                  <div><span className="icon-my_location"></span> <span>{project.createdAt && moment(project.createdAt.toDate()).calendar()} </span></div>
		                </div>
		              </div>

		              <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
		              	<div>
		                </div>
                    <Link to={"/"} >
		                <a  className="btn btn-primary py-2">Go Back</a>
                    </Link>
		              </div>
		            </div>
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
