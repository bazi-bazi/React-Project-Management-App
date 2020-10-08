import React from "react";

const ProjectSum = ({ project }) => {
  return (
    <div className="card mb-3 bg-light.bg-gradient text-dark shadow p-4 mb-4 bg-white border border-light rounded-lg">
      <div className="card-body ">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-text font-weight-bold">{project.content}</p>
        <p className="card-text">
          <small className="text-muted font-italic">3 rd September</small>
        </p>
      </div>
    </div>
  );
};

export default ProjectSum;
