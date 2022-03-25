import React from 'react'
import {Form, DatePicker, Button} from 'antd'
import moment from 'moment'

function PostDateForm({form, onFinish, onPrevious}) {

  const handleDisabledDate = (currentDate) => {
    const yesterday = moment().add(-1, 'days')
    const futureDate = moment().add(3, 'days')
    return currentDate < yesterday || currentDate > futureDate;
  }

  return (
    <Form
      layout='vertical'
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        name='post_date'
        label='Post Date'
        rules={[{required: true, message: 'This is required field'}]}
      >
        <DatePicker
          disabledDate = {handleDisabledDate}
        />
      </Form.Item>

      <Form.Item>
        <Button className='btn-submit' htmlType='submit'>Submit</Button>
        <Button className='btn-submit btn-previous' onClick={onPrevious}>Previous</Button>
      </Form.Item>
    </Form>
  )
}

export default PostDateForm