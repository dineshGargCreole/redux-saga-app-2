import { SEARCH } from "../constant";
import { searchService } from "../../services/Services";
import { call, fork, takeEvery, put } from "@redux-saga/core/effects";
import {searchSuccess, searchFail} from '../action'


function* search() {
    yield takeEvery(SEARCH, function* ({payload}) {
        try {
            const res = yield call(searchService, payload)
            if (res.statusText === 'OK') {
                yield put(searchSuccess(res.data))
            }
        } catch(err) {
            yield put(searchFail(err.toString()));
        }
    })
}


const AppSaga = [
    fork(search),
]

export default AppSaga;