import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { useSelector } from "react-redux";

const Home = () => {
  const projects = useSelector((state) => state.project.projects);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <ProjectList projects={projects} />
          </div>
          <div className="col-sm-12 col-md-4">
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
