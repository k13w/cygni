/**
 * Action types
 */
export enum AuthTypes {
  AUTH_SING_UP_REQUEST = '@auth/SING_UP_REQUEST',
  AUTH_SING_UP_SUCCESS = '@auth/SING_UP_SUCCESS',
  AUTH_SING_IN_REQUEST = '@auth/SING_IN_REQUEST',
  AUTH_SING_IN_SUCCESS = '@auth/SING_IN_SUCCESS',
  AUTH_SING_FAILURE = '@auth/SING_FAILURE',
  AUTH_SING_OUT = '@auth/SING_OUT',
}

export interface Action<T> {
  type: AuthTypes;
  payload: T;
}

/**
 * Data types
 */
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
}

/**
 * State types
 */
export interface UserState {
  readonly data: null | User;
  readonly token: null | string;
  readonly loading: boolean;
  readonly loggedIn: boolean;
  readonly error?: boolean;
}