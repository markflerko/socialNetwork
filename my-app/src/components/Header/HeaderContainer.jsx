import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/authReducer'
import usersAPI from '../../api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.auth().then(data => {
      if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        this.props.setAuthUserData(email, id, login);
      }
    });
  }


  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);