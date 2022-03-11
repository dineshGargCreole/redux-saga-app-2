import {getPostsService} from '../../services/PostsServices'
import {call, put, takeEvery, fork} from 'redux-saga/effects'
import {setPosts, rejectPosts} from '../action'
import {GET_POSTS} from '../constant'


function* handleGetPosts() {
    try {
        const posts = yield call(getPostsService);
        yield put(setPosts(posts));

    } catch(err) {
        yield put(rejectPosts(err.toString()));
    }
}

function* getPosts() {
    yield takeEvery(GET_POSTS, handleGetPosts)
}


const PostsSaga = [
    fork(getPosts),
]

export default PostsSaga;