import PostsSaga from "./PostsSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
    yield all ([...PostsSaga])
}

export default rootSaga;
 