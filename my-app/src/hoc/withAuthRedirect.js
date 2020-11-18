import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

let mapStateToPropsForRredirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedicrect = (Component) => {

  class RedirectComponent extends React.Component {

    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />

      return <Component {...this.props} />
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRredirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}