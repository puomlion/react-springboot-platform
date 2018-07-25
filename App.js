import React, { Component } from 'react';

import Router from './Router';
import './assets/stylesheets/css/style.css';
import './assets/stylesheets/css/lib/bootstrap/bootstrap.min.css';
import {BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          
        <Router />
              
      </BrowserRouter>
    );
  }
}

export default App;
