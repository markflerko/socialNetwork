import React from 'react';
import preloader from '../../../assets/img/preloader.svg';
import classes from './AvaDes.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const AvaDes = (props) => {
  if (!props.profile) {
    return <img src={preloader} />
  }

  return (
    <div className={classes.ava}>
      <img src={props.profile.photos.large} />
      <div className={classes.about}>
        <iframe src={`https://social-network.samuraijs.com/api/1.0/profile/${props.profile.userId}`} width="400" height="auto" ></iframe>
      </div>
      <div className={classes.status}>
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  )
}

export default AvaDes; 