import React, { useState } from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props: any) => {
  const [active, setActive] = useState('goldenrod')

  let path = '/Dialogs/' + props.id;

  return (
    <div className={`${classes.dialog}`}>
      <img
        className={`${classes.dialog__img} ${classes['dialog__img-container']}`}
        src={props.avaImg}
      />
      <NavLink
        className={`${classes.dialog__name} ${classes['dialog__name-container']}`}
        to={path}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
