import React from 'react';
import { useSelector } from 'react-redux';
import { startAddBooking } from '../../actions/booking';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ConfirmDetails = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const bookingData = useSelector((state) => state.checkout.data);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDispatchBooking = () => {
    console.log('should start dispatching the start add booking');
    dispatch(
      startAddBooking(bookingData, localStorage.getItem('jwtToken'))
    ).then((response) => {
      console.log('in confirm details, res is', response);
      history.push({
        pathname: `/bookingConfirmationStatus`,
        state: { ...response },
      });
    });
  };

  return (
    <div className="checkout-options">
      <div className="formik-app">
        <h2 className="form-heading">Personal Details</h2>

        <div>
          Name: {currentUser.firstName} {currentUser.lastName}
        </div>
        <div>Email: {currentUser.email}</div>
      </div>
      <div className="formik-app">
        <h2 className="form-heading">Payment Information</h2>

        <button className="payment-button" onClick={handleDispatchBooking}>
          BOOK NOW AND RESERVE
        </button>
      </div>
    </div>
  );
};

export default ConfirmDetails;
