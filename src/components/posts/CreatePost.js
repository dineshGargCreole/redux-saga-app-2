import React from 'react'
import {Button, Form, Input, DatePicker, Upload} from 'antd'
import {connect} from 'react-redux'
import {newPost} from '../../redux/action'
import moment from 'moment'

import './PostForm.css'

function CreatePost(props) {
    const [form] = Form.useForm();

    const handleCreatePost = (values) => {
        const postId = Math.floor(Math.random()*1000)
        const post = {
            ...values,
            userId: postId,
            post_date: values['post_date'].format('YYYY-MM-DD')
        }
        props.newPost(post);
        form.resetFields();
    }

    const handleDisabledDate = (currentDate) => {
        const yesterday = moment().add(-1, 'days')
        const futureDate = moment().add(3, 'days')
        return currentDate < yesterday || currentDate > futureDate;
    }

    const normFile = (e) => {
        console.log('evnt',e)
        if (Array.isArray(e)) {
            console.log('evnt',e)
            console.log('list', e.fileList)
          return e;
        }
      
        return e && e.fileList;
      };

  return (
      <div className="site-layout-background layout-background">
        <Form
            name='post-form'
            layout='vertical'
            onFinish={(values) => handleCreatePost(values)}
            form={form}
            className='center-form'
        >
        <Form.Item
            name='title'
            label='Title'
            rules={[{required: true, message: 'This is required field'}]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name='body'
            label='Description'
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

        <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="longgggggggggggggggggggggggggggggggggg"
        >
            <Upload name="logo" action="/upload.do" listType="picture">
            <Button>Click to upload</Button>
            </Upload>
        </Form.Item>

        <Form.Item>
            <Button className='btn-submit' htmlType='submit'>Submit</Button>
        </Form.Item>
        </Form>
      </div>
    
  )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        newPost: (post) => dispatch(newPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CreatePost)