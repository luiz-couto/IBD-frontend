import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import "antd/dist/antd.css";

import './styles.css';

const { Sider } = Layout;

const selectedStyle = {
  marginTop: '100px',
  fontSize: '55px',
  height: '130px',
  width: '40vw',
  paddingTop: '35px'
}

const notSelectedStyle = {
  marginTop: '100px',
  fontSize: '35px',
  height: '60px',
}

class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        one_selected: false,
        two_selected: false,
        three_selected: false,
        four_selected: false
    };
  } 
  render() {
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
        style={{ backgroundColor: 'rgba(4, 4, 102,0.4)', height: '100vh' }}
        >
          <Menu.Item className='customclass' key="1" style={this.state.one_selected ? selectedStyle : notSelectedStyle}onClick={() => {
            this.setState({ one_selected: true, two_selected: false, three_selected: false, four_selected: false })
          }}>
            <Icon type="user"/>
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item className='customclass' key="2" style={this.state.two_selected ? selectedStyle : notSelectedStyle} onClick={() => {
            this.setState({ one_selected: false, two_selected: true, three_selected: false, four_selected: false })
          }}>
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item className='customclass' key="3" style={this.state.three_selected ? selectedStyle : notSelectedStyle}onClick={() => {
            this.setState({ one_selected: false, two_selected: false, three_selected: true, four_selected: false })
          }}>
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item className='customclass' key="4" style={this.state.four_selected ? selectedStyle : notSelectedStyle}onClick={() => {
            this.setState({ one_selected: false, two_selected: false, three_selected: false, four_selected: true })
          }}>
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
    );
  }
}

export default SiderMenu;