import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    const { projects, auth, users } = this.props;
    console.log(users);
    if (!auth.uid) return <Redirect to="/signin" />
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <ProjectList projects={projects} />
          </div>
          <div className="col-sm-12 col-md-4">
            <Notifications project={projects} />
          </div>
        </div>
      </div>
    </div>
   )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects || state.project.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ["createdAt", "desc"] }
  ])
)(Home)
