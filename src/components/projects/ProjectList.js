import React from "react";
import ProjectSum from "./ProjectSum";

const ProjectList = () => {
  return (
    <div className="container pt-5">
      <h1 className="pb-4">Active Projects</h1>
      <ProjectSum />
      <ProjectSum />
      <ProjectSum />
      <ProjectSum />
      <ProjectSum />
    </div>
  );
};

export default ProjectList;
