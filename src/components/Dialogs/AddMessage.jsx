import React from 'react';
import { reduxForm } from 'redux-form';

import DialogForm from './DialogForm';

const AddMessageForm = reduxForm({ form: 'message' })(DialogForm);

function AddMessage({ addMessage }) {
  const onSubmit = (values) => {
    addMessage(values.message);
  };

  return (
    <div className="add">
      <AddMessageForm onSubmit={onSubmit} />
    </div>
  );
}

export default AddMessage;
