import { handleAsyncActions } from 'utils/asyncUtils';
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL } from './utils/actionType';

// action
// 로그인
export const loginAction = user => {
  return { type: LOGIN, payload: user }
};
// 로그인 성공
export const loginSuccessAction = response => {
  return { type: LOGIN_SUCCESS, response }
}
// 로그인 실패
export const loginErrorAction = error => {
  return { type: LOGIN_FAIL, error }
}
// 로그아웃
export const logoutAction = () => {
  return { type: LOGOUT }
};

// initial state
const initialState = null;

// reducer
export default function authReducer(state= initialState, action) {
  switch (action.type)  {
    case LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_FAIL:
      return handleAsyncActions(LOGIN, 'auth')(state, action);
    default:
      return state;
  }
};