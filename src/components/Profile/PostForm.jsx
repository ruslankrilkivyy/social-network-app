import React from 'react';
import { Field } from 'redux-form';

import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Element } from '../FormsControls/FormsControls';

const maxLength = maxLengthCreator(10);
const Textarea = Element('textarea');

const PostForm = ({ handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field
        validate={[required, maxLength]}
        name="newPost"
        component={Textarea}
        type="text"
        placeholder="Your news"
      />
      <button className="btn-send">ADD POST</button>
    </form>
  );
};

export default PostForm;
