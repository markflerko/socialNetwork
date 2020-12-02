import React from 'react';
import preloader from '../../../assets/img/preloader.svg';
import classes from './AvaDes.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const AvaDes = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <img src={preloader} />
  }

  return (
    <div className={classes.ava}>
      <img src={profile.photos.large} />
      <div className={classes.about}>
        <iframe src={`https://social-network.samuraijs.com/api/1.0/profile/${profile.userId}`} width="400" height="auto" ></iframe>
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

export default AvaDes; 