import React, { Component } from 'react'
import { Tabs } from 'antd';
import { AppstoreOutlined , ControlFilled  } from '@ant-design/icons';
import Task from './Table/task.jsx'
import Data from './Table/data.jsx'

const { TabPane } = Tabs;
export default class index extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <AppstoreOutlined  />
          任务列表
        </span>
      }
      key="1"
    >
      <Task />
    </TabPane>
    <TabPane
      tab={
        <span>
          <ControlFilled  />
          数据列表
        </span>
      }
      key="2"
    >
      <Data />
    </TabPane>
  </Tabs>
      </div>
    )
  }
}
