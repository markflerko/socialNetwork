import React from 'react';
import { connect } from 'react-redux';
import { auth, logout } from '../../redux/authReducer';
import { AppStateType } from '../../redux/reduxStore';
import Header from './Header';

class HeaderContainer extends React.Component {

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { auth, logout })(HeaderContainer);