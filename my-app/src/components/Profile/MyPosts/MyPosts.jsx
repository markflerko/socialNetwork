import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post message={post.message} likes={post.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.posts}>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
        className={classes.textarea}
      />
      <button
        onClick={onAddPost}
        className={classes.btn}
      >add post</button>
      posts
      {postsElements}
    </div>
  )
}

export default MyPosts;

