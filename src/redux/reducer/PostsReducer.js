import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL, NEW_POST, NEW_POST_SUCCESS, NEW_POST_FAIL } from "../constant";

const initialState = {
    posts: [],
    loading: false,
    error: null,
}

const PostReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: true,
            }

        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            }

        case GET_POSTS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        default:
            return state
    }
}

export default PostReducer;