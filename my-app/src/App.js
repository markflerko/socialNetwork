import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/appReducer';
import preloader from '../src/assets/img/preloader.svg';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import withSuspense from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <img src={preloader} />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>

            <Route exact path='/'>
              <Redirect from={'/'} to={'/Profile'} />
            </Route>
            <Route path='/Profile/:userId?'>
              <ProfileContainer />
            </Route>
            <Route path='/Dialogs/:convnId?'>
              {withSuspense(DialogsContainer)}
            </Route>
            <Route path='/Users' >
              <UsersContainer pageTitle={'Samurai'}/>
            </Route>
            <Route path='/News' component={News} />
            <Route path='/Music' component={Music} />
            <Route path='/Settings' component={Settings} />
            <Route path='/Login' component={Login} />
            <Route path='*' component={() => <div>404 NOT FOUND</div>} />

          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose(
  connect(mapStateToProps, { initializeApp }))(App);


let SamuraiJsApp = (props) => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store} >
          <AppContainer state={store.getState()} />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  )
}

export default SamuraiJsApp;