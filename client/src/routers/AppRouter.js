import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/User/Login';

import '../index.scss';

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
