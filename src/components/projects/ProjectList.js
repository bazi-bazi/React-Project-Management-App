import React from "react";
import ProjectSum from "./ProjectSum";
import { Link } from "react-router-dom";
import "../../app.css";
import "../../animation.css";

const ProjectList = ({ projects }) => {
  return ( 
    <div className="container pt-5 heading-section ">
      <span className="subheading">Recently Added Projects</span>
		  <h2 className="mb-4">Featured Projects</h2>
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id} style={{ textDecoration: 'none' }} >
            <ProjectSum project={project} />
          </Link>
        )
      })}  
    </div>
  );
};

export default ProjectList;
