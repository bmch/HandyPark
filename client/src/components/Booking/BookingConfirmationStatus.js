import React from 'react';

const BookingConfirmationStatus = (props) => {
  const booking = props.location.state;
  return (
    <div>
      <div>Price {booking.price}</div>
      <div>start: {booking.start_time}</div>
      <div>end:: {booking.end_time}</div>
    </div>
  );
};

export default BookingConfirmationStatus;
