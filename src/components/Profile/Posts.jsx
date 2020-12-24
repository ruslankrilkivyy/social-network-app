import React from 'react';

import PostAdd from './PostAdd';
import PostsNew from './PostsNew';

const Posts = React.memo(
  ({ posts, addPost }) => {
    return (
      <div className="content__posts">
        <PostAdd addPost={addPost} />
        <div className="content__posts-new">
          <PostsNew posts={posts} />
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps !== nextProps;
  },
);

export default Posts;
