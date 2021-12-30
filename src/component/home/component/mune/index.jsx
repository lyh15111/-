import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  BankOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.scss'

export default class Index extends Component {
  render() {
    return (
      <div className='mune'>
          <Menu className='mune_conter' theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item className='mune_item' key="home" icon={< BankOutlined  />}>
             <Link to={"/home"}>首页</Link>
            </Menu.Item>
            <Menu.Item className='mune_item' key="my" icon={<UserOutlined />}>
              <Link to={"/my"}>我的</Link>
            </Menu.Item>
            <Menu.Item className='mune_item' key="upload" icon={<UploadOutlined />}>
              <Link to={"/upload"}>上报</Link>
            </Menu.Item>
          </Menu>
      </div>
    )
  }
}
