import ApiClient from '../services/ApiClient';
import jwtDecode from 'jwt-decode';

export const beginUserLogin = (user) => {
  return (dispatch) => {
    return ApiClient.login(user).then((data) => {
      console.log('this is what we got back from server');
      console.log(data);
      if (data.message) {
        console.log('message returned', data.message);
        // handle invalid login credentials
        return {
          loggedIn: false,
          message: data.message,
        };
      } else {
        console.log('beginUserLogin user.js -', data);
        localStorage.setItem('jwtToken', data.jwt);
        dispatch(loginUser(data.user));
        return {
          loggedIn: true,
        };
      }
    });
  };
};

export const beginRegister = (user) => {
  return (dispatch) => {
    return ApiClient.register(user).then((data) => {
      if (data.message) {
        // handle invalid registration credentials
        return {
          loggedIn: false,
          message: data.message,
          param: data.param,
        };
      } else {
        console.log('response', data);
        localStorage.setItem('jwtToken', data.jwt);
        dispatch(loginUser(data.user));
        return {
          loggedIn: true,
        };
      }
    });
  };
};

export function beginLogout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    //  maybe add a global api header removal here - setAuthorizationToken(false);
    dispatch(logoutUser());
  };
}

export const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  user,
});

export const setUserBookings = (bookings) => ({
  type: 'SET_USER_BOOKINGS',
  bookings,
});

export const beginSocialLogin = (token) => {
  //  return (dispatch) => {
  console.log('begin Social login user.js -');
  localStorage.setItem('jwtToken', token);
  console.log('this is what we are adding as user');
  console.log(jwtDecode(token));
  let decoded = jwtDecode(token);
  // dispatch(loginUser(decoded));
  // };
};

export const decodeToken = (token) => jwtDecode(token);
