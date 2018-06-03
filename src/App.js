import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './views/Home.js'
import List from './views/List.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/list" component={List}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
