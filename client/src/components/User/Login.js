// Helper styles for demo
import './helper.css';
import { DisplayFormikState } from './helper';
import { beginUserLogin } from '../../actions/user';
import { connect } from 'react-redux';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ beginUserLogin2 }) => {
  return (
    <div className="app">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { props, setSubmitting }) => {
          beginUserLogin2(values);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Required'),
          password: Yup.string()
            .min(5)
            .required()
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
  beginUserLogin2: params => dispatch(beginUserLogin(params))
});
const Login = connect(null, mapDispatchToProps)(LoginForm);

export default Login;
