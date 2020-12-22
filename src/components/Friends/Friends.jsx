import React from 'react';
import FriendsItem from './FriendsItem';

function Friends({ friends }) {
  return (
    <div className="friends">
      <div className="friends__item">
        <FriendsItem friends={friends} />
      </div>
    </div>
  );
}

export default Friends;
