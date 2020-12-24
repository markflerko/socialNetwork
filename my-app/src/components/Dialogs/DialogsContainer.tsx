import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedicrect } from '../../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/reduxStore';
import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {
  render() {
    return <Dialogs {...this.props} />
  }
}

let mapStateToProps = (state: AppStateType) => ({
  dialogsPage: state.dialogsPage
})

export default compose<React.ComponentType>(
  connect(mapStateToProps),
  withAuthRedicrect
)(DialogsContainer);

