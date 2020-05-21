import './helper.scss';
import { beginRegister } from '../../actions/user';
import { connect } from 'react-redux';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const handleGoogleLogin = () => {
  // Authenticate using via passport api in the backend
  window.open(process.env.REACT_APP_BASE_URL + 'auth/', '_self');
};

const RegisterForm = ({ beginRegister, redirectTo }) => {
  console.log('redirect to is ', redirectTo);
  const history = useHistory();
  return (
    <Formik
      initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
      onSubmit={async (
        values,
        { props, setSubmitting, setErrors, resetForm }
      ) => {
        const response = await beginRegister(values);
        if (!response.loggedIn) {
          setErrors({ [response.param]: response.message });
        } else {
          resetForm();
          setSubmitting(false);
          if (redirectTo) {
            const { pathname, search, state, key } = redirectTo;
            history.push({
              pathname,
              search,
              state,
            });
          } else {
            history.push('/');
          }
        }
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('Required'),
        password: Yup.string().min(5).required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
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
                errors.firstName && touched.firstName
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.firstName && touched.firstName && (
              <div className="input-feedback">{errors.firstName}</div>
            )}

            <label htmlFor="lastName" style={{ display: 'block' }}>
              Last Name
            </label>
            <input
              id="lastName"
              placeholder="Last Name"
              type="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.lastName && touched.lastName
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.lastName && touched.lastName && (
              <div className="input-feedback">{errors.lastName}</div>
            )}

            {errors.response && (
              <div className="input-feedback">{errors.response}</div>
            )}
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
              className="form-submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
            <button className="social-btn" onClick={handleGoogleLogin}>
              <span className="google-span-icon"></span>
              <span> Continue with Google</span>
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  beginRegister: (params) => dispatch(beginRegister(params)),
});
const Register = connect(null, mapDispatchToProps)(RegisterForm);

export default Register;
