import { AuthTypes, User } from '../../types';

export const singInRequest = (data: User) => { 
  return {
    type: AuthTypes.AUTH_SING_IN_REQUEST,
    payload: { data }
  }
}

export const singInSuccess = (user: User, token: User): any => {
  return {
    type: AuthTypes.AUTH_SING_IN_REQUEST,
    payload: { user, token }
  }
}

export const singFailure = () => {
  return {
    type: AuthTypes.AUTH_SING_FAILURE,
  }
}