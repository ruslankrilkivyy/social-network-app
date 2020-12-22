export const getUsers = (state) => {
  return state.usersReducer.users;
};

export const getPageSize = (state) => {
  return state.usersReducer.pageSize;
};

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
