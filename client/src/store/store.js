import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import locationsReducer from '../reducers/locations';
import onMouseHoverReducer from '../reducers/onMouseHover';
import bookingReducer from '../reducers/booking';
import userReducer from '../reducers/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default initialState => {
  const store = createStore(
    combineReducers({
      locations: locationsReducer,
      hoverID: onMouseHoverReducer,
      booking: bookingReducer,
      user: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
