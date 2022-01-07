import { Tabs } from 'antd';
import { AppstoreOutlined , ControlOutlined  } from '@ant-design/icons';

import {Routes,Route ,Link } from "react-router-dom";
import Data from './Item/data'
import Task from './Item/task'

const { TabPane } = Tabs;
const tab=[
  {
    id:1,
    name:'任务列表',
    icon:<AppstoreOutlined />,
    path:''
  },
  {
    id:2,
    name:'数据列表',
    icon:<ControlOutlined />,
    path:'/data'
  }
]
function Index() {
  return (
    <div className="site-card-wrapper">
    <Tabs >
      {
        tab.map((item)=>(

          <TabPane
          tab={
            <Link to={item.path}>
            <span>
              {item.icon}
              {item.name}
            </span>
            </Link>
          }
          key={item.id}

    >
      <Routes>
        <Route path='/data' element={<Data />} />
        <Route path='' element={<Task />} />
      </Routes>
    </TabPane>

        ))
      }
  </Tabs>
  </div>
  )
}

export default Index
