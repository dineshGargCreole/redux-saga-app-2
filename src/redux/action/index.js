import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from "../constant";


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