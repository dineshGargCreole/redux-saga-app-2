import {GET_USERS} from '../constant';
import { getUsersSuccess, getUsersFail } from '../action';
import { getUsersService } from '../../services/UsersServices';
import { takeEvery, call, put, fork } from 'redux-saga/effects';


function* getUsers() {
    yield takeEvery (GET_USERS, function* () {
        try {
            const response = yield call(getUsersService);
            if (response.statusText === 'OK') {
                yield put(getUsersSuccess(response.data))
            }
        } catch(err) {
            yield put(getUsersFail(err.toString()))
        }
    })
}

const UsersSaga = [
    fork(getUsers),
]

export default UsersSaga;