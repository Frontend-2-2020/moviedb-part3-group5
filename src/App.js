import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Page404 from "./pages/Page404";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/movie/:id" component={Detail}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/" component={Page404}></Route>
        </Switch>
      </Router>
    );
  }
}
