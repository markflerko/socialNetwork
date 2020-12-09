import React from 'react';
import preloader from '../../../assets/img/preloader.svg';
import classes from './AvaDes.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/user.png';

const AvaDes = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  debugger;

  if (!profile) {
    return <img src={preloader} />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={classes.ava}>
      <img
        src={profile.photos.large || userPhoto}
        className={classes.profileImage}
      />
      {isOwner &&
        <input
          type={'file'}
          className={classes.uploadImage}
          onChange={onMainPhotoSelected}
        />}
      <div className={classes.about}>
        <ProfileData userId={profile.userId} />
      </div>
      <div className={classes.status}>
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  )
}

const ProfileData = ({ userId }) => {
  return (
    <iframe
      src={`https://social-network.samuraijs.com/api/1.0/profile/${userId}`}
      width="400"
      height="auto"
    ></iframe>
  )
}

export default AvaDes; 