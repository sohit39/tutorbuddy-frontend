import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';

class Navbar extends Component {
	constructor() {
		super();
	}
	state = {
    	collapsed: false,
  	}
  	toggleCollapsed = () => {
    	this.setState({
      	collapsed: !this.state.collapsed,
    	});
  	}
	render() {
		return (
			<div style={{ width: 240 }}>
				<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
				  <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
				</Button>
				<Menu
				  defaultSelectedKeys={['1']}
				  defaultOpenKeys={['sub1']}
				  mode="inline"
				  theme="dark"
				  inlineCollapsed={this.state.collapsed}
				>
				  <Menu.Item key="1">
				    <Icon type="layout" />
				    <span>Dashboard</span>
				  </Menu.Item>
				  <Menu.Item key="2">
				    <Icon type="team" />
				    <span>My Buddies</span>
				  </Menu.Item>
				  <Menu.Item key="3">
				    <Icon type="search" />
				    <span>Search</span>
				  </Menu.Item>
				  <Menu.Item key="4">
				    <Icon type="star" />
				    <span>Honor Societies</span>
				  </Menu.Item>
				  <Menu.Item key="5">
				    <Icon type="idcard" />
				    <span>My Profile</span>
				  </Menu.Item>
	        </Menu>
	      </div>
	    );
	}
 }

export default Navbar;
