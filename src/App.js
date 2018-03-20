import React, { Component } from 'react';
import PanelContainer from "./components/layout/PanelContainer";
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from "./Home";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Route exact path="/" component={ Home } />
              <Route path="/:retroBoard" component={ PanelContainer } />
          </div>
        </Router>
    );
  }
}

export default App;
