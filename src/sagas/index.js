import { all } from 'redux-saga/effects';
import authSaga from './auth';
import layoutSaga from './layout';
import dashboardSaga from './dashboards';

export default function* rootSaga() {
  yield all([authSaga(), layoutSaga(), dashboardSaga()]);
}
