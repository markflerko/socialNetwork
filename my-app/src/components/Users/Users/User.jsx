import React from 'react';
import { NavLink } from 'react-router-dom';
import userImage from '../../../assets/img/user.png';
import Paginator from '../../common/Paginator';
import classes from './Users.module.css';

let User = ({ user, followingProgress, unfollowUser, followUser }) => {

  return (
    <div key={user.id} className={classes.profile}>
      <span>
        <div>
          <NavLink to={'Profile/' + user.id}>
            <img
              className={classes.profile__img}
              src={user.photos.small ? user.photos.small : userImage}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ?

            <button
              disabled={followingProgress.some(id => id == user.id)}
              onClick={() => { unfollowUser(user.id); }}>unfollow</button> :

            <button
              disabled={followingProgress.some(id => id == user.id)}
              onClick={() => { followUser(user.id); }}>follow</button>
          }
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'u.location.city'}</div>
          <div>{'u.location.country'}</div>
        </span>
      </span>
    </div>
  )
}

export default User;