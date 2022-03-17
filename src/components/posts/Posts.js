import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getPosts, getPost} from '../../redux/action'
import PostsList from './PostsList';
import Loader from './Loader';
import {Modal} from 'antd'
import EditPost from './EditPost';

function Posts(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [post, setPost] = useState({});
  const [editingId, setEditingId] = useState();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    props.getPosts()
  }, []);

  useEffect(() => {
    props.getPost(editingId);
    setEditingId(null);
  }, [isModalOpen])

  const handleMadal = (post) => {
    setIsModalOpen(!isModalOpen)
    setEditingId(post.id)
    // props.getPost(post.id)
    // setPost(post);
  }

  const onCancel = () => {
    setIsModalOpen(false);
    setIsEdit(false);
  }
  
  const posts = props.posts.posts;

  return (
    <div>
        <Modal
          title={props.post.title}
          visible={isModalOpen}
          footer={null}
          onOk={() => setIsModalOpen(false)}
          onCancel={onCancel}
        >
          <EditPost onCancel={onCancel} isEdit={isEdit} setEdit={() => setIsEdit(true)} />
        </Modal>
      { posts.length === 0 ? <Loader /> : <PostsList setIsModalOpen={handleMadal} /> }
    </div>
  )
}

const mapStateToProps = state => {
  console.log('state', state)
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