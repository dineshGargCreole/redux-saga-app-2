import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import UsersReducer from "./UsersReducer";

const rootReducer = combineReducers({
    postsReducer: PostsReducer,
    usersReducer: UsersReducer,
})

export default rootReducer;