import {getPostsService, createPostService} from '../../services/PostsServices'
import {call, put, takeEvery, fork} from 'redux-saga/effects'
import {setPosts, rejectPosts} from '../action'
import {GET_POSTS, NEW_POST} from '../constant'


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

function* handleCreatePost() {
    try {
        
    } catch(err) {}
}


function* createPost() {
    yield takeEvery(NEW_POST, handleCreatePost)
}


const PostsSaga = [
    fork(getPosts),
]

export default PostsSaga;