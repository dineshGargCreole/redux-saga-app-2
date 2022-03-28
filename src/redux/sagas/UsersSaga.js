import {GET_USERS, LOGIN} from '../constant';
import { getUsersSuccess, getUsersFail, loginUserSuccess, loginUserFail } from '../action';
import { getUsersService, logInUserService } from '../../services/UsersServices';
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

function* loginUser() {
    yield takeEvery(LOGIN, function* ({payload}) {
        try {
            const response = yield call(logInUserService, payload)
            if (response.statusText === 'OK') {
                if(response.data.length !== 0) {
                    localStorage.setItem('username', response.data[0].username);
                    localStorage.setItem('password', response.data[0].password);
                }
                yield put(loginUserSuccess(response.data))
            }
        } catch(err) {
            yield put(loginUserFail(err.toString()));
        }
    })
}

const UsersSaga = [
    fork(getUsers),
    fork(loginUser),
]

export default UsersSaga;