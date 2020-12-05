import React from 'react';
import AvaDes from './AvaDes/AvaDes';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import SubHeader from './SubHeader/SubHeader';


const Profile = (props) => {
  debugger;
  return (
    <div className={classes.content}>
      <SubHeader />
      <AvaDes
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;