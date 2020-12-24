import React from "react";
import classes from "./Post.module.css";

const Post = (props: any) => {
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
