import React, { Component, ReactDOM } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    return (
        <div id ="loginForm">
            <h1 id="loginTitle"> Login </h1>
            <Form onSubmit={this.handleSubmit} className="login-form" id="ggrip">
                <FormItem>         
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />        
                </FormItem>
                <FormItem>         
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />        
                </FormItem>
                <FormItem>         
                    
                <Button type="primary" htmlType="submit" className="login-form-button" id="loginbutton">
                    Log in
                </Button>
                <a id ="registerNow" href=""> <div id="registerContainer"> Or register now!</div></a>
                </FormItem>
            </Form>
        </div>
    );
  }
}
export default login;