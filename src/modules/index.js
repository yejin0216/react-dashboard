import { combineReducers } from 'redux';
import authReducer from './auth';
import layoutReducer from './layout';
import alertReducer from './alerts';
import dashboardReducer from './dashboards';

const rootReducer = combineReducers({
  auth: authReducer, // 사용자 인증(로그인)
  layout: layoutReducer, // 레이아웃
  alert: alertReducer, // alert
  dashboards: dashboardReducer, // 대시보드
});

export default rootReducer;
