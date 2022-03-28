import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../constant"

const initialState = {
    users: [],
    loading: false,
    error: null,
    loggedUser: [],
}


const UsersReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                loading: true,
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }

        case LOGIN_FAIL:
        case GET_USERS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        case LOGIN:
            return {
                ...state,
                loading: true,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedUser: action.payload,
            }

        case LOGOUT:
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            return {
                ...state,
                loggedUser: [],

            }

        default:
            return state;
    }
}

export default UsersReducer;