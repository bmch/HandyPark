import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';

const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const Login = lazy(() => import('../components/User/Login'));
const Register = lazy(() => import('../components/User/Register'));
const Account = lazy(() => import('../components/User/Account'));
const PassportSuccess = lazy(() =>
  import('../components/User/PassportSuccess')
);
//const Checkout = lazy(() => import('../components/Booking/Checkout'));
import Checkout from '../components/Booking/Checkout';
import Header from '../components/Header';
import '../index.scss';
import '../components/Dashboard/Dashboard.scss';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import BookingConfirmationStatus from '../components/Booking/BookingConfirmationStatus';

//const defaultPath = process.env.REACT_APP_BASE_PATH;

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute path="/" component={Dashboard} exact={true} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/loginSuccess" component={PassportSuccess} />
        <PublicRoute path="/signup" component={Register} />
        <PublicRoute path="/checkout/:id" component={Checkout} />
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute
          path="/BookingConfirmationStatus"
          component={BookingConfirmationStatus}
        />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export { AppRouter as default };
