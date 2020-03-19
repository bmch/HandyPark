// Helper styles for demo
import './helper.css';
import { DisplayFormikState } from './helper';
import { beginRegister } from '../../actions/user';
import { connect } from 'react-redux';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = ({ beginRegister }) => {
  return (
    <div className="app">
      <Formik
        initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
        onSubmit={(values, { props, setSubmitting }) => {
          beginRegister(values);
          setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Required'),
          password: Yup.string()
            .min(5)
            .required(),
          firstName: Yup.string().required(),
          lastName: Yup.string().required()
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: 'block' }}>
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="password" style={{ display: 'block' }}>
                Password
              </label>
              <input
                id="password"
                placeholder="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}

              <label htmlFor="firstName" style={{ display: 'block' }}>
                First Name
              </label>
              <input
                id="firstName"
                placeholder="First Name"
                type="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {errors.firstName && touched.firstName && (
                <div className="input-feedback">{errors.firstName}</div>
              )}

              <label htmlFor="lastName" style={{ display: 'block' }}>
                Surname
              </label>
              <input
                id="lastName"
                placeholder="Last Name"
                type="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {errors.lastName && touched.lastName && (
                <div className="input-feedback">{errors.lastName}</div>
              )}

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

              <DisplayFormikState {...props} />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  beginRegister: params => dispatch(beginRegister(params))
});
const Register = connect(null, mapDispatchToProps)(RegisterForm);

export default Register;
