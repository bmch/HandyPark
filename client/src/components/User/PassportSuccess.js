import React, { useEffect, useState } from 'react';
import { beginSocialLogin, loginUser, decodeToken } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';
import ApiClient from '../../services/ApiClient';
import { Redirect, useLocation, useHistory } from 'react-router-dom';

export default ({ location }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [queryParam, setQueryParam] = useState(null);
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    console.log('this is the location.search');
    console.log(location.search);
    console.log('result of query.get', query.get('token'));
    setQueryParam(query.get('token'));
  }, []);

  useEffect(() => {
    console.log('logging the queryParam (state) next', queryParam);
    //console.log(queryParam);
    if (queryParam) {
      localStorage.setItem('jwtToken', queryParam);
      const decoded = decodeToken(queryParam);
      console.log('about to dispatch login', decoded);
      dispatch(loginUser(decoded));
      let redirecturl = localStorage.getItem('redirectUrl');
      console.log('ok so the localstorage was', redirecturl);
      let fromLocation = JSON.parse(redirecturl);
      const { pathname, search, state, key } = fromLocation;
      console.log('location pathname is', pathname);
      console.log('location.search is', search);
      // console.log('location.state is ', state);
      // console.log('location key is', key);

      if (pathname.includes('checkout')) {
        console.log('history NOT pushing to acc, instead ', pathname);
        history.push({
          pathname,
          search,
          state,
        });
      } else {
        console.log('history is pushing to account');
        history.push('/account');
      }
    }
  }, [queryParam]);

  return <h1>Verifying Stuff and Loading ...</h1>;
};
