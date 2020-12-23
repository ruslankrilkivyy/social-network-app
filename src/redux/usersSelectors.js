import { createSelector } from 'reselect';

const getUsersSelector = (state) => {
  return state.usersReducer.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});

const getPageSizeSelector = (state) => {
  return state.usersReducer.pageSize;
};

export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => {
  return pageSize;
});

export const totalUsersCount = (state) => {
  return state.usersReducer.totalUsersCount;
};

export const currentPage = (state) => {
  return state.usersReducer.currentPage;
};

export const isLoading = (state) => {
  return state.usersReducer.isLoading;
};

export const followingInProggress = (state) => {
  return state.usersReducer.followingInProggress;
};
