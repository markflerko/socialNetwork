import React from 'react';
import { Field, reduxForm } from 'redux-form';
import maxLegnthCreator from '../../../utils/validators/maxLengthCreator';
import minLengthCreator from '../../../utils/validators/minLengthCreator';
import required from '../../../utils/validators/required';
import { Textarea } from '../../common/FormsControls/FormsControls';
import classes from './SendWriteAndEmoji.module.css';

let maxLength = maxLegnthCreator(10);
let minLength = minLengthCreator(1);

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
        component={Textarea}
        name='newMessage'
        placeholder='enter your message'
        validate={[required, maxLength, minLength]}
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