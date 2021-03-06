import React from "react";
import { PostsType } from "../../../../types/types";
import classes from "./Post.module.css";

type PropsType = {
  message: string
  likes: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" />
      {props.message}
      <div>
        <span>
          like
          {props.likes}
        </span>
      </div>
    </div>
  );
};

export default Post;
