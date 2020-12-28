import React from "react";
import { Field, reduxForm } from "redux-form";
import { PostsType } from "../../../types/types";
import maxLegnthCreator from "../../../utils/validators/maxLengthCreator";
import minLengthCreator from "../../../utils/validators/minLengthCreator";
import required from "../../../utils/validators/required";
import { Textarea } from "../../common/FormsControls/FormsControls";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let maxLength = maxLegnthCreator(10);
let minLength = minLengthCreator(1);

let AddNewPostForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostText"
        className={classes.textarea}
        component={Textarea}
        validate={[required, maxLength, minLength]}
      />
      <button className={classes.btn}>add post</button>
    </form>
  );
};

//@ts-ignore
AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

type addPostValueType = {
  newPostText: string;
};

export type StatePropsType = {
  posts: Array<PostsType>
}

export type DispatchPropsType = {
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<StatePropsType & DispatchPropsType> = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likes={post.likesCount} />
  ));

  let onAddPost = (values: addPostValueType) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.posts}>
      <AddNewPostForm onSubmit={onAddPost} />
      posts
      {postsElements}
    </div>
  );
};

const MyPostsMemorized = React.memo(MyPosts)

export default MyPosts;
