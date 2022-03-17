import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL, NEW_POST, NEW_POST_SUCCESS, NEW_POST_FAIL, EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAIL, GET_POST, GET_POST_SUCCESS, GET_POST_FAIL } from "../constant";


export const getPosts = () => {
    return {
        type: GET_POSTS,
    }
}

export const setPosts = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts,
    }
}

export const rejectPosts = (err) => {
    return {
        type: GET_POSTS_FAIL,
        payload: err
    }
}

export const newPost = (post) => {
    return {
        type: NEW_POST,
        payload: post,
    }
}

export const newPostSuccess = () => {
    return {
        type: NEW_POST_SUCCESS,
    }
}

export const newPostFail = (err) => {
    return {
        type: NEW_POST_FAIL,
        payload: err,
    }
}

export const editPost = (post) => {
    return {
        type: EDIT_POST,
        payload: post,
    }
}

export const editPostSuccess = () => {
    return {
        type: EDIT_POST_SUCCESS,
    }
}

export const editPostFail = (err) => {
    return {
        type: EDIT_POST_FAIL,
        payload: err
    }
}

export const getPost = (id) => {
    return {
        type: GET_POST,
        payload: id,
    }
}

export const getPostSuccess = (post) => {
    return {
        type: GET_POST_SUCCESS,
        payload: post,
    }
}

export const getPostFail = (err) => {
    return {
        type: GET_POST_FAIL,
        payload: err,
    }
}