import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './action';

async function userFetch() {
    const res = await fetch('https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/');
    return await res.json();
}

function* workGetUsersFetch() {
    const users = yield call(userFetch);
    yield put({ type: GET_USERS_SUCCESS, users });
}

function* myData() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default myData;