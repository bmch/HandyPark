import React, { useEffect, useState } from 'react';
import { beginSocialLogin, loginUser, decodeToken } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';
import ApiClient from '../../services/ApiClient';
import { Redirect, useLocation, useHistory } from 'react-router-dom';

export const PassportSuccess = ({ location }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [queryParam, setQueryParam] = useState(null);
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setQueryParam(query.get('token'));
  }, []);

  useEffect(() => {
    if (queryParam) {
      localStorage.setItem('jwtToken', queryParam);
      const decoded = decodeToken(queryParam);
      dispatch(loginUser(decoded));
      history.push('/account');
    }
  }, [queryParam]);

  return <h1>Verifying Stuff and Loading ...</h1>;
};
