import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppStateType } from "../../redux/reduxStore";
import { logout } from '../../redux/authReducer';

export const Header = () => {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const login = useSelector((state: AppStateType) => state.auth.login);

  const dispatch = useDispatch();

  const { Header } = Layout;

  return (
    <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={20}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/Devs">Developers</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          {isAuth ? (
            <div onClick={() => dispatch(logout())}>
              <Avatar alt={login || ''} style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
              🔶 {login}
            </div>
          ) : (
            <Link to={"/login"} >
              🔶 Login
            </Link>
          )}
        </Col>
      </Row>
    </Header>

    // <header className={classes.header}>

    //   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png' />

    //   <div className={classes.login}>

    //   </div>

    // </header>
  );
};
