import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {
  render() {
    return <Dialogs {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps)(DialogsContainer);
