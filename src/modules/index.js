import { combineReducers } from 'redux';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer // 사용자 인증(로그인)
});

export default rootReducer;