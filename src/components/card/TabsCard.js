import React, {useState} from 'react'
import { Card, Button, Space } from 'antd';

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


function TabsCard({post, setIsModalOpen}) {
    const [activeTabKey, setActiveTabKey] = useState('info');

    const contentList = {
      info: post.title,
      action: <Space>
        <Button type='default' onClick={() => setIsModalOpen(post)}>View</Button>
        <Button type='default' danger>Delete</Button>
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

export default TabsCard