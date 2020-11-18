import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import SendWriteAndEmojiContainer from './SendWriteAndEmoji/SendWriteAndEmojiContainer';
import MessageContainer from './Message/MessageContainer';

const Dialogs = (props) => {
  let dialogsListElements = props.dialogsPage.dialogsData.map((i, k) => {
    let setClickedElementToActive = (e) => {
      const set = () => {
        let dialogs = document.querySelector('#dialogs');
        Array.from(dialogs.children).forEach((i) => i.style.background = '');
        document.getElementById(`a${k}`).style.background = 'goldenrod';
      };
      if (e.target.matches('a')) set();
    }

    return (
      <div id={`a${k}`} onClick={(e) => setClickedElementToActive(e)}>
        <DialogItem name={i.name} id={i.id} avaImg={i.avaImg} />
      </div>
    )
  })

  return (
    <BrowserRouter>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems} id='dialogs'>
          {dialogsListElements}
        </div>
        <div className={classes.messages}>
          <Route exact path='/Dialogs/1'>
            <MessageContainer />
          </Route>
          <Route exact path='/Dialogs/2'>
            <MessageContainer />
          </Route>
          <Route exact path='/Dialogs/3'>
            <MessageContainer />
          </Route>
          <Route exact path='/Dialogs/4'>
            <MessageContainer />
          </Route>
          <Route exact path='/Dialogs/5'>
            <MessageContainer />
          </Route>
        </div>
        <div className={classes.sendWriteAndEmoji}>
          <SendWriteAndEmojiContainer
            store={props.store}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Dialogs;