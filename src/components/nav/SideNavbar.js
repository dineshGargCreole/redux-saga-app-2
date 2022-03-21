import React, {useState} from 'react'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
  } from '@ant-design/icons';
  import { Link } from 'react-router-dom';
  import logo from '../../asset/images/logo.png'

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideNavbar() {
    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="11">
            <img src={logo} className='img-logo' />
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="New">
            <Menu.Item key="3">
              <Link to='/post'>Post</Link>
            </Menu.Item>
            <Menu.Item key="4">User</Menu.Item>
        </SubMenu>
        </Menu>
    </Sider>
  )
}

export default SideNavbar