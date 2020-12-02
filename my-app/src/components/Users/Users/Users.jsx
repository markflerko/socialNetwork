import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../../../assets/img/user.png';
import Paginator from '../../common/Paginator';
import User from './User';
import classes from './Users.module.css';

let Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  followingProgress,
  unfollowUser,
  followUser,
  ...props }) => {

  return (
    <div className={classes.container}>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

      <div className={classes.template}>
        {
          users.map(u => <User
            user={u}
            key={u.id}
            followingProgress={followingProgress}
            unfollowUser={unfollowUser}
            followUser={followUser}
          />
          )}
      </div>
      <button>Get Users</button>
    </div>
  )
}

export default Users;