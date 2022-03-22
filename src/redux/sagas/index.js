import PostsSaga from "./PostsSaga";
import { all } from "redux-saga/effects";
import UsersSaga from './UsersSaga';
import AppSaga from "./AppSaga";

function* rootSaga() {
    yield all ([...PostsSaga, ...UsersSaga, ...AppSaga])
}

export default rootSaga;
 