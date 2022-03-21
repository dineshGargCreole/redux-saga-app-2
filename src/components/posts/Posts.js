import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getPosts, getPost} from '../../redux/action'
import PostsList from './PostsList';
import Loader from './Loader';
import {Modal} from 'antd'
import EditPost from './EditPost';

function Posts(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    props.getPosts()
  }, []);

  const handleMadal = (post) => {
    setIsModalOpen(!isModalOpen);
    props.getPost(post.id)
  }

  const onCancel = () => {
    setIsModalOpen(false);
    setIsEdit(false);
  }
  
  const posts = props.posts.posts;

  return (
    <div className="site-layout-background layout-background">
        <Modal
          title={props.post.title}
          visible={isModalOpen}
          footer={null}
          onOk={() => setIsModalOpen(false)}
          onCancel={onCancel}
        >
          <EditPost onCancel={onCancel} isEdit={isEdit} setIsEdit={() => setIsEdit(!isEdit)} />
        </Modal>
      { posts.length === 0 ? <Loader /> : <PostsList setIsModalOpen={handleMadal} /> }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.postsReducer,
    post: state.postsReducer.post,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
    getPost: (id) => dispatch(getPost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts)