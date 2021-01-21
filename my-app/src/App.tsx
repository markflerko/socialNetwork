import React, { Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import { LoginPage } from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import { UserPage } from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer";
import preloader from "../src/assets/img/preloader.svg";
import store, { AppStateType } from "./redux/reduxStore";
import { Provider } from "react-redux";
import withSuspense from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const SuspendenedDialogs = withSuspense(DialogsContainer);

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends React.Component<MapPropsType & DispatchPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <img src={preloader} />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/">
              <Redirect from={"/"} to={"/Profile"} />
            </Route>
            <Route path="/Profile/:userId?">
              <ProfileContainer />
            </Route>
            <Route path="/Dialogs/:convnId?">{() => <SuspendenedDialogs />}</Route>
            <Route path="/Users">
              <UserPage pageTitle={"Samurai"} />
            </Route>
            <Route path="/News" component={News} />
            <Route path="/Music" component={Music} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Login" component={LoginPage} />
            <Route path="*" component={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose<React.ComponentType>(connect(mapStateToProps, { initializeApp }))(App);

let SamuraiJsApp: React.FC = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          {/* @ts-ignore */}
          <AppContainer state={store.getState()} />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  );
};

export default SamuraiJsApp;
