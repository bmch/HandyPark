import React, { useEffect, useState } from 'react';
import { beginLogout, setCurrentUser } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';
import ApiClient from '../../services/ApiClient';
import { useHistory } from 'react-router-dom';

export default ({ location }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [queryParam, setQueryParam] = useState(null);
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    ApiClient.fetchAccount(query.get('token'))
      .then((res) => (res.status < 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .then((res) => dispatch(setCurrentUser(res)))
      .catch((err) => dispatch(beginLogout()));
    setQueryParam(query.get('token'));
  }, []);

  useEffect(() => {
    if (queryParam && isAuth) {
      localStorage.setItem('jwtToken', queryParam);
      let redirecturl = localStorage.getItem('redirectUrl');
      let fromLocation = JSON.parse(redirecturl);
      const { pathname, search, state, key } = fromLocation;
      if (pathname.includes('checkout')) {
        history.push({
          pathname,
          search,
          state,
        });
      } else {
        history.push('/account');
      }
    }
  }, [queryParam, isAuth]);

  return <h1>Verifying Stuff and Loading ...</h1>;
};
