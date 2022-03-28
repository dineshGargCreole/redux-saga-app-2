import React, {useState, useEffect} from 'react';
import Posts from './components/posts/Posts'
import './App.css';
import Global from './GlobalStyles'
import { Layout} from 'antd';
import HeaderNavbar from './components/nav/HeaderNavbar';
import SideNavbar from './components/nav/SideNavbar';
import SubHeader from './components/nav/SubHeader';
import {Routes, Route, useLocation} from 'react-router-dom';
import CreatePost from './components/posts/CreatePost'
import Users from './components/users/Users';
import GraphChart from './components/graph/GraphChart'
import Home from './components/home/Home'
import {connect} from 'react-redux'
import {loginUser} from './redux/action'


const { Content } = Layout;

function App(props) {
  const location = useLocation();
  const [params, setParams] = useState('')

  useEffect(() => {
    const path = location.pathname.slice(1);
    if (path) {
      setParams(path[0].toUpperCase() + path.slice(1).toLowerCase());
    } else {
      setParams('')
    }
  }, [location])

  useEffect(() => {
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    const data = {
      username: username,
      password, password
    }

    props.loginUser(data);
  },[])

  return (
    <div className="">
      <Global />
      <Layout style={{ minHeight: '100vh' }}>
        <SideNavbar />
        <Layout className="site-layout">
            <HeaderNavbar params={params} />
            <Content style={{ margin: '0 16px' }}>
                <SubHeader subHeader={params} />
                  <Routes>
                    <Route exact path='/' element={props.loggedUser.length === 0 ? <Home /> : <Posts />} />
                    <Route exact path='/post' element={<CreatePost />} />
                    <Route exact path='/users' element={<Users />} />
                    <Route exact path='/graphs' element={<GraphChart />} />
                  </Routes>
            </Content>
        </Layout>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.usersReducer.loggedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
