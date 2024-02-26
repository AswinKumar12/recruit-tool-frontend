import React, { Component } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory } from 'history';

function App() {
const history = createBrowserHistory();
  return (
      <Router history={history}>
        <Routes />
      </Router>
);
}

export default App;
