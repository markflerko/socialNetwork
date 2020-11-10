import React from 'react';
import { addMessage, updateNewMessageActionCreator } from '../../../redux/dialogsReducer';
import {connect} from 'react-redux';
import SendWriteAndEmoji from './SendWriteAndEmoji';

let mapStateToProps = (state) => {
  return {
    messageText: state.dialogsPage.messageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      let id = window.location.href[window.location.href.length - 1];
      if (id != +id) return;
      dispatch(addMessage(id))
    },
    updateNewMessageText: (message) => {
      dispatch(updateNewMessageActionCreator(message))
    }
  }
}

const SendWriteAndEmojiContainer = connect(mapStateToProps, mapDispatchToProps)(SendWriteAndEmoji);

export default SendWriteAndEmojiContainer;