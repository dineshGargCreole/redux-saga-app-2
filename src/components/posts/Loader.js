import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Loader() {
    const antIcon = <LoadingOutlined spin />;

  return (
    <Spin indicator={antIcon} />
  )
}

export default Loader