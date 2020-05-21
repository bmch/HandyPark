import React, { useEffect } from 'react';
import { setCurrentUser, setUserBookings } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';
import ApiClient from '../../services/ApiClient';
import { beginLogout } from '../../actions/user';

export default () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => {
    return state.user.isAuthenticated;
  });
  const currentUser = useSelector((state) => state.user.currentUser);
  const bookings = useSelector((state) => state.user.bookings);
  console.log('we are on account');
  console.log('is auth is ', isAuth);
  // useEffect(() => {
  //   ApiClient.fetchAccount(localStorage.getItem('jwtToken'))
  //     .then((res) => (res.status < 400 ? res : Promise.reject(res)))
  //     .then((res) => res.json())
  //     .then((res) => dispatch(setCurrentUser(res)))
  //     .catch((err) => dispatch(beginLogout()));
  // }, []);

  useEffect(() => {
    ApiClient.fetchBookings(localStorage.getItem('jwtToken'))
      .then((res) => (res.status < 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .then((res) => {
        console.log('inside account component');
        console.log('we are setting user bookings as the server response');
        console.log('server response was', res);
        dispatch(setUserBookings(res));
      })
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
            {bookings.length &&
              bookings.map((item) => (
                <div key={item._id}>
                  <div>{item._id}</div>
                  <div>{item.createdAt}</div>
                  <div>{new Date(item.createdAt).toUTCString()}</div>

                  <div>location id data</div>
                  <div>{item.start_time}</div>
                  <div>{new Date(item.start_time).toUTCString()}</div>
                  <div>{item.end_time}</div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
