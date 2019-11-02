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
        width='22vw'
      >
        <div className="logo" />
        <Menu 
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        style={{ backgroundColor: 'rgba(4, 4, 102,0.4)', height: '100vh'}}
        >
          <Menu.Item key="1" style={{ marginTop: '230px', fontSize: '35px', height: '60px'}}>
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2" style={{ marginTop: '100px', fontSize: '35px', height: '60px'}}>
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3" style={{ marginTop: '100px', fontSize: '35px', height: '60px'}}>
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4" style={{ marginTop: '100px', fontSize: '35px', height: '60px'}}>
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
    );
}

export default SiderMenu;