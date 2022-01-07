import React from 'react'
import { Tabs } from 'antd';
import { AppstoreOutlined , ControlOutlined  } from '@ant-design/icons';
import {Routes,Route ,Link } from "react-router-dom";

const { TabPane } = Tabs;
const tasklist=[
  {
    id:1,
    name:'全部',
    path:'1'
  },
  {
    id:2,
    name:'待抄表',
    path:'2'
  },
  {
    id:3,
    name:'抄表中',
    path:'3'
  },
  {
    id:4,
    name:'抄表完成',
    path:'4'
  }
]
function task() {

  return (
    <div className="site-card-wrapper">
    <Tabs >
      {
        tasklist.map((item)=>(

          <TabPane
          tab={
            // <Link to={item.path}>
            <span>
              {item.name}
            </span>
            // </Link>
          }
          key={item.id}

    >
      {item.path}
      {/* <Routes>
        <Route path='/data' element={<Data />} />
        <Route path='' element={<Task />} />
      </Routes> */}
    </TabPane>

        ))
      }
  </Tabs>
  </div>
  )
}

export default task
