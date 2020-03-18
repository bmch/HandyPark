import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Dashboard from '../components_refactor/Dashboard/Dashboard';
import Login from '../components_refactor/User/Login';

import '../index.css';

const defaultPath = process.env.REACT_APP_BASE_PATH;

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={defaultPath} component={Dashboard} />
      <Route path="/" component={Dashboard} exact={true} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export { AppRouter as default };
