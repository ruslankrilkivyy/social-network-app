import React from 'react';

import ProfileFormData from './ProfileFormData';
import ProfileData from './ProfileData';

const ProfileInfo = ({
  profile,
  isLoading,
  isOwner,
  status,
  updateStatus,
  onSavePhoto,
  updateProfileInfo,
}) => {
  const [editMode, setEditMode] = React.useState(false);

  const onSelectProfilePhoto = (e) => {
    if (e.target.files.length) {
      onSavePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    updateProfileInfo(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className="profile__info">
      {editMode ? (
        <ProfileFormData
          initialValues={profile}
          onSubmit={onSubmit}
          profile={profile}
          isOwner={isOwner}
          status={status}
        />
      ) : (
        <ProfileData
          profile={profile}
          isLoading={isLoading}
          isOwner={isOwner}
          updateStatus={updateStatus}
          status={status}
          onSelectProfilePhoto={onSelectProfilePhoto}
        />
      )}
      <button onClick={() => setEditMode(!editMode)}>Редактировать</button>
    </div>
  );
};

export default ProfileInfo;
