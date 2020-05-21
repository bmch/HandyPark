import ApiClient from '../services/ApiClient';

export const startAddBooking = (bookingData, jwt) => (dispatch) => {
  dispatch(bookingRequest(bookingData));
  return ApiClient.postBooking(bookingData, jwt)
    .then((res) => (res.status < 400 ? res : console.log(res)))
    .then((res) => {
      dispatch(bookingSuccess());
      return res.json();
    });
};

export const BOOKING_REQUEST = 'BOOKING_REQUEST';
export const bookingRequest = (booking) => ({
  type: BOOKING_REQUEST,
  booking,
});

export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';
export const bookingSuccess = () => ({
  type: BOOKING_SUCCESS,
});
