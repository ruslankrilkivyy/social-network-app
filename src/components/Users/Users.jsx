import React from 'react';

import Paginator from '../Paginator/Paginator';
import User from './User';

function Users({
  users,
  currentPage,
  totalUsersCount,
  pageSize,
  onChangedPage,
  follow,
  unfollow,
  followingInProggress,
}) {
  return (
    <div className="users">
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onChangedPage={onChangedPage}
        currentPage={currentPage}
      />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          userId={user.id}
          followingInProggress={followingInProggress}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </div>
  );
}

export default Users;
