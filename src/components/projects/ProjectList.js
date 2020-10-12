import React from "react";
import ProjectSum from "./ProjectSum";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="container pt-5">
      <h1 className="pb-4"> Active Projects </h1>
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            <ProjectSum project={project} />
          </Link>
        )
      })}  
    </div>
  );
};

export default ProjectList;
