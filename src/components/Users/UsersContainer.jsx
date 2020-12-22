import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import {
  getUsers,
  getPageSize,
  totalUsersCount,
  currentPage,
  isLoading,
  followingInProggress,
} from '../../redux/usersSelectors';
import {
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  toggleFollowingInProggress,
  requestUsers,
  follow,
  unfollow,
} from '../../redux/usersReducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onChangedPage = (page) => {
    this.props.requestUsers(page, this.props.pageSize);
    this.props.setCurrentPage(page);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            onChangedPage={this.onChangedPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            isLoading={this.props.isLoading}
            followingInProggress={this.props.followingInProggress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: totalUsersCount(state),
    currentPage: currentPage(state),
    isLoading: isLoading(state),
    followingInProggress: followingInProggress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  toggleFollowingInProggress,
  requestUsers,
})(UsersContainer);
