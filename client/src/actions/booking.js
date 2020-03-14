import ApiClient from '../services/ApiClient';

export const startAddBooking = bookingData => dispatch => {
  dispatch(bookingRequest(bookingData));
  return ApiClient.postBooking(bookingData).then(data =>
    dispatch(bookingSuccess())
  );
};

export const BOOKING_REQUEST = 'BOOKING_REQUEST';
export const bookingRequest = booking => ({
  type: BOOKING_REQUEST,
  booking
});

export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';
export const bookingSuccess = () => ({
  type: BOOKING_SUCCESS
});
