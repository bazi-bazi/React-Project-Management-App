import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from "react-router-dom";
import "../../app.css";
import "../../animation.css";
import "../../bootstrap-datepicker.css";
import "../../bootstrap.min.css";
import "../../aos.css";
import "../../owl.theme.default.min.css";

class Home extends Component {
  render() {
    const { projects, auth, users } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />
    return (
    <div>
      <section className="ftco-section bg-light">
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
      </section>
    </div>
   )
  }
}

const mapStateToProps = (state) => {
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
