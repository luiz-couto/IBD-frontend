import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import "antd/dist/antd.css";

const { Sider } = Layout;

const SiderMenu = () => {
    return (
        <Layout>
    <Sider
      breakpoint="lg"
      collapsible={false}
      onBreakpoint={broken => {
        console.log(broken);
      }}
      width='450px'
    >
      <div className="logo" />
      <Menu 
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['4']}
      
      >
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>
    </Sider>
    </Layout>
    );
}

export default SiderMenu;