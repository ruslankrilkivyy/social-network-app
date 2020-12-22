import React from 'react';
import { Field } from 'redux-form';

import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Element } from '../FormsControls/FormsControls';

const maxLength = maxLengthCreator(50);
const Input = Element('input');

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder={'Email'}
          name={'email'}
          component={Input}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <Field
          type="password"
          placeholder={'Password'}
          name={'password'}
          component={Input}
          validate={[required, maxLength]}
        />
      </div>
      {error && <div className="form__login-error">Password or Email is wrong</div>}
      <div>
        <Field type="checkbox" name={'rememberMe'} component={Input} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
