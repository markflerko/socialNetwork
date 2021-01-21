import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/newsReducer";
import { AppStateType } from "../../redux/reduxStore";
import classes from "./News.module.css";

type PropsType = {};

export const News: React.FC<PropsType> = (props) => {
  const news = useSelector((state: AppStateType) => state.news.newsItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div className={classes.template}>
      {news.map((u) => (
        <div key={u.id}>
          <p>
            <h3>{u.title}</h3>
            <span>{u.date}</span>
          </p>
          <p>{u.text}</p>
          <div>
            <img src={u.img} />
          </div>
        </div>
      ))}
    </div>
  );
};
