import {getPostsService, createPostService, editPostService, getPostService} from '../../services/PostsServices'
import {call, put, takeEvery, fork} from 'redux-saga/effects'
import {setPosts, rejectPosts, newPostSuccess, newPostFail, editPostSuccess, editPostFail, getPostSuccess, getPostFail} from '../action'
import {EDIT_POST, GET_POST, GET_POSTS, NEW_POST} from '../constant'


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


function* handleCreatePost({payload}) {
    try {
        const response = yield call(createPostService, payload)
        if(response.status === 201) {
            yield put(newPostSuccess())
        }
    } catch(err) {
        yield put(newPostFail())
    }
}


function* createPost() {
    yield takeEvery(NEW_POST, handleCreatePost)
}


function* handleEditPost({payload}) {
    try {
        const response = yield call(editPostService, payload)
        if(response.status === 201) {
            yield put(editPostSuccess())
        }
    } catch(err) {
        yield put(editPostFail())
    }
}

function* editPost() {
    yield takeEvery(EDIT_POST, handleEditPost)
}


function* handleGETPost({payload}) {
    try {
        const response = yield call(getPostService, payload)
        if(response.statusText === 'OK') {
            console.log('res', response)
            yield put(getPostSuccess(response.data))
        }
    } catch(err) {
        yield put(getPostFail())
    }
}

function* getPost() {
    yield takeEvery(GET_POST, handleGETPost)
}


const PostsSaga = [
    fork(getPosts),
    fork(createPost),
    fork(editPost),
    fork(getPost),
]

export default PostsSaga;