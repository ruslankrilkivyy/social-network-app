import React from 'react';
// import { Field } from 'redux-form';

import { required, maxLengthCreator } from '../../utils/validators/validators';
import { createField, Input } from '../FormsControls/FormsControls';

const maxLength = maxLengthCreator(50);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required, maxLength], Input)}
      {createField('Password', 'password', [required], Input, { type: 'password' })}
      {createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
      {error && <div className="form__login-error">Password or Email is wrong</div>}
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl && createField(null, 'captcha', [required], Input)}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
