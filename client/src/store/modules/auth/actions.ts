import { action } from 'typesafe-actions';
import { AuthTypes, User } from '../../types';

export const singInRequest = (email: User) => { 
  action(AuthTypes.AUTH_SING_IN_REQUEST, { email });
}

export const singInSuccess = (user: User, token: User): any => {
  action(AuthTypes.AUTH_SING_IN_SUCCESS, { user, token });
}

export const singFailure = () => action(AuthTypes.AUTH_SING_FAILURE);