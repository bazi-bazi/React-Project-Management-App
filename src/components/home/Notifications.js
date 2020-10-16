import React from "react";
import { Link } from "react-router-dom";

const Notifications = ({project}) => {

  return (
    <div className="container pt-5 pb-5 mt-5 p-5">
      <h4>Side Menu</h4>
     
      <ul>
          <li> {project.length} </li>
           <p>Newest Articles</p>
          { project && project.map(projects => {
        return (
          <Link to={'/project/' + projects.id} key={projects.id}>
        <li>{projects.title}</li>
        </Link>
        )
      })}
      { project && project.map(projects => {
        return (
          <li  key={projects.id}>
        <li>{projects.authorFirstName}</li>
        </li>
        )
      })}   
      </ul>
    </div>
  );
};

export default Notifications;
