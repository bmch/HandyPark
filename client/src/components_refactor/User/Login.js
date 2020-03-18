import React from 'react';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import ApiClient from '../../services/ApiClient';
import * as yup from 'yup';

export const Login = () => {
  return (
    <Form>
      <Field type="text" name="email" placeholder="email" />
      <ErrorMessage name="email" />
      <Field type="password" name="password" placeholder="password" />
      <ErrorMessage name="password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(5)
    // .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
    .required()
});

export default withFormik({
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    ApiClient.login({ email: values.email, password: values.password });
  },
  validationSchema: LoginValidation
})(Login);
