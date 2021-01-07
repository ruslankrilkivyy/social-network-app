import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {
  getProfileUser,
  getStatus,
  updateStatus,
  savePhoto,
  updateProfileInfo,
} from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refreshComponent() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getProfileUser(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshComponent();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshComponent();
    }
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          onSavePhoto={this.props.savePhoto}
          updateProfileInfo={this.props.updateProfileInfo}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  isAuth: state.authReducer.isAuth,
  authorizedUserId: state.authReducer.userId,
  isLoading: state.profileReducer.isLoading,
});

export default compose(
  connect(mapStateToProps, {
    getProfileUser,
    getStatus,
    updateStatus,
    savePhoto,
    updateProfileInfo,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
