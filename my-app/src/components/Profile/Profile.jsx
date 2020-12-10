import React from "react";
import AvaDes from "./AvaDes/AvaDes";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";
import SubHeader from "./SubHeader/SubHeader";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <SubHeader />
      <AvaDes
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
