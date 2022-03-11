import Posts from './components/posts/Posts'
import Navbar from './components/nav/Navbar';
import './App.css';
import Global from './GlobalStyles'
import { Layout, Breadcrumb } from 'antd';
import HeaderNavbar from './components/nav/HeaderNavbar';
import SideNavbar from './components/nav/SideNavbar';
import SubHeader from './components/nav/SubHeader';

const { Content } = Layout;

function App() {
  return (
    <div className="">
      <Global />
      <Layout style={{ minHeight: '100vh' }}>
        <SideNavbar />
        <Layout className="site-layout">
            <HeaderNavbar />
            <Content style={{ margin: '0 16px' }}>
                <SubHeader />
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <Posts />
                </div>
            </Content>
        </Layout>
        {/* <Navbar /> */}
        {/* <Posts /> */}
      </Layout>
    </div>
  );
}

export default App;
