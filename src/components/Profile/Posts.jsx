import React from 'react';

import PostAdd from './PostAdd';
import PostsNew from './PostsNew';

function Posts({ posts, addPost }) {
  return (
    <div className="content__posts">
      <PostAdd addPost={addPost} />
      <div className="content__posts-new">
        <PostsNew posts={posts} />
      </div>
    </div>
  );
}

export default Posts;
