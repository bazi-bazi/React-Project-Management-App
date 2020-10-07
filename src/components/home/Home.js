import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <ProjectList />{" "}
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
