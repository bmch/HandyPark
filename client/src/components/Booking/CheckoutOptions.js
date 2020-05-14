import React from 'react';
import { handleGoogleLogin } from '../../utils/social.helper';

const CheckoutOptions = ({ loco }) => {
  console.log('loco inside checkout options', loco);

  return (
    <div className="checkout-options">
      <div className="formik-app">
        <h2 className="form-heading">Personal Details</h2>
        <button
          className="social-btn"
          onClick={() => {
            console.log('add details');
          }}
        >
          <span className="apple-span-icon"></span>
          <span
            style={{
              fontSize: '0.9rem',
              color: '#3e3e3e',
              fontFamily: 'Nunito,Avenir,sans-serif',
            }}
          >
            Continue with <strong>Apple</strong>
          </span>
        </button>

        <button
          className="social-btn"
          onClick={() => {
            console.log('add details');
          }}
        >
          <span className="facebook-span-icon"></span>
          <span
            style={{
              fontSize: '0.9rem',
              color: '#3e3e3e',
              fontFamily: 'Nunito,Avenir,sans-serif',
            }}
          >
            Continue with <strong>Facebook</strong>
          </span>
        </button>

        <button
          className="social-btn"
          onClick={() => {
            console.log('loco is ', loco);
            handleGoogleLogin(loco);
          }}
        >
          <span className="google-span-icon"></span>
          <span
            style={{
              fontSize: '0.9rem',
              color: '#3e3e3e',
              fontFamily: 'Nunito,Avenir,sans-serif',
            }}
          >
            Continue with <strong>Google</strong>
          </span>
        </button>
        <h2 className="horizontal-rule">
          <span>or</span>
        </h2>
        <button
          className="social-btn"
          onClick={() => {
            console.log('add details');
          }}
        >
          <span
            style={{
              fontSize: '0.9rem',
              color: '#3e3e3e',
              fontFamily: 'Nunito,Avenir,sans-serif',
            }}
          >
            Enter details manually
          </span>
        </button>
      </div>
    </div>
  );
};

export default CheckoutOptions;
