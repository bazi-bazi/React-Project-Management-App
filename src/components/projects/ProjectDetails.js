import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container pt-5">
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">Project TiTle - {id}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <p className="card-text">
            <small className="text-muted">Posted By Nik -</small>
            <small className="text-muted">3 rd September</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
