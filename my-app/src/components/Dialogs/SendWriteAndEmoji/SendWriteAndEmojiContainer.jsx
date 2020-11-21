import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../../redux/dialogsReducer';
import SendWriteAndEmojiFormRedux from './SendWriteAndEmoji';

class SendWriteAndEmojiContainer extends React.Component {
  addNewMessage = (values) => {
    this.props.sendMessage(values.newMessage)
  }

  render() {
    return (
      <SendWriteAndEmojiFormRedux
        {...this.props}
        onSubmit={this.addNewMessage}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    messageText: state.dialogsPage.messageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessage) => {
      let id = window.location.href[window.location.href.length - 1];
      if (id != +id) return;
      dispatch(addMessage(id, newMessage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendWriteAndEmojiContainer);

