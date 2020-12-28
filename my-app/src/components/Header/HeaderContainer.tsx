import React from "react";
import { connect } from "react-redux";
import { auth, logout } from "../../redux/authReducer";
import { AppStateType } from "../../redux/reduxStore";
import Header, { StatePropsType, DispatchPropsType } from "./Header";

class HeaderContainer extends React.Component<StatePropsType & DispatchPropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: AppStateType) =>
  ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  });

export default connect<StatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { logout })(
  HeaderContainer,
);
