import React from 'react'
import { Breadcrumb } from 'antd';

function SubHeader({subHeader}) {

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>{subHeader}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default SubHeader