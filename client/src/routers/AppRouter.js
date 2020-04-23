import React from 'react';
import { Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';

import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/User/Login';
import Register from '../components/User/Register';
import Header from '../components/Header';
import '../index.scss';
import '../components/Dashboard/Dashboard.scss';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Account from '../components/User/Account';
import { PassportSuccess } from '../components/User/PassportSuccess';
//const defaultPath = process.env.REACT_APP_BASE_PATH;

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      {/* <Route exact path={defaultPath} component={Dashboard} /> */}
      <PublicRoute path="/" component={Dashboard} exact={true} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/loginSuccess" component={PassportSuccess} />
      <PublicRoute path="/signup" component={Register} />
      <PrivateRoute path="/account" component={Account} />
    </Switch>
  </BrowserRouter>
);

export { AppRouter as default };
