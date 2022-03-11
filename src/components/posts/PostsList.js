import React from 'react'
import { Card, Col, Row } from 'antd';
import {connect} from 'react-redux'
import TabsCard from '../card/TabsCard';

function PostsList(props) {
    const posts = props.posts.posts;
  return (
    <div>
        <Row gutter={[16, 16]}>
            {
                posts.map((post) => {
                    return (
                        <Col span={6} key={post.id}>
                            <TabsCard
                                post={post}
                                setIsModalOpen={props.setIsModalOpen}
                            />
                        </Col>
                    )
                })
            }
        </Row>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        posts: state.postsReducer
    }
}

export default connect(mapStateToProps, null) (PostsList)