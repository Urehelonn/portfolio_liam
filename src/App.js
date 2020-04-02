import React from 'react';

import './App.scss';
import Header from './components/header/header.component';
import {
  Switch,
  Route
} from "react-router-dom";

import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Project from './pages/project/project.component';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"
            component={Homepage}
          />
          <Route exact path="/about"
            component={About}
          />
          <Route path="/project/:projectID" component={Project}>
          </Route>
        </Switch>
      </div >
    );
  };
}

// export default App;
