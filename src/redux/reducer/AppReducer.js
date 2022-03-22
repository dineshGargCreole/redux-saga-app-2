import { SEARCH, SEARCH_SUCCESS, SEARCH_FAIL, RESET_SEARCH } from "../constant";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const AppReducer = (state=initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                loading: true,
            }

        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            }

        case SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case RESET_SEARCH:
            return {
                ...state,
                items: [],
            }

        default:
            return state
    }
}

export default AppReducer;