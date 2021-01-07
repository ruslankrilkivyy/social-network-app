import React from 'react';

const ProfileContacts = ({ title, value }) => {
  return (
    <div className="profile__info-contacts-item">
      <b>{title}</b>: {value}
    </div>
  );
};

export default ProfileContacts;
