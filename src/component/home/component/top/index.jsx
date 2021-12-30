import React, { Component } from 'react'
import { Avatar,Button } from 'antd';
import { UserOutlined,PoweroffOutlined,EditOutlined} from '@ant-design/icons';
import './index.scss'

export default class Index extends Component {
  render() {
    return (
      <div className='top'>
          <div className="logo ">
            <div className='logo_txt'>Logo</div>
            <div className="icons-list"> <EditOutlined /></div>
          </div>
          <Avatar className='avatar' size={44} icon={<UserOutlined />} />
          <div className='clos'>
            <Button
            type="primary"
            danger
            icon={<PoweroffOutlined />}
            onClick={() => this.enterLoading(2)}
          />
          </div>

      </div>
    )
  }
}
