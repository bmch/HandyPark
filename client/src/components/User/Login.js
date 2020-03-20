import './helper.css';
import { DisplayFormikState } from './helper';
import { beginUserLogin } from '../../actions/user';
import { connect } from 'react-redux';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ beginLogin }) => {
  const history = useHistory();

  return (
    <div className="app">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (
          values,
          { props, setSubmitting, setErrors, resetForm }
        ) => {
          const response = await beginLogin(values);
          if (!response.loggedIn) {
            setErrors({ response: response.message });
          } else {
            resetForm();
            setSubmitting(false);
            history.push('/');
          }
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Required'),
          password: Yup.string().required()
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
              {errors.response && (
                <div className="input-feedback">{errors.response}</div>
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
  beginLogin: params => dispatch(beginUserLogin(params))
});
const Login = connect(null, mapDispatchToProps)(LoginForm);

export default Login;
