import React, {useEffect, useState} from 'react'
import { Input } from 'antd';
import { connect } from 'react-redux';
import { search } from '../../redux/action';
import './Nav.css'

const { Search } = Input;

function SearchNav({params, search, getUsers}) {
    const [text, setText] = useState('')
    
    const onSearch = value => {
        const serviceName = params.toLowerCase() || 'posts';
        const data = {
            serviceName: serviceName,
            key: serviceName === 'users' ? 'name' : 'title',
            value: value
        }
        search(data);
        setText('')
    }

  return (
    <div className='search-btn'>
        <Search placeholder="search" onSearch={onSearch} enterButton value={text} onChange={e => setText(e.target.value)} />
    </div>
  )
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        search: (data) => dispatch(search(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchNav);