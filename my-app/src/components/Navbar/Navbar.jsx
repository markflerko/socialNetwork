import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className={classes.nav}>
      <nav className={classes.nav__links}>
        <div className={classes.item}><NavLink to="/Profile" activeClassName={classes.active}>Profile</NavLink></div>
        <div className={classes.item}><NavLink to="/Dialogs" activeClassName={classes.active}>Dialogs</NavLink></div>
        <div className={classes.item}><NavLink to="/Users" activeClassName={classes.active}>Users</NavLink></div>
        <div className={classes.item}><NavLink to="/News" activeClassName={classes.active}>News</NavLink></div>
        <div className={classes.item}><NavLink to="/Music" activeClassName={classes.active}>Music</NavLink></div>
        <div className={classes.item}><NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink></div>
      </nav>
      <div className={classes.nav__friends}>
        FRIENDS 🔂
        <br/>
        {props.state.friendsOnline.map(i =>
        <span>
          <img
            className={`${classes.nav__friends__img} ${classes['nav__friends__img-container']}`}
            src={i}
          />
        </span>
      )}
      </div>
    </div>
  )
}

export default Navbar;