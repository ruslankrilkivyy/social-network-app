import { connect } from 'react-redux';

import { addPostAction } from '../../redux/profileReducer';

import Posts from './Posts';

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostAction(text));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
