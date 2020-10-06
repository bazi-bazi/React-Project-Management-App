import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

const Main = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-8">
            <ProjectList />{" "}
          </div>
          <div class="col-sm-12 col-md-4">
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
