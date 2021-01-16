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

type PostsType = {
  id: number;
  avatar: string;
  post: string;
};

type ContactsType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};

type PhotosType = {
  small: string | null;
  large: string | null;
};

type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};

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
  ] as Array<PostsType> | null,
  profile: null as ProfileType | null,
  status: null,
  isLoading: false,
};

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {
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

export const addPostAction = (text: string) => ({ type: ADD_POST, text });
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status: string) => ({ type: SET_STATUS, status });
export const deletePost = (postId: number) => ({ type: DELETE_POST, postId });
export const isLoading = (isLoading: boolean) => ({ type: IS_LOADING, isLoading });
export const setProfilePhoto = (photos: string) => ({ type: SET_PROFILE_PHOTO, photos });
export const setProfileInfo = (profile: any) => ({ type: SEY_PROFILE_INFO, profile });

export const getProfileUser = (userId: number) => {
  return async (dispatch: any) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  };
};

export const getStatus = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(isLoading(true));
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
    dispatch(isLoading(false));
  };
};

export const updateStatus = (status: string) => {
  return async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = (photo: string) => {
  return async (dispatch: any) => {
    const response = await profileAPI.savePhoto(photo);
    if (response.data.resultCode === 0) {
      dispatch(setProfilePhoto(response.data.data.photos));
    }
  };
};

export const updateProfileInfo = (profile: any) => {
  return async (dispatch: any, getState: any) => {
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
