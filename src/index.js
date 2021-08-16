import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar'

const Banner = () => {
  return (
  <div>
    <h1>This is a website banner</h1>
  </div>
  )
}
 
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route path="/" component={Banner} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
