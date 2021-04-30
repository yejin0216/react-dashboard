import { all } from 'redux-saga/effects';
import authSaga from './auth';
import layoutSaga from './layout';

export default function* rootSaga() {
  yield all([authSaga(), layoutSaga()]);
}
