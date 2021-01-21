import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FilterType, requestUsers, followUser, unfollowUser } from "../../../redux/usersReducer";
import {
  getCurrentPage,
  getFollowingProgress,
  getPageSize,
  getTotalUsersCount,
  getUserFilter,
  getUsers,
} from "../../../redux/usersSelectors";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";
import classes from "./Users.module.css";
import UserSearchForm from "./UsersSearchForm";
import qs from "qs";

type PropsType = {};

export const Users: React.FC<PropsType> = (props) => {
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUserFilter);
  const users = useSelector(getUsers);
  const followingProgress = useSelector(getFollowingProgress);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const parsed = qs.parse(history.location.search.substring(1)) as { term: string; page: string; friend: string };

    let actualPage = currentPage;
    let actualFilter = filter;

    if (!!parsed.page) actualPage = Number(parsed.page);
    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };
    switch (parsed.friend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null };
        break;
      case "true":
        actualFilter = { ...actualFilter, friend: true };
        break;
      case "false":
        actualFilter = { ...actualFilter, friend: false };
        break;
    }

    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, []);

  useEffect(() => {
    history.push({
      pathname: "/users",
      search: `?term=${filter.term}&friend=${filter.friend}&currentPage=${currentPage}`,
    });
  }, [filter, currentPage]);

  const follow = (id: number) => {
    dispatch(followUser(id));
  };

  const unfollow = (id: number) => {
    dispatch(unfollowUser(id));
  };

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };

  return (
    <div className={classes.container}>
      <UserSearchForm onFilterChanged={onFilterChanged} />

      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

      <div className={classes.template}>
        {users.map((u) => (
          <User user={u} key={u.id} followingProgress={followingProgress} unfollowUser={unfollow} followUser={follow} />
        ))}
      </div>
      <button>Get Users</button>
    </div>
  );
};
