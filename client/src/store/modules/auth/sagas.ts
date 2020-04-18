import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { singInSuccess, singFailure } from './actions';
import { User } from '../../types';

interface DispatchProps {
  singInSuccess(user: User, token: User): void;
}

type Props = User & DispatchProps;

export function* singIn(payload: User) {
  try {
    const { email, password } = payload;

    if (!email || !password) {
      toast.error('preencha todos os seus dados!');
      return;
    }

    const res = yield call(api.post, 'sessions', {
      email
    });

    const { user, token } = res.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    put(singInSuccess(user, token));

    history.push('dashboard')
  } catch (err) {
    toast.error('Houve um problema com a autenticação, verifique suas credenciais!');
    yield put(singFailure());
  }
}