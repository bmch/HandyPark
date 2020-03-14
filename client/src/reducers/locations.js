import {
  SET_PARKING_LOCATIONS,
  REQUEST_QUOTES,
  RECEIVE_QUOTES
} from '../actions/parkingLocations';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  locations: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PARKING_LOCATIONS:
      console.log('this is action', action);
      return {
        isFetching: false,
        didInvalidate: false,
        locations: [...action.locations]
      };
    case REQUEST_QUOTES:
      console.log('this is action', action);
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_QUOTES:
      return {
        isFetching: false,
        didInvalidate: false,
        locations: [...action.locations]
      };
    default:
      return state;
  }
}
