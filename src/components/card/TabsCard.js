import React, {useState} from 'react'
import { Card, Button, Space } from 'antd';
import {connect} from 'react-redux';
import { deletePost, getPosts } from '../../redux/action';

const tabList = [
    {
      key: 'info',
      tab: 'Info',
    },
    {
      key: 'action',
      tab: 'Action',
    },
  ];


function TabsCard({post, setIsModalOpen, deletePost, getPosts}) {
    const [activeTabKey, setActiveTabKey] = useState('info');

    const contentList = {
      info: post.title,
      action: <Space>
        <Button type='default' onClick={() => setIsModalOpen(post)}>View</Button>
        <Button type='default' danger onClick={() => {deletePost(post.id); getPosts()}}>Delete</Button>
      </Space>,
    };

    const onTabChange = key => {
      setActiveTabKey(key);
    };
    
  return (
    <Card
        title={post.userId}
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={key => {
            onTabChange(key);
        }}
    >
        {contentList[activeTabKey]}
    </Card>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TabsCard)