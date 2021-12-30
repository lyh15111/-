import React, { Component } from 'react'
import {Navigate} from 'react-router-dom';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';

export default class Index extends Component {

  constructor(props){
    super(props);
    this.state={
      form:'',
      user:'',
      passwork:'',
      usern: null

    }
  }

  componentDidMount(){
    console.log(this.props);
  }

  onFinish = (e) => {
   const user=this.state.user;
   const pass=this.state.passwork;
     if(user==='123'&&pass==='123'){
       console.log('登录成功')
       this.setState({usern: true})
      //  return history.push('/home')
     }else{
       alert("登录失败")
     }
  };
  hanldUser=(e)=>{
    this.setState({
      user:e.target.value
    })
  }
  hanldPass=(e)=>{
    this.setState({
      passwork:e.target.value
    })
  }


  render() {
    const {user,passwork}=this.state

    return (

        <div className='login'>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} value={user} maxLength="200px" onChange={this.hanldUser} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          maxLength="200px"
          value={passwork}
          onChange={this.hanldPass}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Button type='text'name="forget" className="login-form-forgot">
          忘记密码
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" style={{width:'100%'}} htmlType="submit" className="login-form-button">
          Log in
        </Button><br/>
         <Button type='text' >注册账号</Button>
      </Form.Item>
    </Form>
    {
      this.state.usern && <Navigate to="/index" replace={true} />
    }
    </div>

    )
  }
}
