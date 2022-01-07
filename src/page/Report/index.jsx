import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  message
} from 'antd';
import './index.scss'

function Index() {
  const [componentSize, setComponentSize] = useState('small');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const hanldFrom =(e)=>{
    e.preventDefault();

  }

  const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
  return (
    <div className='report_page'>
    <Form
      className='report_form'
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      onFinish={hanldFrom}
      size={componentSize}
    >
      <h1 className='report_title'>事件上报</h1>

      <Form.Item label="事件类型">
        <Select placeholder="漏水">
          <Select.Option value="demo">漏水</Select.Option>
          <Select.Option value="0">爆管</Select.Option>
          <Select.Option value="2">水表损坏</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="发生地点">
        <Input placeholder="发生地点" />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="事件描述">
        <Input.TextArea placeholder="多行输入" autoSize={{ minRows: 3, maxRows: 5 }} />
      </Form.Item>

      <Upload className='report_btn' {...props}>
        <Button size='default' >上传附件</Button>
      </Upload>




        <Button className='report_btn' size='large' type="primary">上传</Button>

    </Form>
    </div>
  )
}

export default Index
