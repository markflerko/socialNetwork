import React from 'react';
import classes from './Users.module.css';
import user from '../../../assets/img/user.png'
import { NavLink } from 'react-router-dom';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.container}>

      <div className={classes.pagination}>
        {pages.map(p => {
          return (
            <span
              className={props.currentPage === p && classes.selectedPage}
              onClick={(e) => { props.onPageChanged(p) }}
            >
              {p}
            </span>
          )
        })}
      </div>

      <div className={classes.template}>
        {
          props.users.map(u => (
            <div key={u.id} className={classes.profile}>
              <span>
                <div>
                  <NavLink to={'Profile/' + u.id}>
                    <img
                      className={classes.profile__img}
                      src={u.photos.small ? u.photos.small : user}
                    />
                  </NavLink>
                </div>
                <div>
                  {u.followed ?
                    <button onClick={() => { props.unfollow(u.id) }}>unfollow</button> :
                    <button onClick={() => { props.follow(u.id) }}>follow</button>}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{'u.location.city'}</div>
                  <div>{'u.location.country'}</div>
                </span>
              </span>
            </div>
          ))
        }
      </div>
      <button>Get Users</button>
    </div>
  )
}

export default Users;