import React from "react";
import { ProfileType } from "../../types/types";
import AvaDes from "./AvaDes/AvaDes";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";
import SubHeader from "./SubHeader/SubHeader";

type PropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
}

const Profile: React.FC<PropsType> = (props) => {
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
