import React, { Component } from 'react'
import { Tabs} from 'antd';
const { TabPane } = Tabs;
export default class task extends Component {

  render() {
    return (
      <div>
        <Tabs tabPosition={'left'}>
          <TabPane tab="全部" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="待抄表" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="抄表中" key="3">
            Content of Tab 3
          </TabPane>
          <TabPane tab="抄表完成" key="4">
            Content of Tab 4
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
