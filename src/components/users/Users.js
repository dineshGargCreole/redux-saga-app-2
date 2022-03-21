import React, {useEffect} from 'react'
import {getUsers} from '../../redux/action'
import {connect} from 'react-redux'
import UserList from './UserList'

function Users(props) {
    useEffect(() => {
        props.getUsers()
    }, []);

  return (
    <div className="site-layout-background layout-background">
        <UserList />
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)