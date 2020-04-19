import produce from 'immer';
import { AuthTypes, UserState } from '../../types';


const INITIAL_STATE: UserState = {
  data: null,
  token: null,
  loggedIn: false,
  loading: false,
  error: false
}

export default function authReducer(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case AuthTypes.AUTH_SING_IN_REQUEST: 
      return { 
        ...draft, loading: true
      }

      case AuthTypes.AUTH_SING_IN_SUCCESS:
        return {
          ...draft, loading: false, error: false, loggedIn: true,
          data: action.payload.data, token: action.payload.token          
        }

      case AuthTypes.AUTH_SING_FAILURE:
        return {
          ...draft, loading: false
        }

      default:
        return state;
    }
  });
}