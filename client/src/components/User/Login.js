import './helper.scss';
import { DisplayFormikState } from './helper';
import { beginUserLogin } from '../../actions/user';
import { connect } from 'react-redux';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './Login.scss';

const LoginForm = ({ beginLogin }) => {
  const history = useHistory();

  const handleGoogleLogin = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open(process.env.REACT_APP_BASE_URL + 'auth/', '_self');
  };

  return (
    <div className="formik-app">
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
          email: Yup.string().email().required('Required'),
          password: Yup.string().required(),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
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

              {/* <DisplayFormikState {...props} /> */}
            </form>
          );
        }}
      </Formik>

      <a onClick={handleGoogleLogin} className="login-button">
        <div>
          <span className="svgIcon t-popup-svg">
            <svg
              className="svgIcon-use"
              width="25"
              height="37"
              viewBox="0 0 25 25"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                  fill="#4285F4"
                />
                <path
                  d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                  fill="#34A853"
                />
                <path
                  d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                  fill="#EA4335"
                />
              </g>
            </svg>
          </span>
          <span className="button-label">Sign in with Google</span>
        </div>
      </a>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  beginLogin: (params) => dispatch(beginUserLogin(params)),
});
const Login = connect(null, mapDispatchToProps)(LoginForm);

export default Login;
