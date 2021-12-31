import React, { Component } from 'react'
import { Tabs} from 'antd';
const { TabPane } = Tabs;
export default class data extends Component {
  render() {
    return (
      <div>
        <div>
        <Tabs tabPosition={'left'}>
          <TabPane tab="全部" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="待抄表" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="抄表完成" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
      </div>
    )
  }
}
