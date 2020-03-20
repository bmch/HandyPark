import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => !!state.user.currentUser.id);

  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
