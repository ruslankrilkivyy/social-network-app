import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const IS_LOADING = 'IS_LOADING';
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO';
const SEY_PROFILE_INFO = 'SEY_PROFILE_INFO';

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
  profile: null,
  status: null,
  isLoading: false,
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
    case IS_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    case SET_PROFILE_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SEY_PROFILE_INFO:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPostAction = (text) => ({ type: ADD_POST, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const isLoading = (isLoading) => ({ type: IS_LOADING, isLoading });
export const setProfilePhoto = (photos) => ({ type: SET_PROFILE_PHOTO, photos });
export const setProfileInfo = (profile) => ({ type: SEY_PROFILE_INFO, profile });

export const getProfileUser = (userId) => {
  return async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  };
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
    dispatch(isLoading(false));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = (photo) => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(photo);
    if (response.data.resultCode === 0) {
      dispatch(setProfilePhoto(response.data.data.photos));
    }
  };
};

export const updateProfileInfo = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().authReducer.userId;
    const response = await profileAPI.updateProfileInfo(profile);
    if (response.data.resultCode === 0) {
      dispatch(getProfileUser(userId));
    } else {
      let key = response.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
      dispatch(stopSubmit('edit-profile', { contacts: { [key]: response.data.messages[0] } }));
      return Promise.reject(response.data.messages[0]);
    }
  };
};

export default profileReducer;
