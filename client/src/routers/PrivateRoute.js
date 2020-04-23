import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { logoutUser } from '../actions/user';
import { useDispatch } from 'react-redux';

export const isTokenAlive = () => {
  const token = localStorage.getItem('jwtToken');
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    const tokenDate = new Date(0).setUTCSeconds(decoded.exp);
    return tokenDate.valueOf() > new Date().valueOf();
  } catch (err) {
    console.log(error);
    return false;
  }
};

export default ({ component: Component, ...rest }) => {
  // const dispatch = useDispatch();
  // const isAuthenticated = isTokenAlive();
  // if (!isAuthenticated) {
  //   dispatch(logoutUser());
  // }
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
