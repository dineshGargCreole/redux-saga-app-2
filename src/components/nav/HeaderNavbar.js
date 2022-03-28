import React from 'react'
import { Layout, Menu, Button } from 'antd';
import { Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import SearchNav from './SearchNav'
import { useDispatch } from 'react-redux';
import {logoutUser} from '../../redux/action'
import './Nav.css'

const { Header } = Layout;

function HeaderNavbar({params}) {
  const dispatch = useDispatch();
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
        <Avatar style={{ backgroundColor: '#87d068'}} icon={<UserOutlined />} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
            <Menu.Item key="1">
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/users'>Users</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/graphs'>Graphs</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Button type='text' onClick={() => dispatch(logoutUser())} className='nav-logout-btn'>
                Logout
              </Button>
            </Menu.Item>
            <Menu.Item key="3">
              <SearchNav params={params} />
            </Menu.Item>
        </Menu>
    </Header>
  )
}

export default HeaderNavbar