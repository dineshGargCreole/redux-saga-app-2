import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL, NEW_POST, NEW_POST_SUCCESS, NEW_POST_FAIL, EDIT_POST, EDIT_POST_FAIL, EDIT_POST_SUCCESS, GET_POST, GET_POST_FAIL, GET_POST_SUCCESS, DELETE_POST, DELETE_POST_SUCCESSS, DELETE_POST_FAIL } from "../constant";

const initialState = {
    posts: [],
    loading: false,
    error: null,
    post: {},
}

const PostReducer = (state=initialState, action) => {
    switch (action.type) {
        case DELETE_POST:
        case EDIT_POST:
        case GET_POST:
        case NEW_POST:
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
        
        case DELETE_POST_FAIL:
        case GET_POST_FAIL:
        case EDIT_POST_FAIL:
        case NEW_POST_FAIL:
        case GET_POSTS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        
        case DELETE_POST_SUCCESSS:
        case EDIT_POST_SUCCESS:
        case NEW_POST_SUCCESS:
            return {
                ...state,
                loading: false,
            }

        case GET_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loading: false,
            }

        default:
            return state
    }
}

export default PostReducer;