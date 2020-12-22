import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    {
      id: 1,
      avatar:
        'https://www.businessinsider.in/photo/77513577/Why-its-so-worrying-that-the-original-Avatar-The-Last-Airbender-creators-are-no-longer-in-charge-of-Netflixs-live-action-show.jpg?imgsize=55133',
      post: 'Hey, how are you?',
    },
    {
      id: 2,
      avatar: 'https://i.insider.com/5c8045a4d2ce7802a110ce7b?width=750&format=jpeg&auto=webp',
      post: 'Do you like games?',
    },
    {
      id: 3,
      avatar:
        'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      post: 'I know React Js',
    },
  ],
  // newPostText: [],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        avatar:
          'https://www.businessinsider.in/photo/77513577/Why-its-so-worrying-that-the-original-Avatar-The-Last-Airbender-creators-are-no-longer-in-charge-of-Netflixs-live-action-show.jpg?imgsize=55133',
        post: action.text,
      };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case UPDATE_POST: {
      return { ...state, newPostText: action.newPostBody };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostAction = (text) => ({ type: ADD_POST, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfileUser = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
