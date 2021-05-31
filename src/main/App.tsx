import React from "react";

import "./App.css";
import Menu from "../template/menu";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Menu />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
