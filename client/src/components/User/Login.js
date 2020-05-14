import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './helper.scss';
import { beginUserLogin } from '../../actions/user';
import { connect } from 'react-redux';
import { handleGoogleLogin } from '../../utils/social.helper';

const LoginForm = ({ beginLogin, location }) => {
  const history = useHistory();

  return (
    <div className="formik-app">
      <h2 className="form-heading">Log in</h2>
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
                type="submit"
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                Log in
              </button>
            </form>
          );
        }}
      </Formik>
      <button
        className="social-btn"
        onClick={() => handleGoogleLogin(location)}
      >
        <span className="google-span-icon"></span>
        <span> Continue with Google</span>
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  beginLogin: (params) => dispatch(beginUserLogin(params)),
});
const Login = connect(null, mapDispatchToProps)(LoginForm);

export default Login;
