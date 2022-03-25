import React, {useEffect} from 'react'
import { Column } from '@ant-design/plots';
import {connect} from 'react-redux'
import moment from 'moment'
import {getPosts} from '../../redux/action'

function PostsColumnChart({posts, getPosts}) {
    const today = [];
    const yesterday = [];
    const tomorrow = [];
    const other = [];

    useEffect(() => {
        getPosts();
    },[])

    posts && posts.forEach(post => {
        // console.log(moment().format('YYYY-MM-DD').week())
        if(post.post_date === moment().format('YYYY-MM-DD')){
            today.push(post)
        } else if(post.post_date === moment(). add(-1,'days').format('YYYY-MM-DD')) {
            yesterday.push(post)
        } else if(post.post_date === moment(). add(1,'days').format('YYYY-MM-DD')) {
            tomorrow.push(post)
        } else {
            other.push(post)
        }
    })

    const data = [
        {
          type: 'today',
          percent: (today.length*100)/posts.length,
        },
        {
          type: 'yesterday',
          percent: (yesterday.length*100)/posts.length,
        },
        {
          type: 'tomorrow',
          percent: (tomorrow.length*100)/posts.length,
        },
        {
            type: 'other',
            percent: (other.length*100)/posts.length,
          },
    ];

    const config = {
    data,
    xField: 'type',
    yField: 'percent',
    columnWidthRatio: 0.8,
    xAxis: {
        label: {
        autoHide: true,
        autoRotate: false,
        },
    },
    color: ({type}) => {
        if(type==='today') {
            return 'green'
        } else if(type==='yesterday') {
            return 'red';
        } else if(type==='tomorrow') {
            return 'blue'
        } else if(type==='other') {
            return 'orange'
        }
    },
    // meta: {
    //     type: {
    //     alias: '类别',
    //     },
    //     sales: {
    //     alias: '销售额',
    //     },
    // },
    };
  return (
    <div>
        <Column {...config} />
        <br/>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PostsColumnChart)