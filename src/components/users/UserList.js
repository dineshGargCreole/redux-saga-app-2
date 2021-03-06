import React from 'react'
import {Table} from 'antd'
import {connect} from 'react-redux'

function UserList(props) {

  const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
      },
      {
          title: 'Website',
          dataIndex: 'website',
          key: 'website',
      }
  ];
  return (
    <div>
        <Table
            dataSource={props.users}
            columns={columns}
            rowKey={(item) => item.id}
        />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      users: state.appReducer.items.length===0 ? state.usersReducer.users : state.appReducer.items,
  }
}

export default connect(mapStateToProps, null) (UserList)