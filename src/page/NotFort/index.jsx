import React from 'react'
import { Empty, Button } from 'antd';
import { useNavigate}  from 'react-router-dom'


function Index() {
    const to=useNavigate();

  return (
    <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 300,
    }}
    description={
      <span>
        页面被狗狗吃掉啦！
      </span>
    }
  >
    <Button onClick={()=>{
      to('/')
    }}  type="primary">点我返回主页</Button>
  </Empty>
  )
}

export default Index
