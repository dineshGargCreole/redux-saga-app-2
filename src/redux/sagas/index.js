import PostsSaga from "./PostsSaga";
import { all } from "redux-saga/effects";
import UsersSaga from './UsersSaga';

function* rootSaga() {
    yield all ([...PostsSaga, ...UsersSaga])
}

export default rootSaga;
 