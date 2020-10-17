import React from "react";
import moment from "moment";
import "../../app.css";
import "../../animation.css";
import "../../bootstrap-datepicker.css";
import "../../bootstrap.min.css";
import "../../aos.css";
import "../../owl.theme.default.min.css";



const ProjectSum = ({ project }) => {
  return (
    <div>
      <section className="ftco-section bg-light">
      <div className="container">
      <div className="col-lg-12 pr-lg-5">
      <div className="row justify-content-center pb-1">
		        </div>
						<div className="row">
							<div className="col-md-12 ">
		            <div className="job-post-item p-5 d-block d-lg-flex align-items-center">
		              <div className="one-third mb-4 mb-md-0">
		                <div className="job-post-item-header align-items-center">
		                	<span className="subadge">Title</span>
		                  <h2 className="mr-3 text-black "> {project.title} </h2>
		                </div>
		                <div className="job-post-item-body d-block d-md-flex">
		                  <div className="mr-3"><span className="icon-layers"></span>Posted by : {project.authorFirstName} {project.authorLastName}</div><br />
		                  <div><span className="icon-my_location"></span> <span>{project.createdAt && moment(project.createdAt.toDate()).calendar()} </span></div>
		                </div>
		              </div>

		              <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
		              	<div>
		                </div>
		                <a  className="btn btn-primary py-2">Read More</a>
		              </div>
		            </div>
		          </div>
      </div>
      </div>
      </div>
      </section>
    
    </div>
  );
};

export default ProjectSum;
