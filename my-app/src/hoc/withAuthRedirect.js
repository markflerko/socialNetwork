import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

let mapStateToPropsForRredirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedicrect = (Component) => {

  let RedirectComponent = (props) => {
    if(!props.isAuth) return <Redirect to='/login' />

    return <Component {...props} />
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRredirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}