import React from "react";
import { BrowserRouter as Rout } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import "./app.css";

function App() {
  return (
    <Rout>
      <div className="App">
        <Navigation />
      </div>
    </Rout>
  );
}

export default App;
