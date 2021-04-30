import { combineReducers } from 'redux';
import authReducer from './auth';
import layoutReducer from './layout';

const rootReducer = combineReducers({
  auth: authReducer, // 사용자 인증(로그인)
  layout: layoutReducer, // 레이아웃
});

export default rootReducer;
