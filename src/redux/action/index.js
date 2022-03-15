import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL, NEW_POST, NEW_POST_SUCCESS, NEW_POST_FAIL } from "../constant";


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

export const newPost = () => {
    return {
        type: NEW_POST,
    }
}

export const newPostSuccess = (post) => {
    return {
        type: NEW_POST_SUCCESS,
        payload: post,
    }
}

export const newPostFail = (err) => {
    return {
        type: NEW_POST_FAIL,
        payload: err,
    }
}