import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import AvaDes from './AvaDes/AvaDes';
import SubHeader from './SubHeader/SubHeader';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  return (
    <div className={classes.content}>
      <SubHeader />
      <AvaDes profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;