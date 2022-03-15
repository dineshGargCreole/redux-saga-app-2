import React from 'react'
import {Button, Form, Input} from 'antd'

import './PostForm.css'

function CreatePost() {

    const handleCreatePost = (values) => {
        const postId = Math.floor(Math.random()*1000)
        const post = {
            ...values,
            userId: postId,
            id: postId,
        }
    }

  return (
    <Form
        name='post-form'
        layout='vertical'
        onFinish={(values) => handleCreatePost(values)}
    >
        <Form.Item
            name='title'
            label='Title'
        >
            <Input />
        </Form.Item>

        <Form.Item
            name='body'
            label='Description'
        >
            <Input.TextArea />
        </Form.Item>

        <Form.Item>
            <Button className='btn-submit' htmlType='submit'>Submit</Button>
        </Form.Item>
    </Form>
  )
}

export default CreatePost