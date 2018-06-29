import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/home.js';
import Demo from './components/demo';
import Contact from './components/contact.js';

class App extends Component {
  render() {
    return (
      <Router>       
        <div>
          <component-header title="...logo..."></component-header>
          
          <hr />

          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>          
          </ul>
          
          <br />
    
          <hr />
    
          <Route exact path="/" component={Home} />
          <Route path="/demo" component={Demo} />
          <Route path="/contact" component={Contact} />

          <hr />
          <component-footer></component-footer>
      </div>
    </Router>
    );
  }
}

export default App;
