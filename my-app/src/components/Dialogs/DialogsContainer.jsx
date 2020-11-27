import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedicrect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {
  render() {
    return <Dialogs {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage
})

export default compose(
  connect(mapStateToProps),
  withAuthRedicrect
)(DialogsContainer);

