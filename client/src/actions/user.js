import ApiClient from '../services/ApiClient';

export const beginUserLogin = user => {
  return dispatch => {
    return ApiClient.login().then(data => {
      if (data.message) {
        console.log('message returned', data.message);
      } else {
        localStorage.setItem('token', data.jwt);
        dispatch(loginUser(data.user));
      }
    });
  };
};

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
});
