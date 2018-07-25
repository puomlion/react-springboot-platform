import React, { Component } from 'react';
import Login from './Login';
import Admin from './views/Admin/Admin';
import {Route , Switch, Redirect} from 'react-router-dom'



class Router extends Component {

    render() {

      
      return (
        <div>
            <Switch>
                <Route path = "/admin" component = {Admin} />
                <Redirect from = "/" to = "/admin" />
            </Switch>
        </div>
      );
    }
  }
  
export default Router;