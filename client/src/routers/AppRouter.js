import React from 'react';
import { Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';

import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/User/Login';
import Register from '../components/User/Register';
import Logo from '../assets/graphics/handyparklogo@2x.png';
import '../index.scss';

const defaultPath = process.env.REACT_APP_BASE_PATH;

const AppRouter = () => (
  <BrowserRouter>
    <div className="top">
      <div>
        <Link to="/">
          <img className="logo" src={Logo} alt="Handy Park Logo" />
        </Link>
      </div>
      <div className="top-links">
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
    <Switch>
      <Route exact path={defaultPath} component={Dashboard} />
      <Route path="/" component={Dashboard} exact={true} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} />
    </Switch>
  </BrowserRouter>
);

export { AppRouter as default };
