import React from 'react';
import classes from './AvaDes.module.css';
import preloader from '../../../assets/img/preloader.svg';

const AvaDes = (props) => {
  if (!props.profile) {
    return <img src={preloader} />
  }


  return (
    <div className={classes.ava}>
      {/* <img src={props.profile.photos.large} /> */}
      <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
      <div>descrption</div>
    </div>
  )
}

export default AvaDes; 