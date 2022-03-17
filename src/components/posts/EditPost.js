import React, {useState} from 'react'
import {Form, Button, Divider, Space} from 'antd'
import EditPostForm from './EditPostForm';
import moment from 'moment'
import './EditPost.css'
import {connect} from 'react-redux'
import {editPost} from '../../redux/action'

function EditPost(props) {
  console.log('ppp', props)
  const {post, onCancel, isEdit, setEdit} = props
  const [form] = Form.useForm();

  const handleEdit = () => {
    form.setFieldsValue({
      body: post.body,
      post_date: moment(post.post_date)
    })
    setEdit(true);
  }

  const handleFinish = (data) => {
    const editedPost = {
      ...data,
      post_date: data['post_date'].format('YYYY-MM-DD'),
      id: post.id,
      userId: post.userId,
      title: post.title,
    }
    editPost(editedPost);
    onCancel()
  }
  return (
    <div>
      <Form form={form} layout='vertical' onFinish={handleFinish}>
        {isEdit ?
          <EditPostForm /> :
          <>
            <p>{post.body}</p>
            <p>Post Date: {post.post_date}</p>
          </>
        }
        
        <Divider />
        <Space className='footer-align'>
          <Button onClick={onCancel}>Cancel</Button>
          {
            isEdit ?
            <Button htmlType='submit' type='primary'>Submit</Button> :
            <Button onClick={handleEdit} type='primary'>Edit</Button>
          }
        </Space>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    post: state.postsReducer?.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editPost: (post) => dispatch(editPost(post))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (EditPost)