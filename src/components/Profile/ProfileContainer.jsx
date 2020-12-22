import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getProfileUser, getStatus, updateStatus } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
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

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
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
});

export default compose(
  connect(mapStateToProps, { getProfileUser, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
