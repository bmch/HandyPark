import './helper.scss';
import React from 'react';
import RegisterFormikForm from './RegisterFormikForm';
export default () => {
  return (
    <div className="formik-app">
      <h2 className="form-heading">Create your account</h2>
      <RegisterFormikForm />
    </div>
  );
};
