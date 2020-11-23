import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
  return (
    <div className={classes.messages} >
      {props.messages.map((item) => (
        <>
          {
            item.send && (
              <div className={`${classes.messages__send} ${classes['messages__send-container']}`}>
                {item.send}
              </div>
            )
          }
          {
            item.get && (
              <div className={`${classes.messages__get} ${classes['messages__get-container']}`}>
                <img
                  className={`${classes.messages__get__img} ${classes['messages__get__img-container']}`}
                  src={props.avatar}
                />
                {item.get}
              </div>
            )
          }
        </>
      )
      )}
    </div >
  )
}

export default Message;