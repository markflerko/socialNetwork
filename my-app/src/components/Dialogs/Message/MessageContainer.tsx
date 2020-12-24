import React from 'react';
import {connect} from 'react-redux';
import { AppStateType } from '../../../redux/reduxStore';
import Message from './Message';

let mapStateToProps = (state: AppStateType) => {
  let id = +window.location.href[window.location.href.length - 1];
  return {
    messages: state.dialogsPage.messagesData[id],
    avatar: state.dialogsPage.dialogsData[id-1].avaImg,
  }
}

const MessageContainer = connect(mapStateToProps)(Message);

export default MessageContainer;

