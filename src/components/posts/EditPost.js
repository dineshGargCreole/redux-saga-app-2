import React, {useState} from 'react'
import {Form, Button, Divider, Space} from 'antd'
import EditPostForm from './EditPostForm';
import moment from 'moment'
import './EditPost.css'
import {connect} from 'react-redux'
import {editPost, getPost} from '../../redux/action'

function EditPost(props) {
  const {post, onCancel, isEdit, setIsEdit, editPost, getPost} = props
  const [form] = Form.useForm();

  const handleEdit = (e) => {
    e.preventDefault();
    form.setFieldsValue({
      body: post.body,
      post_date: moment(post.post_date)
    })
    setIsEdit();
  }

  const handleFinish = (data) => {
    const changedPost = {
      ...data,
      post_date: data['post_date'].format('YYYY-MM-DD'),
      id: post.id,
      userId: post.userId,
      title: post.title,
    }
    editPost(changedPost);
    setIsEdit();
    getPost(post.id)
  }

  return (
    <div>
      <Form form={form} layout='vertical' onFinish={handleFinish}>
        {isEdit ?
          <EditPostForm /> :
          <>
            <p>{post.body}</p>
            <p>Post Date: {moment(post.post_date).format('LL')}</p>
          </>
        }
        
        <Divider />
        <Space className='footer-align'>
          <Button onClick={onCancel}>Cancel</Button>
          {
            isEdit ?
            <Button htmlType="submit" type='primary'>Submit</Button> :
            <Button onClick={handleEdit} type='primary'>Edit</Button>
          }
        </Space>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    post: state.postsReducer?.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editPost: (changedPost) => dispatch(editPost(changedPost)),
    getPost: (id) => dispatch(getPost(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (EditPost)