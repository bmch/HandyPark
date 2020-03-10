import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

// examples:
// import Home from '../Home';
//import Main from './main/Main';
import LocationList from '../components_refactor/LocationList';
// import Dashboard from '../components/Dashboard';

// styles
import '../index.css';

// components
// import App from '../App';

const defaultPath = process.env.REACT_APP_BASE_PATH;

const AppRouter = () => (
  <BrowserRouter>
    {/* <App> */}
    <Switch>
      <Route exact path={defaultPath} component={LocationList} />
      {/* <Route path={`${defaultPath}default`} component={LocationList} /> */}

      {/* <Route path={`${defaultPath}dashboard`} component={Dashboard} /> */}
      <Redirect exact from="*" to={defaultPath} />
    </Switch>
    {/* </App> */}
  </BrowserRouter>
);

export { AppRouter as default };
