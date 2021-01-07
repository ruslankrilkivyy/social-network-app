import React from 'react';
import { Field } from 'redux-form';

import { required } from '../../utils/validators/validators';
import { createField, Textarea } from '../FormsControls/FormsControls';

const PostForm = ({ handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {createField('Your news', 'text', [required], Textarea)}
      <button className="btn-send">ADD POST</button>
    </form>
  );
};

export default PostForm;
