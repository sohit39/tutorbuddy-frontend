import React, { Component } from 'react';
import { Button, Radio, Icon } from 'antd';
import logo from './IMG_0671.png';
class Homepage extends React.Component {
    render() {
      return (
     <div class="home">
        <h1 class="title">Tutor<span class="buddy">Buddy</span></h1>
        <img class="title" id="homeLogo" src={logo} alt="logo"></img>
       <div class="title" id="description"> <i>The One Stop For <span class="buddy">All</span> Your Tutoring Needs</i> </div>
        <div class="homeButtons">

        </div>
      </div>

      );
    }
  }
  export default Homepage;
