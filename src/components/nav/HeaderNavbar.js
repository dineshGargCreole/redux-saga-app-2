import React from 'react'
import { Layout, Menu } from 'antd';
import { Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons';

const { Header } = Layout;

function HeaderNavbar() {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
        <Avatar style={{ backgroundColor: '#87d068'}} icon={<UserOutlined />} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
        </Menu>
    </Header>
  )
}

export default HeaderNavbar