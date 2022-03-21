import React, {useEffect} from 'react'
import {getUsers} from '../../redux/action'
import {connect} from 'react-redux'

function Users(props) {
    useEffect(() => {
        props.getUsers()
    }, []);
    console.log('users', props.users)
  return (
    <div className="site-layout-background layout-background">
        Users
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