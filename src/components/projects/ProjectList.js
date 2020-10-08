import React from "react";
import ProjectSum from "./ProjectSum";

const ProjectList = ({ projects }) => {
  return (
    <div className="container pt-5">
      <h1 className="pb-4"> Active Projects </h1>
      {projects &&
        projects.map((project) => {
          return <ProjectSum project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
