import React from "react";
import { useSelector } from "react-redux";
import preloader from "../../assets/img/preloader.svg";
import { getIsFetching } from "../../redux/usersSelectors";
import { Users } from "./Users/Users";

type UserPagePropsType = {
  pageTitle: string;
};

export const UserPage: React.FC<UserPagePropsType> = ({ pageTitle }) => {
  const isFetching = useSelector(getIsFetching);

  return (
    <>
      <h2>{pageTitle}</h2>
      {isFetching && <img src={preloader} />}
      <Users />
    </>
  );
};
