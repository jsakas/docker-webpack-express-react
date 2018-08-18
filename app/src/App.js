import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './routes';
import { hot } from 'react-hot-loader';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        {
          Routes.map((route) => {
            return (
              <Route
                exact
                key={route.route}
                path={route.route}
                component={route.Component}
              />
            );
          })
        }
      </Switch>
    );
  }
}

export default hot(module)(App);
