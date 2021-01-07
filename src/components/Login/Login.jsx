import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ login, isAuth, captcha }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <div>LOGIN</div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captcha} />
    </div>
  );
};

let mapStateToProps = (state) => ({
  captcha: state.authReducer.captcha,
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
