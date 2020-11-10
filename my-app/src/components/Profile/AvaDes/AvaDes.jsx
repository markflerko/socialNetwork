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
        fuck
        {/* <iframe src="https://www.google.com/" height="500px" width="500px"></iframe>  */}
      </div>
    </div>
  )
}

export default AvaDes; 