import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";

const rootReducer = combineReducers({
    postsReducer: PostsReducer
})

export default rootReducer;