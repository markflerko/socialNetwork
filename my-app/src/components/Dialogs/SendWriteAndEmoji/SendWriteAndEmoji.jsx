import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './SendWriteAndEmoji.module.css';

const SendWriteAndEmoji = (props) => {
  const onSendMessage = () => {
    props.sendMessage();
  }

  return (
    <form
      className={classes.sendWriteAndEmoji}
      onSubmit={props.handleSubmit}
    >
      <button className={classes.emoji}>emoji</button>
      <Field
        component='textarea'
        name='newMessage'
        placeholder='enter your message'
      />

      <button
        className={classes.send}
        onClick={onSendMessage}
      >
        send
        </button>
    </form >
  )
}

const SendWriteAndEmojiFormRedux = reduxForm({
  form: 'SendWriteAndEmojiForm'
})(SendWriteAndEmoji);

export default SendWriteAndEmojiFormRedux;