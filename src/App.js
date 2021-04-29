import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Home from './pages/Home'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/documentation" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;