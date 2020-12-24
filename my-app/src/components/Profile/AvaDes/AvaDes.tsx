import React from "react";
import preloader from "../../../assets/img/preloader.svg";
import classes from "./AvaDes.module.css";
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.png";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

//@ts-ignore
const AvaDes = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <img src={preloader} />;
  }

//@ts-ignore
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: any) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={classes.ava}>
      <img src={profile.photos.large || userPhoto} className={classes.profileImage} />
      {isOwner && <input type={"file"} className={classes.uploadImage} onChange={onMainPhotoSelected} />}
      <div className={classes.about}>
        {editMode ? (
          //@ts-ignore
          <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData
            userId={profile.userId}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
      <div className={classes.status}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

//@ts-ignore
const ProfileData = ({ userId, isOwner, goToEditMode }) => {
  return (
    <>
      <iframe src={`https://social-network.samuraijs.com/api/1.0/profile/${userId}`} width="400" height="auto"></iframe>
      {isOwner && (
        <span>
          <button onClick={goToEditMode}>edit</button>
        </span>
      )}
    </>
  );
};

export default AvaDes;
