import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";

import './styles.css';

const { Sider } = Layout;

class SiderMenu extends React.Component {
  constructor(props) {
    super(props);

    this.selectedItem = this.props.selectedItem;
    console.log(this.selectedItem);
    let one, two, three, four = false;
    if (this.selectedItem[0] == "1"){
      one = true;
    }
    if (this.selectedItem[0] == "2"){
      two = true;
    }
    if (this.selectedItem[0] == "3"){
      three = true;
    }
    if (this.selectedItem[0] == "4"){
      four = true;
    }
    
    this.state = {
      one_selected: one,
      two_selected: two,
      three_selected: three,
      four_selected: four
    };

    let color = this.props.color.slice(4);
    color = color.split(',');
    this.r = color[0];
    this.g = color[1];
    this.b = color[2];
    this.b = this.b.substring(0,this.b.length - 1);

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
        defaultSelectedKeys={this.selectedItem}
        style={{ backgroundColor: 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.55)', height: '100vh' }}
        >
          <Menu.Item className='customclass' key="1" style={this.state.one_selected ? this.selectedStyle : this.notSelectedStyle} onClick={() => {
            this.setState({ one_selected: true, two_selected: false, three_selected: false, four_selected: false })
          }}>
            <Link to={"/search"}>
              <Icon type="more"/>
              <span style={{ borderBottom: '1px solid white'}}>Search for Country</span><br></br>
            </Link>
          </Menu.Item>
          <Menu.Item className='customclass' key="2" style={this.state.two_selected ? this.selectedStyle : this.notSelectedStyle} onClick={() => {
            this.setState({ one_selected: false, two_selected: true, three_selected: false, four_selected: false })
          }}>
            <Link to={'/demographic'}>
              <Icon type="more" />
              <span style={{ borderBottom: '1px solid white'}}>Socio - Economics</span><br></br>
              </Link>
          </Menu.Item>
          <Menu.Item className='customclass' key="3" style={this.state.three_selected ? this.selectedStyle : this.notSelectedStyle}onClick={() => {
            this.setState({ one_selected: false, two_selected: false, three_selected: true, four_selected: false })
          }}>
            <Link to={"/communication_and_information"}>
            <Icon type="more" />
            <span style={{ borderBottom: '1px solid white'}}>Communication</span><br></br>
            </Link>
          </Menu.Item>
          <Menu.Item className='customclass' key="4" style={this.state.four_selected ? this.selectedStyle : this.notSelectedStyle}onClick={() => {
            this.setState({ one_selected: false, two_selected: false, three_selected: false, four_selected: true })
          }}>
            <Link to={'/innovation'}>
            <Icon type="more" />
            <span style={{ borderBottom: '1px solid white'}}>Innovation</span><br></br>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu;