import React from 'react'
import {Form, Button, Input, Checkbox} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from '../../redux/action'
import './home.css'

function Home() {
    const dispatch = useDispatch();

    const onFinish = (data) => {
        dispatch(loginUser(data));
    }


  return (
    <div className="site-layout-background layout-background">
        <Form
            name="login"
            layout='vertical'
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            className='login-form'
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                { required: true, message: 'Please input your password!' },
                // {min:6, message: 'Password must be minimum 6 characters'}
                // {pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: 'Password should be minimum 8 characters with at least one number'}
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            label="Retype Your Password"
            name="retypePassword"
            dependencies={['password']}
            hasFeedback
            rules={[
                { required: true, message: 'Please input your password!' },
                ({getFieldValue}) => ({
                    validator(_, value) {
                        if(!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }
                        return Promise.reject(new Error('Both password do not match!'))
                    }
                })
            ]}
        >
            <Input.Password />
        </Form.Item>
        
        {/* <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
        </Form>
    </div>
  )
}


export default Home