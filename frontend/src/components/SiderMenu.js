import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import "antd/dist/antd.css";

import './styles.css';

const { Sider } = Layout;

class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        one_selected: false,
        two_selected: false,
        three_selected: false,
        four_selected: false
    };
    console.log(this.props.color);

    let color = this.props.color.slice(4);
    color = color.split(',');
    this.r = color[0];
    this.g = color[1];
    this.b = color[2];
    this.b = this.b.substring(0,this.b.length - 1);
    console.log(this.r,this.g,this.b);

    this.selectedStyle = {
      marginTop: '100px',
      fontSize: '55px',
      height: '160px',
      width: '47vw',
      paddingTop: '45px',
      backgroundColor:'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.55)',
      backgroundImage: "linear-gradient('to right'," + 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.35),' +  'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.1))',
    }
    
    this.notSelectedStyle = {
      marginTop: '100px',
      fontSize: '25px',
      height: '60px',
    }

  } 
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsible={false}
        onBreakpoint={broken => {
          console.log(broken);
        }}
        width='22vw'
        style={{ opacity: 0.6 }}
      >
        <div className="logo" />
        <Menu 
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        style={{ backgroundColor: 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.55)', height: '100vh' }}
        >
          <Menu.Item className='customclass' key="1" style={this.state.one_selected ? this.selectedStyle : this.notSelectedStyle} onClick={() => {
            this.setState({ one_selected: true, two_selected: false, three_selected: false, four_selected: false })
          }}>
            <Icon type="more"/>
            <span style={{ borderBottom: '1px solid white'}}>Search for Country</span><br></br>
          </Menu.Item>
          <Menu.Item className='customclass' key="2" style={this.state.two_selected ? this.selectedStyle : this.notSelectedStyle} onClick={() => {
            this.setState({ one_selected: false, two_selected: true, three_selected: false, four_selected: false })
          }}>
            <Icon type="more" />
            <span style={{ borderBottom: '1px solid white'}}>Nullam auctor</span><br></br>
          </Menu.Item>
          <Menu.Item className='customclass' key="3" style={this.state.three_selected ? this.selectedStyle : this.notSelectedStyle}onClick={() => {
            this.setState({ one_selected: false, two_selected: false, three_selected: true, four_selected: false })
          }}>
            <Icon type="more" />
            <span style={{ borderBottom: '1px solid white'}}>Vivamos sed tellus eget</span><br></br>
          </Menu.Item>
          <Menu.Item className='customclass' key="4" style={this.state.four_selected ? this.selectedStyle : this.notSelectedStyle}onClick={() => {
            this.setState({ one_selected: false, two_selected: false, three_selected: false, four_selected: true })
          }}>
            <Icon type="more" />
            <span style={{ borderBottom: '1px solid white'}}>Curae nam ullamoorper ut mi</span><br></br>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu;