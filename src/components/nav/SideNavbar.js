import React, {useState} from 'react'
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Link } from 'react-router-dom';

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
        <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
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