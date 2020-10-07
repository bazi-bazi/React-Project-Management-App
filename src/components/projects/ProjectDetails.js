import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container pt-5">
      <div className="card mb-3 bg-light.bg-gradient text-dark shadow p-4 mb-4 bg-white border border-light rounded-lg ">
        <div className="card-body">
          <h3 className="card-title">Project TiTle - {id}</h3>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <div class="border-success pt-3">
            <span className="font-weight-bold">Posted By Nik </span>
            <small className="text-muted font-italic">3 rd September</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
