import React from "react";
import { FilterType } from "../../../redux/usersReducer";
import { UserType } from "../../../types/types";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";
import classes from "./Users.module.css";
import UserSearchForm from './UsersSearchForm';

type PropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  followingProgress: Array<number>;
  onPageChanged: (pageNumber: number) => void;
  onFilterChanged: (filter: FilterType) => void;
  unfollowUser: (id: number) => void;
  followUser: (id: number) => void;
};

let Users: React.FC<PropsType> = ({
  users,
  totalUsersCount,
  pageSize,
  currentPage,
  followingProgress,
  unfollowUser,
  followUser,
  onPageChanged,
  onFilterChanged
}) => {
  return (
    <div className={classes.container}>
      <UserSearchForm onFilterChanged={onFilterChanged}/>

      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

      <div className={classes.template}>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingProgress={followingProgress}
            unfollowUser={unfollowUser}
            followUser={followUser}
          />
        ))}
      </div>
      <button>Get Users</button>
    </div>
  );
};

export default Users;
