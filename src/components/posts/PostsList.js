import React, {useState} from 'react'
import { Col, Row, Pagination } from 'antd';
import {connect} from 'react-redux'
import TabsCard from '../card/TabsCard';

function PostsList(props) {
    const posts = props.posts;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(12);
    const [pageSize, SetPageSize] = useState(12);

    const handleChange = (value) => {
        setStart((value-1)*pageSize);
        setEnd(value * pageSize);
    }

  return (
    <div>
        <Row gutter={[16, 16]}>
            {
                posts.slice(start, end).map((post) => {
                    return (
                        <Col span={6} key={post.id}>
                            <TabsCard
                                post={post}
                                setIsModalOpen={props.setIsModalOpen}
                                confirmDeleteModal={props.confirmDeleteModal}
                            />
                        </Col>
                    )
                })
            }
        </Row>
        <div>
            <Pagination
                defaultCurrent={1}
                total={posts.length}
                pageSize={pageSize}
                onChange={handleChange}
                className='posts-card-pagination'
            />
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        posts: state.appReducer.items.length===0 ? state.postsReducer.posts : state.appReducer.items,
    }
}

export default connect(mapStateToProps, null) (PostsList)