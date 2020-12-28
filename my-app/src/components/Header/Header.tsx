import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export type StatePropsType = {
  isAuth: boolean,
  login: string | null
}

export type DispatchPropsType = {
  logout: () => void
}

const Header: React.FC<StatePropsType & DispatchPropsType> = (props) => {
  return (
    <header className={classes.header}>

      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png' />

      <div className={classes.login}>
        {props.isAuth ?
          <NavLink to={'/login'} className={classes.navlink} onClick={props.logout}>
            🔶 {props.login}
          </NavLink> :
          <NavLink to={'/login'} className={classes.navlink}>🔶 Login</NavLink>}
      </div>

    </header>
  )
}

export default Header;