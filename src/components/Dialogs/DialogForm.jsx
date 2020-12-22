import React from 'react';
import { Field } from 'redux-form';

const DialogForm = ({
  onGetMessageValue,
  onChangeMessageValue,
  messageValue,
  newMessages,
  handleSubmit,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field
        name="message"
        component="textarea"
        // onChange={onChangeMessageValue}
        // ref={messageValue}
        type="text"
        // value={newMessages}
        placeholder="Your message"
        required
      />
      <button className="btn-send" required>
        SEND
      </button>
    </form>
  );
};

export default DialogForm;
