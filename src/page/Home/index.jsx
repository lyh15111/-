import React,{useState,} from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'

import My from '../My'
import Info from '../Info'
import Report from '../Report'
import Notfort from '../NotFort'
import Mune from './Mune'

import { Layout,Button  } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import './index.scss'

const { Header, Sider, Content } = Layout;

function Index() {
     const to=useNavigate();
  const [collapsed,setCollapsed]=useState(false);

 const toggle = () => {
    setCollapsed( !collapsed,);
  };

  return (
    <Layout className='layout_page'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
           <Mune/>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}

              <Button
                type="primary"
                className='signout'
                danger
                icon={<PoweroffOutlined />}
                // loading={loadings[2]}
                onClick={()=>{to('/login');}}
              />

          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              backgroundColor:'#fff',
              borderRadius:'5px'
            }}
          >
            <Routes>
              <Route path='my' element={<My />} />
              <Route path='/*' element={<Info />} />
              <Route path='report' element={<Report />} />
              <Route path='*' element={<Notfort  />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
  )
}

export default Index
