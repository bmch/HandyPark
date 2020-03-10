import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/store';

const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDom.render(<Root store={store} />, document.getElementById('root'));
