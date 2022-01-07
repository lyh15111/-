import React from 'react'

import {Link} from 'react-router-dom'
import {  Menu } from 'antd';
import {
  BankOutlined,
  UploadOutlined ,
  UserOutlined ,
} from '@ant-design/icons';
import './index.scss'

const munelist=[
  {
    id:'1',
    icon:<BankOutlined />,
    name:"首页",
    path:'/'
  },
  {
    id:'2',
    icon:<UploadOutlined />,
    name:"上报",
    path:'/report'
  },
  {
    id:'3',
    icon:<UserOutlined />,
    name:"我的",
    path:'/my'
  }
]
function Index() {

  return (
        <div className='mune_page'>
          <div className="logo" >
            logo
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
              munelist.map((item)=>(
                <Menu.Item key={item.id} icon={item.icon}>
                  <Link to={item.path}>
                  {item.name}
                  </Link>
                </Menu.Item>
              ))
            }
            {/* <Menu.Item key="1" icon={<BankOutlined />}>
              <Link to='/'>
              首页
              </Link>
            </Menu.Item>


            <Menu.Item key="2" icon={<UploadOutlined  />}>
              <Link to='/report'>
              上报
              </Link>
            </Menu.Item>


            <Menu.Item key="3" icon={<UserOutlined  />}>
              <Link to='/my'>
              我的
              </Link>
            </Menu.Item> */}


          </Menu>
       </div>
  )
}

export default Index
