import React from 'react';
import { reduxForm } from 'redux-form';
import PostForm from './PostForm';

function PostAdd({ addPost }) {
  const onSubmit = (values) => {
    addPost(values.newPost);
  };

  const PostAddForm = reduxForm({ form: 'newPost' })(PostForm);

  return (
    <div className="add">
      <h4 className="title">My posts</h4>
      <PostAddForm onSubmit={onSubmit} />
    </div>
  );
}

export default PostAdd;
