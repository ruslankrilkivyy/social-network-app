import React from 'react';
import { Link } from 'react-router-dom';
import userPhoto from '../../images/user.png';

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
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className="users">
      <div className="users__menu">
        {pages.map((page, index) => {
          return (
            <span
              key={index}
              onClick={() => onChangedPage(page)}
              className={currentPage === page ? 'users__menu-item active' : 'users__menu-item'}>
              {page}
            </span>
          );
        })}
      </div>
      {users.map((user) => {
        return (
          <div key={user.id} className="users-item">
            <div className="users-item__main">
              <Link to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.large : userPhoto} alt="avatar" />
              </Link>
              {user.followed ? (
                <button
                  disabled={followingInProggress.some((id) => id === user.id)}
                  onClick={() => {
                    unfollow(user.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followingInProggress.some((id) => id === user.id)}
                  onClick={() => {
                    follow(user.id);
                  }}>
                  Follow
                </button>
              )}
            </div>
            <div className="users-item__info">
              <div className="users-item__info-left">
                <div className="users-item-name">{user.name}</div>
                <div className="users-item-status">{user.status}</div>
              </div>
              <div className="users-item__info-right">
                <div className="users-item-country">{'user.location.country'},</div>
                <div className="users-item-city">{'user.location.city'}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
