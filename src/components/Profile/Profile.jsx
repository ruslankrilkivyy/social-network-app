import React from 'react';
import PostsContainer from './PostsContainer';
import Preloader from '../Preloader/Preloader';
import { Redirect } from 'react-router-dom';
import ProfileStatus from './ProfileStatus';

function Profile({ profile, isAuth, status, updateStatus, isLoading }) {
  if (!profile) {
    return <Preloader />;
  }

  if (!isAuth) return <Redirect to="/login" />;

  return (
    <div className="profile">
      <div className="profile__box">
        <img
          className="profile-avatar"
          src={profile.photos.large || profile.photos.small}
          alt="avatar"
        />
        <div className="profile__info">
          <h4 className="profile-name">{profile.fullName}</h4>
          {isLoading ? (
            <Preloader />
          ) : (
            <ProfileStatus status={status} updateStatus={updateStatus} />
          )}
        </div>
      </div>
      <PostsContainer />
    </div>
  );
}

export default Profile;
