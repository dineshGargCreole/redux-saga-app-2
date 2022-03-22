import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import UsersReducer from "./UsersReducer";
import AppReducer from "./AppReducer";

const rootReducer = combineReducers({
    postsReducer: PostsReducer,
    usersReducer: UsersReducer,
    appReducer: AppReducer,
})

export default rootReducer;