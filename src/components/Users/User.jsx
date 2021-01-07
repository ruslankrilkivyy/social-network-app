import React from 'react';
import { Link } from 'react-router-dom';

import userPhoto from '../../images/default_profile_bigger.png';
import Button from '../Button';

const User = ({ user, userId, followingInProggress, unfollow, follow }) => {
  console.log(user);
  return (
    <div key={userId} className="users-item">
      <div className="users-item__main">
        <Link to={'/profile/' + userId}>
          <img src={user.photos.small != null ? user.photos.large : userPhoto} alt="avatar" />
        </Link>
        {user.followed ? (
          <Button
            className="button--follow"
            disabled={followingInProggress.some((id) => id === userId)}
            onClick={() => {
              unfollow(userId);
            }}>
            Unfollow
          </Button>
        ) : (
          <Button
            className="button--follow"
            disabled={followingInProggress.some((id) => id === userId)}
            onClick={() => {
              follow(userId);
            }}>
            Follow
          </Button>
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
