import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";

import App from "../../../App";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/people">
        <People />
      </Route>
    </Router>
  );
};

export default ReactRouterSetup;
