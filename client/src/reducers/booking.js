import { BOOKING_REQUEST, BOOKING_SUCCESS } from '../actions/booking';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  booking: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_REQUEST:
      return {
        isFetching: true,
        didInvalidate: false,
        booking: action.booking
      };
    case BOOKING_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
