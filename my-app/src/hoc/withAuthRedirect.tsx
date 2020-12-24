import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/reduxStore";

let mapStateToPropsForRredirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

type MapPropsType = {
  isAuth: boolean;
};

export function withAuthRedicrect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  const RedirectComponent: React.FC<MapPropsType & {}> = (props) => {
    let { isAuth, ...restProps } = props;

    if (!isAuth) return <Redirect to="/login" />;

    return <WrappedComponent {...(restProps as WCP)} />;
  };

  let ConnectedAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(
    mapStateToPropsForRredirect,
    {},
  )(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}
