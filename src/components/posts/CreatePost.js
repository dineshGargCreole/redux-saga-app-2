import React, {useState} from 'react'
import {Form, Steps} from 'antd'
import {connect} from 'react-redux'
import {newPost} from '../../redux/action'
import PostTitleForm from './createPostForm/PostTitleForm'
import PostDescriptionForm from './createPostForm/PostDescriptionForm'
import PostDateForm from './createPostForm/PostDateForm'
import { useNavigate } from 'react-router-dom'
import { RightCircleOutlined } from '@ant-design/icons';

import './PostForm.css'


function CreatePost(props) {
    const [form] = Form.useForm();
    const [activeStep, setActiveStep] = useState(0);
    const navigate = useNavigate();

    const downloadPic = (image) => {
        const file = image.fileList[0]
        console.log('values', file)
    }

    const handleCreatePost = () => {
        const values = form.getFieldsValue(true)
        const postId = Math.floor(Math.random()*1000)
        const post = {
            ...values,
            userId: postId,
            post_date: values['post_date'].format('YYYY-MM-DD')
        }
        props.newPost(post);
        form.resetFields();
        navigate('/');

    }

    const handleNext = () => setActiveStep(activeStep+1);
    const handlePrevious = () => setActiveStep(activeStep-1);

    const CreatePostForm = [
        {
            title: 'Step1',
            content: <PostTitleForm form={form} onFinish={handleNext} />,
        },
        {
            title: 'Step2',
            content: <PostDescriptionForm form={form} onFinish={handleNext} onPrevious={handlePrevious} />,
        },
        {
            title: 'Step3',
            content: <PostDateForm form={form} onFinish={handleCreatePost} onPrevious={handlePrevious} />,
        },
    ]

  return (
      <div className="site-layout-background layout-background">
        <Steps current={activeStep}>
            {CreatePostForm.map(item => {
                return <Steps.Step key={item.title} title={item.title}  />
            })}
        </Steps>
        <br/><br/>
        <div className='center-form'>
            {CreatePostForm[activeStep].content}
        </div>
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