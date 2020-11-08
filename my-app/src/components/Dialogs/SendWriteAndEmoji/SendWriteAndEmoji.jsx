import React from 'react';
import classes from './SendWriteAndEmoji.module.css';

const SendWriteAndEmoji = (props) => {
  let newMessageElement = React.createRef();

  const onSendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = () => {
    let message  = newMessageElement.current.value;
    props.updateNewMessageText(message);
  }

  return (
    <div className={classes.sendWriteAndEmoji} >
      <button className={classes.emoji}>emoji</button>
      <textarea
        onChange={onMessageChange}
        className={`${classes.textarea} ${classes.write}`}
        placeholder="write him a deal)))"
        ref={newMessageElement}
        value={props.messageText}
      >
      </textarea>
      <button
        className={classes.send}
        onClick={onSendMessage}
      >
        send
        </button>
    </div >
  )
}

export default SendWriteAndEmoji;