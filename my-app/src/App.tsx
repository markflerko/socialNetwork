import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { connect, Provider } from "react-redux";
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { compose } from "redux";
import preloader from "../src/assets/img/preloader.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { LoginPage } from "./components/Login/Login";
import Music from "./components/Music/Music";
import { News } from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import { UserPage } from "./components/Users/UsersContainer";
import withSuspense from "./hoc/withSuspense";
import { initializeApp } from "./redux/appReducer";
import store, { AppStateType } from "./redux/reduxStore";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

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
      <Layout>
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                /* defaultOpenKeys={["sub1"]} */ style={{ height: "100%" }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                  <Menu.Item key="1">
                    <Link to="/Profile">Profile</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                  <Menu.Item key="5">
                    <Link to="/Dialogs">Dialogs</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/Devs">Devs</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/Music">Music</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Other">
                  <Menu.Item key="9">
                    <Link to="/News">News</Link>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <Link to="/Settings">Setting</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {" "}
              <Switch>
                <Route exact path="/">
                  <Redirect from={"/"} to={"/Profile"} />
                </Route>
                <Route path="/Profile/:userId?">
                  <ProfileContainer />
                </Route>
                <Route path="/Dialogs/:convnId?">{() => <SuspendenedDialogs />}</Route>
                <Route path="/Devs">
                  <UserPage pageTitle={"Samurai"} />
                </Route>
                <Route path="/News" component={News} />
                <Route path="/Music" component={Music} />
                <Route path="/Settings" component={Settings} />
                <Route path="/Login" component={LoginPage} />
                <Route
                  path="*"
                  component={() => (
                    <div>
                      404 NOT FOUND
                      <Button type={"ghost"}>OK</Button>
                    </div>
                  )}
                />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

      // <div className="app-wrapper">
      //   <HeaderContainer />
      //   <Navbar />
      //   <div className="app-wrapper-content">

      //   </div>
      // </div>
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
