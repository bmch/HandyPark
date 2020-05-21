import React from 'react';
import '../User/helper.scss';
import { useSelector } from 'react-redux';
import './Checkout.scss';
import BookingSummary from './BookingSummary';
import CheckoutOptions from './CheckoutOptions';
import ConfirmDetails from './ConfirmDetails';

const Checkout = (props) => {
  const query = new URLSearchParams(location.search);
  const id = props.match.params.id;
  const startDate = new Date(query.get('starts'));
  const endDate = new Date(query.get('ends'));
  const checkoutState = props.location.state;
  const isAuth = useSelector((state) => {
    return state.user.isAuthenticated;
  });
  const loco = { ...props.location };
  return (
    <div className="checkout-container">
      <BookingSummary
        checkoutState={checkoutState}
        startDate={startDate}
        endDate={endDate}
        id={id}
      />
      {!isAuth && <CheckoutOptions loco={loco} />}
      {isAuth && <ConfirmDetails />}
    </div>
  );
};
export default Checkout;
