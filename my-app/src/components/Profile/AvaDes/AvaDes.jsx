import React from 'react';
import classes from './AvaDes.module.css'

const AvaDes = (props) => {
  if(!props.profile) {
    return <div>Here must be a fucking preloader</div>
  }

  return (
    <div className={classes.ava}>
      {
        <>
          props.profile ?
          <img src={props.profile.photos.large} /> :
          <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
        </>
      }
      <div>descrption</div>
    </div>
  )
}

export default AvaDes; 