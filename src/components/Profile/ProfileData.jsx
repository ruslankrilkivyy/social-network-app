import React from 'react';
import ProfileStatus from './ProfileStatus';
import Preloader from '../Preloader/Preloader';
import ProfileContacts from './ProfileContacts';

const ProfileData = ({
  profile,
  isLoading,
  isOwner,
  updateStatus,
  status,
  onSelectProfilePhoto,
}) => {
  return (
    <>
      <h4 className="profile-name">{profile.fullName}</h4>
      {isLoading ? (
        <Preloader />
      ) : (
        <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus} />
      )}
      <div className="profile__info-item">Looking job: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
      {profile.lookingForAJob && (
        <div className="profile__info-item">Description: {profile.lookingForAJobDescription}</div>
      )}
      <div className="profile__info-item">About me: {profile.aboutMe}</div>
      {Object.keys(profile.contacts).map((key) => {
        return <ProfileContacts key={key} title={key} value={profile.contacts[key]} />;
      })}
      {isOwner && <input type="file" onChange={(e) => onSelectProfilePhoto(e)} />}
    </>
  );
};

export default ProfileData;
