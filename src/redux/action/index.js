import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL, NEW_POST, NEW_POST_SUCCESS, NEW_POST_FAIL, EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAIL, GET_POST, GET_POST_SUCCESS, GET_POST_FAIL, DELETE_POST, DELETE_POST_SUCCESSS, DELETE_POST_FAIL, GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL, SEARCH, SEARCH_SUCCESS, SEARCH_FAIL, RESET_SEARCH, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../constant";


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

export const editPost = (updatedPost) => {
    return {
        type: EDIT_POST,
        payload: updatedPost,
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

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id,
    }
}

export const deletePostSuccess = () => {
    return {
        type: DELETE_POST_SUCCESSS,
    }
}

export const deletePostFail = (err) => {
    return {
        type: DELETE_POST_FAIL,
        payload: err,
    }
}

export const getUsers = () => {
    return {
        type: GET_USERS,
    }
}

export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users,
    }
}

export const getUsersFail = (err) => {
    return {
        type: GET_USERS_FAIL,
        payload: err,
    }
}

export const search = (data) => {
    return {
        type: SEARCH,
        payload: data,
    }
}

export const searchSuccess = (items) => {
    return {
        type: SEARCH_SUCCESS,
        payload: items,
    }
}

export const searchFail = (err) => {
    return {
        type: SEARCH_FAIL,
        payload: err,
    }
}

export const resetSearch = () => {
    return {
        type: RESET_SEARCH,
    }
}

export const loginUser = (data) => {
    return {
        type: LOGIN,
        payload: data,
    }
}

export const loginUserSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    }
}

export const loginUserFail = (err) => {
    return {
        type: LOGIN_FAIL,
        payload: err,
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT,
    }
}