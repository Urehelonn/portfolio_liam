import React from 'react';

import './App.scss';
import Header from './components/header/header.component';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/project">
          <Project />
        </Route> */}
        </Switch>
      </div >
    </Router>
  );
}

export default App;
