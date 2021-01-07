import React from 'react';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../FormsControls/FormsControls';

const ProfileFormData = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="profile__info-item">Full name: </h4>
      {createField('fullname', 'fullName', [required], Input)}
      <div className="profile__info-item">Looking job: </div>
      {createField(null, 'lookingForAJob', [], Input, { type: 'checkbox' })}
      <div className="profile__info-item">Professionals skills: </div>
      {createField('Job', 'lookingForAJobDescription', [], Input)}
      <div className="profile__info-item">About me: </div>
      {createField('AboutMe', 'aboutMe', [], Input)}
      {Object.keys(profile.contacts).map((key) => {
        return (
          <div key={key} className="profile__info-contacts">
            <b>{key}: </b>
            {createField(key, 'contacts.' + key, [], Input)}
          </div>
        );
      })}
      <div>
        <button>Закончить</button>
      </div>
    </form>
  );
};

const ProfileEditReduxForm = reduxForm({ form: 'edit-profile' })(ProfileFormData);

export default ProfileEditReduxForm;
