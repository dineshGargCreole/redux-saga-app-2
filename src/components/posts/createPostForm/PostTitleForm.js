import React from 'react'
import {Form, Input, Button} from 'antd'

function PostTitleForm({form, onFinish}) {
  return (
    <Form
      layout='vertical'
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
            name='title'
            label='Title'
            rules={[{required: true, message: 'This is required field'}]}
        >
          <Input />
      </Form.Item>

      <Form.Item>
            <Button className='btn-submit' htmlType='submit'>Next</Button>
        </Form.Item>
    </Form>
  )
}

export default PostTitleForm