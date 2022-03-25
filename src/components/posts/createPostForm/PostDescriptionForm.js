import React from 'react'
import {Form, Input, Button} from 'antd'

function PostDescriptionForm({form, onFinish, onPrevious}) {
  return (
    <Form
      layout='vertical'
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
            name='body'
            label='Description'
            rules={[{required: true, message: 'This is required field'}]}
        >
          <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button className='btn-submit' htmlType='submit'>Next</Button>
        <Button className='btn-submit btn-previous' onClick={onPrevious}>Previous</Button>
      </Form.Item>
    </Form>
  )
}

export default PostDescriptionForm