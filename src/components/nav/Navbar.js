import React, {useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import SideNavbar from './SideNavbar';
import HeaderNavbar from './HeaderNavbar';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Avatar, Image } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Navbar() {
    
  return (
    <>
        <SideNavbar />
        <Layout className="site-layout">
            <HeaderNavbar />
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Bill is a cat.
                </div>
            </Content>
        </Layout>
      </>
  )
}

export default Navbar