import ApiClient from '../services/ApiClient';

export const beginUserLogin = user => {
  return dispatch => {
    return ApiClient.login(user).then(data => {
      if (data.message) {
        console.log('message returned', data.message);
        // handle invalid login credentials
        return {
          loggedIn: false,
          message: data.message
        };
      } else {
        console.log('response', data);
        localStorage.setItem('token', data.jwt);
        dispatch(loginUser(data.user));
        return {
          loggedIn: true
        };
      }
    });
  };
};

export const beginRegister = user => {
  return dispatch => {
    return ApiClient.register(user).then(data => {
      if (data.message) {
        // handle invalid registration credentials
        return {
          loggedIn: false,
          message: data.message,
          param: data.param
        };
      } else {
        console.log('response', data);
        localStorage.setItem('token', data.jwt);
        dispatch(loginUser(data.user));
        return {
          loggedIn: true
        };
      }
    });
  };
};

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
});
