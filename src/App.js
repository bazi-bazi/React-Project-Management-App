import React from "react";
import { BrowserRouter as Rout, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import "./app.css";
import Main from "./components/home/Home";

function App() {
  return (
    <Rout>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Rout>
  );
}

export default App;
