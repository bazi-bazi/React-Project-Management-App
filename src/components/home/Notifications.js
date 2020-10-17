import React from "react";
import { Link } from "react-router-dom";
import "../../app.css";
import "../../animation.css";
import "../../bootstrap-datepicker.css";
import "../../bootstrap.min.css";
import "../../aos.css";
import "../../owl.theme.default.min.css";
import "../../custome.css";

const Notifications = ({project}) => {

  return (
    <div className="container pt-5 pb-5 mt-5 p-5">
     <div className=" sidebar">
     <div className="sidebar-box">
              <div className="categories">
                <h3 className="heading-3">Latest Posts</h3>
                { project && project.map(projects => {
             return (
             <Link to={'/project/' + projects.id} key={projects.id}>
            <li ><a href="#" className="paddingli"> {projects.title} </a></li>
             </Link>
            )
             })}    
              </div>
            </div>
       
          </div>
          <div class="top-category text-center active">
    								<h3><a href="#">Number of Posts</a></h3>
    								<span className="icon flaticon-mortarboard"></span>
    								<p><span className="number numberText"> {project.length} </span></p>
    							</div>
    </div>
  );
};

export default Notifications;


