import React from 'react'
import {Form, Input, DatePicker} from 'antd'
import moment from 'moment'

function EditPostForm() {

  const handleDisabledDate = (currentDate) => {
    const yesterday = moment().add(-1, 'days')
    const futureDate = moment().add(3, 'days')
    return currentDate < yesterday || currentDate > futureDate;
}

  return (
    <div>
      <Form.Item
        name='body'
        label='Deescription'
        rules={[{required: true, message: 'This is required field'}]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name='post_date'
        label='Post Date'
        rules={[{required: true, message: 'This is required field'}]}
      >
        <DatePicker
          disabledDate = {handleDisabledDate}
        />
      </Form.Item>
    </div>
  )
}

export default EditPostForm