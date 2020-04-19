import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { singInSuccess, singFailure } from './actions';
import { Payload } from '../../types';

export function* singIn( { payload }: { payload: Payload }) {
  try {
    const { data } = payload;

    const email = data.email;
    const password = data.password;

    if (!data.email || !data.password) {
      toast.error('preencha todos os seus dados!');
      return;
    }

    const res = yield call(api.post, 'sessions', {
      email, password
    });

    const { user, token } = res.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(singInSuccess(user, token));

    history.push('/dashboard')

  } catch (error) {
    console.log(error.response.data.error);
    toast.error(error.response.data.error);
    yield put(singFailure());
  }
}