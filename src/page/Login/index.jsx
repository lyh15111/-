import React, { useContext,useState } from 'react'
import { context } from '../../component/AppProvider';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';

 function Index () {
    // const [form,setFtom]=useState('');
    const [user,setUser]=useState('');
    const [passwork,setPassWork]=useState('');
    const {setLogined}=useContext(context)

 function onFinish(value){

     if(user==='123'&&passwork==='123'){
       console.log('登录成功')
       setLogined(true)
      //  return history.push('/home')
     }else{
       alert("登录失败:用户名或密码错误")
     }
  };
 function hanldUser(e){
    setUser(e.target.value)
    console.log(e.target.value)
  }
 function hanldPass(e){
    setPassWork(e.target.value)
    console.log(e.target.value)
  }


    return (

        <div className='login'>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} value={user} maxLength="200px" onChange={hanldUser} placeholder="Username" />
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
          onChange={hanldPass}
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
    {/* {
      this.state.usern && <Navigate to="/index" replace={true} />
    } */}
    </div>

    )
  }

export default Index
