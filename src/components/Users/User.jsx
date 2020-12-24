import React from 'react';
import { Link } from 'react-router-dom';

import userPhoto from '../../images/user.png';

const User = ({ user, userId, followingInProggress, unfollow, follow }) => {
  return (
    <div key={userId} className="users-item">
      <div className="users-item__main">
        <Link to={'/profile/' + userId}>
          <img src={user.photos.small != null ? user.photos.large : userPhoto} alt="avatar" />
        </Link>
        {user.followed ? (
          <button
            disabled={followingInProggress.some((id) => id === userId)}
            onClick={() => {
              unfollow(userId);
            }}>
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProggress.some((id) => id === userId)}
            onClick={() => {
              follow(userId);
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
};

export default User;
