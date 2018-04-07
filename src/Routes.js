import React from 'react';
import App from './App'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Home from "./Home";

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/:retroBoard" component={App}/>
        </div>
    </Router>
);

export default Routes;
