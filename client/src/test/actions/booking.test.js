import {
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  bookingRequest,
  bookingSuccess
} from '../../actions/booking';

test('bookingRequest should return an object', () => {
  const booking = { test: '123abc' };
  expect(bookingRequest(booking)).toEqual({
    type: BOOKING_REQUEST,
    booking
  });
});

test('bookingSuccess should return an object', () => {
  expect(bookingSuccess()).toEqual({
    type: BOOKING_SUCCESS
  });
});
