import './App.css';
import React, { Fragment } from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import AboutPage from './Components/AboutPage/AboutPage';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/About" exact component={AboutPage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
