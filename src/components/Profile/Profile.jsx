import React from 'react';
import PostsContainer from './PostsContainer';
import Preloader from '../Preloader/Preloader';
import { Redirect } from 'react-router-dom';
import userPng from '../../images/default_profile_bigger.png';
import ProfileInfo from './ProfileInfo';

function Profile({
  profile,
  isAuth,
  status,
  updateStatus,
  isLoading,
  isOwner,
  onSavePhoto,
  updateProfileInfo,
}) {
  if (!profile) {
    return <Preloader />;
  }

  if (!isAuth) return <Redirect to="/login" />;

  return (
    <div className="profile">
      <div className="profile__box">
        <img
          className="profile-avatar"
          src={profile.photos.large || profile.photos.small || userPng}
          alt="avatar"
        />
        <ProfileInfo
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          isLoading={isLoading}
          isOwner={isOwner}
          onSavePhoto={onSavePhoto}
          updateProfileInfo={updateProfileInfo}
        />
      </div>
      <PostsContainer />
    </div>
  );
}

export default Profile;
