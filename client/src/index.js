import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/store';
import { setCurrentUser } from './actions/user';
import jwtDecode from 'jwt-decode';

const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

if (localStorage.jwtToken) {
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

ReactDom.render(<Root store={store} />, document.getElementById('root'));
