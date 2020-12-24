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

const totalUsersCountSelector = (state) => {
  return state.usersReducer.totalUsersCount;
};

export const totalUsersCount = createSelector(totalUsersCountSelector, (totalUsersCount) => {
  return totalUsersCount;
});

const currentPageSelector = (state) => {
  return state.usersReducer.currentPage;
};

export const currentPage = createSelector(currentPageSelector, (currentPage) => {
  return currentPage;
});

const isLoadingSelector = (state) => {
  return state.usersReducer.isLoading;
};

export const isLoading = createSelector(isLoadingSelector, (isLoading) => {
  return isLoading;
});

const followingInProggressSelector = (state) => {
  return state.usersReducer.followingInProggress;
};

export const followingInProggress = createSelector(
  followingInProggressSelector,
  (followingInProggress) => {
    return followingInProggress;
  },
);
