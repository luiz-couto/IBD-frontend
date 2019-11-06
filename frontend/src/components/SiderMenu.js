import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import "antd/dist/antd.css";

import './styles.css';

const { Sider } = Layout;

const selectedStyle = {
  marginTop: '100px',
  fontSize: '55px',
  height: '160px',
  width: '47vw',
  paddingTop: '45px',
}

const notSelectedStyle = {
  marginTop: '100px',
  fontSize: '25px',
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
    <Layout style={{position: 'absolute', opacity: 0.6}}>
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
        style={{ backgroundColor: 'rgba(255,245,236,0.5)', height: '100vh' }}
        >
          <Menu.Item className='customclass' key="1" style={this.state.one_selected ? selectedStyle : notSelectedStyle}onClick={() => {
            this.setState({ one_selected: true, two_selected: false, three_selected: false, four_selected: false })
          }}>
            <Icon type="more"/>
            <span style={{ borderBottom: '1px solid white'}}>Search for Country</span><br></br>
          </Menu.Item>
          <Menu.Item className='customclass' key="2" style={this.state.two_selected ? selectedStyle : notSelectedStyle} onClick={() => {
            this.setState({ one_selected: false, two_selected: true, three_selected: false, four_selected: false })
          }}>
            <Icon type="more" />
            <span style={{ borderBottom: '1px solid white'}}>Nullam auctor</span><br></br>
          </Menu.Item>
          <Menu.Item className='customclass' key="3" style={this.state.three_selected ? selectedStyle : notSelectedStyle}onClick={() => {
            this.setState({ one_selected: false, two_selected: false, three_selected: true, four_selected: false })
          }}>
            <Icon type="more" />
            <span style={{ borderBottom: '1px solid white'}}>Vivamos sed tellus eget</span><br></br>
          </Menu.Item>
          <Menu.Item className='customclass' key="4" style={this.state.four_selected ? selectedStyle : notSelectedStyle}onClick={() => {
            this.setState({ one_selected: false, two_selected: false, three_selected: false, four_selected: true })
          }}>
            <Icon type="more" />
            <span style={{ borderBottom: '1px solid white'}}>Curae nam ullamoorper ut mi</span><br></br>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
    );
  }
}

export default SiderMenu;