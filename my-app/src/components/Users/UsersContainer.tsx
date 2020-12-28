import React from "react";
import { connect } from "react-redux";
import preloader from "../../assets/img/preloader.svg";
import { AppStateType } from "../../redux/reduxStore";
import {
  FilterType,
  followUser,
  requestUsers,
  // setCurrentPage,
  unfollowUser,
} from "../../redux/usersReducer";
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUserFilter,
} from "../../redux/usersSelectors";
import { UserType } from "../../types/types";
import Users from "./Users/Users";

type MapStateToPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  followingProgress: Array<number>;
  isFetching: boolean;
  filter: FilterType
};

type MapDispatchToPropsType = {
  unfollowUser: (id: number) => void;
  followUser: (id: number) => void;
  // setCurrentPage: (pageNumber: number) => void;
  requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void;
};

type OwnPropsType = {
  pageTitle: string;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
  }

  onPageChanged = (pageNumber: number) => {
    // this.props.setCurrentPage(pageNumber);
    const {filter} = this.props;
    this.props.requestUsers(pageNumber, this.props.pageSize, filter);
  };

  onFilterChanged = (filter: FilterType) => {
    const {pageSize} = this.props;

    this.props.requestUsers(1, pageSize, filter)
  }

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching && <img src={preloader} />}
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          followingProgress={this.props.followingProgress}
          unfollowUser={this.props.unfollowUser}
          followUser={this.props.followUser}
          onPageChanged={this.onPageChanged}
          onFilterChanged={this.onFilterChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followingProgress: getFollowingProgress(state),
    isFetching: getIsFetching(state),
    filter: getUserFilter(state),
  };
};

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, { followUser, unfollowUser, requestUsers })(UsersContainer);
