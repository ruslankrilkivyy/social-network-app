import React, { Fragment } from 'react';

function PostsNew({ posts }) {
  return (
    <Fragment>
      {posts.map((item) => (
        <div key={item.id} className="content__posts-new-item">
          <img src={item.avatar} alt="avatar" />
          <div className="content__posts-new-item__text">{item.post}</div>
        </div>
      ))}
    </Fragment>
  );
}

export default PostsNew;
