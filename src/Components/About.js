import React, { Component } from 'react';
import logo from './IMG_0671.png';
import { Button, Radio, Icon } from 'antd';
class About extends React.Component {
    render() {
      return (
    <div class="aboutMain">
        <div class="aboutMainInner">
            <h1 class="title">About <span class="buddy">Us</span></h1>
            <div id="aboutdescription"> <i>TutorBuddy has been designed to
                ensure that your tutoring hours can be easily tracked and properly credited.
                It makes the life of honour societies easier and it lets individual students
                find out how many more hours they need. Start using TutorBuddy now!</i> </div>
        </div>
        <div id="buttonContainer">
            <Button id="buttonSignUp" size="large" ghost>Log In/Sign Up</Button>
        </div>

        <img class="title" id="homeLogoAbout" src={logo} alt="logo"></img>
    </div>
    );
    }
  }
  export default About;
