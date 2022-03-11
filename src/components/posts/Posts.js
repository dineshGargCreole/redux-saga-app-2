import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../../redux/action'
import PostsList from './PostsList';
import Loader from './Loader';
import {Modal} from 'antd'

function Posts(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    props.getPosts()
  }, []);

  const handleMadal = (post) => {
    setIsModalOpen(!isModalOpen)
    setPost(post);
    console.log('post', post)
  }
  
  const posts = props.posts.posts;
  const postTitle = post.body?.trim().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');

  return (
    <div>
      <Modal
        title={post.title}
        visible={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>{post.body}</p>
      </Modal>
      { posts.length === 0 ? <Loader /> : <PostsList setIsModalOpen={handleMadal} /> }
    </div>
  )
}

const mapStateToProps = state => {
    return {
      posts: state.postsReducer,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts)