import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import locationsReducer from '../reducers/locations';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      locations: locationsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
