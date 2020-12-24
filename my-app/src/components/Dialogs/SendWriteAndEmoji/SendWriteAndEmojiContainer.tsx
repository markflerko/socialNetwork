import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../redux/dialogsReducer";
import { AppStateType } from "../../../redux/reduxStore";
import SendWriteAndEmojiFormRedux from "./SendWriteAndEmoji";

class SendWriteAndEmojiContainer extends React.Component {
  addNewMessage = (values: any) => {
    //@ts-ignore
    this.props.sendMessage(values.newMessage);
  };

  render() {
    return (
      <SendWriteAndEmojiFormRedux
        {...this.props}
        onSubmit={this.addNewMessage}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    //@ts-ignore
    messageText: state.dialogsPage.messageText,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (newMessage: string) => {
      let id = window.location.href[window.location.href.length - 1];
      //@ts-ignore
      if (id != +id) return;
      dispatch(actions.addMessage(id, newMessage));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendWriteAndEmojiContainer);
