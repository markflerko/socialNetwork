import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route path='/Profile' >
            <ProfileContainer />
          </Route>
          <Route path='/Dialogs'>
            <Dialogs
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch}
              store={props.store}
            />
          </Route>
          <Route path='/Users' >
            <UsersContainer />
          </Route>
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
