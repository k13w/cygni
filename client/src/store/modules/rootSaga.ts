import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '.././types';
import { singIn } from './auth/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest<any>(AuthTypes.AUTH_SING_IN_REQUEST, singIn),
    ]);
}