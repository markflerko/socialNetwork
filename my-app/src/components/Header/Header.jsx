import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>

      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png' />

      <div className={classes.login}>
        {props.isAuth ? props.login : <NavLink to={'/login'} className={classes.navlink}>🔶 Login</NavLink>}
      </div>

    </header>
  )
}

export default Header;