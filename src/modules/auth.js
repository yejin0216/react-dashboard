import { handleAsyncActions } from './utils/asyncUtils';
import * as type from './utils/authType';

// action
// 로그인
export const loginAction = user => {
  return { type: type.LOGIN, payload: user };
};
// 로그인 성공
export const loginSuccessAction = response => {
  return { type: type.LOGIN_SUCCESS, payload: response };
};
// 로그인 실패
export const loginErrorAction = error => {
  return { type: type.LOGIN_ERROR, error };
};
// 로그아웃
export const logoutAction = () => {
  return { type: type.LOGOUT };
};

// initial state
const initialState = null;

// reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN:
    case type.LOGIN_SUCCESS:
    case type.LOGIN_ERROR:
      return handleAsyncActions(type.LOGIN, 'auth')(state, action);
    default:
      return state;
  }
}
