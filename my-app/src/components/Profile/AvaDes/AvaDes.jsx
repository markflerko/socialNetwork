import React from 'react';
import classes from './AvaDes.module.css';
import preloader from '../../../assets/img/preloader.svg';

const AvaDes = (props) => {
  if (!props.profile) {
    return <img src={preloader} />
  }
  
  return (
    <div className={classes.ava}>
      <img src={props.profile.photos.large} />
      <div>
        <iframe src={`https://social-network.samuraijs.com/api/1.0/profile/${props.profile.userId}`} width="400" height="200" ></iframe>
      </div>
    </div>
  )
}

export default AvaDes; 