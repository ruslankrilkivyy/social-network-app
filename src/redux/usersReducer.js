import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_LOADING_USERS = 'IS_LOADING_USERS';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: true,
  followingInProggress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case IS_LOADING_USERS:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProggress: action.isLoading
          ? [...state.followingInProggress, action.userId]
          : state.followingInProggress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsLoading = (isLoading) => ({
  type: IS_LOADING_USERS,
  isLoading,
});
export const toggleFollowingInProggress = (isLoading, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  isLoading,
  userId,
});

const handleFollowUnfollow = async (dispatch, userId, APImethod, actionCreator) => {
  dispatch(toggleFollowingInProggress(true, userId));
  const data = await APImethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingInProggress(false, userId));
};

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsLoading(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    let APImethod = usersAPI.deleteFollows.bind(usersAPI);
    let actionCreator = unfollowSuccess;

    handleFollowUnfollow(dispatch, userId, APImethod, actionCreator);
  };
};

export const follow = (userId) => {
  return async (dispatch) => {
    let APImethod = usersAPI.postFollows.bind(usersAPI);
    let actionCreator = followSuccess;

    handleFollowUnfollow(dispatch, userId, APImethod, actionCreator);
  };
};

export default usersReducer;
