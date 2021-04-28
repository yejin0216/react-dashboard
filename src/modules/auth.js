import { handleAsyncActions } from 'utils/asyncUtils';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './utils/actionType';

// action
export const loginAction = user => {
  return { type: LOGIN, payload: user }
};

// initial state
const initialState = null;

// reducer
export const authReducer = (state= initialState, action) => {
  switch (action.type)  {
    case LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_FAIL:
      return handleAsyncActions(LOGIN, 'auth')(state, action);
    default:
      return state;
  }
};