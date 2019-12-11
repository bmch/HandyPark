import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

// examples:
import Home from './Home';
import Main from './main/Main';
import LocationForm from './components/LocationForm';
import Dashboard from './components/Dashboard';

// styles
import './index.css';

// components
import App from './App';

const defaultPath = process.env.REACT_APP_BASE_PATH;

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path={defaultPath} component={Home} />
        <Route path={`${defaultPath}default`} component={Main} />

        <Route path={`${defaultPath}dashboard`} component={Dashboard} />
        <Redirect exact from="*" to={defaultPath} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
