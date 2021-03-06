import React from "react";
import { NavLink } from "react-router-dom";
import userImage from "../../../assets/img/user.png";
import { UserType } from "../../../types/types";
import classes from "./User.module.css";

type PropsType = {
  user: UserType;
  followingProgress: Array<number>;
  unfollowUser: (userId: number) => void;
  followUser: (userId: number) => void;
};

let User: React.FC<PropsType> = ({ user, followingProgress, unfollowUser, followUser }) => {
  return (
    <div key={user.id} className={classes.profile}>
      <span>
        <div>
          <NavLink to={"Profile/" + user.id}>
            <img
              className={classes.profile__img}
              src={user.photos.small ? user.photos.small : userImage}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingProgress.some((id) => id == user.id)}
              onClick={() => {
                unfollowUser(user.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={followingProgress.some((id) => id == user.id)}
              onClick={() => {
                followUser(user.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.city"}</div>
          <div>{"u.location.country"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
