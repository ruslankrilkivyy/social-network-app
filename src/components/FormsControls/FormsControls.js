import React from 'react';
import { Field } from 'redux-form';

import './FormsControls.css';

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? 'formControl error' : 'formControl'}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}></textarea>
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
  <div>
    <Field
      name={name}
      placeholder={placeholder}
      validate={validators}
      component={component}
      {...props}
    />{' '}
    {text}
  </div>
);
