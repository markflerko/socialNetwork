import React from 'react';
import { connect } from "react-redux";
import preloader from '../../assets/img/preloader.svg';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  followUser,
  unfollowUser
} from "../../redux/usersReducer";
import Users from './Users';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching && <img src={preloader} />}
        <Users
          {...this.props}
          onPageChanged={this.onPageChanged}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  }
}

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    followUser,
    unfollowUser
  }
)(UsersContainer);