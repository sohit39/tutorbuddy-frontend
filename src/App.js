import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import Leaderboard from "./Components/Leaderboard";
import Tutoring from "./Components/RequestAcceptTutor";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Login from "./Components/login";
import { Affix, Menu, Icon } from 'antd';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <Router basename="/">
        <div>
          <Affix>
              <Menu
                  id="navBar"
                  className = "menu"
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  theme="light"
              >
              <Menu.Item key="/">< Link to = "/">
                  <Icon type="home" />Home</Link>
              </Menu.Item>
              <Menu.Item key="about"><Link to = "/about">
                  <Icon type="info" />About</Link>
              </Menu.Item>
              <Menu.Item key="leaderboard"> <Link to = "/leaderboard">
                  <Icon type="line-chart" />Leaderboard</Link>
              </Menu.Item>
              <Menu.Item key="tutoring"> <Link to = "/tutoring">
                  <Icon type="user"/>Request/Accept a Tutor/Tutee</Link>
              </Menu.Item>
              <Menu.Item key="login"> <Link to = "/login">
                  <Icon id="login" type="login"/>Login</Link>
              </Menu.Item>
              </Menu>
          </Affix>
                <Route exact path="/" component={Homepage}/>
                <Route path="/about" component={About}/>
                <Route path="/leaderboard" component={Leaderboard}/>
                <Route path="/tutoring" component={Tutoring}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Footer}/>
        </div>
      </Router>
    )
  }
}
export default App;
