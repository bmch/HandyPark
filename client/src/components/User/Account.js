import React, { useEffect } from 'react';
import { setCurrentUser } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';
import ApiClient from '../../services/ApiClient';
import { beginLogout } from '../../actions/user';

export default () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => {
    return state.user.isAuthenticated;
  });
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    ApiClient.fetchAccount(localStorage.getItem('jwtToken'))
      .then((res) => (res.status < 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .then((res) => dispatch(setCurrentUser(res)))
      .catch((err) => dispatch(beginLogout()));
  }, []);

  return (
    <div>
      <div>
        {!isAuth ? (
          <React.Fragment>
            <h1>NOT Welcome! looks like you are unauthenticated, go!</h1>
            <h1>tHIS TEXT SHOULD NEVER BE SEEN????? i AM INVISIBLE</h1>
          </React.Fragment>
        ) : (
          <div>
            <h1>You have login succcessfully!</h1>
            <h2>Welcome {currentUser.firstName}!</h2>
          </div>
        )}
      </div>
    </div>
  );
};
