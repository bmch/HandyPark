import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Dashboard from '../components_refactor/Dashboard/Dashboard';

import '../index.css';

const defaultPath = process.env.REACT_APP_BASE_PATH;

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={defaultPath} component={Dashboard} />
      <Redirect exact from="*" to={defaultPath} />
    </Switch>
  </BrowserRouter>
);

export { AppRouter as default };
