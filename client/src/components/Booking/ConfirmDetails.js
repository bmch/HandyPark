import React from 'react';
import { useSelector } from 'react-redux';

const ConfirmDetails = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="checkout-options">
      <div className="formik-app">
        <h2 className="form-heading">Personal Details</h2>

        <div>
          Name: {currentUser.firstName} {currentUser.lastName}
        </div>
        <div>Email: {currentUser.email}</div>
      </div>
    </div>
  );
};

export default ConfirmDetails;
