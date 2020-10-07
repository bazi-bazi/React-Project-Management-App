import React from "react";
import { BrowserRouter as Rout, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import "./app.css";
import Home from "./components/home/Home";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return (
    <Rout>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </Rout>
  );
}

export default App;
