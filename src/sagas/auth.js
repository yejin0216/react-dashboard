import { call, put, takeLatest } from 'redux-saga/effects';
import * as authApi from 'apis/auth';
import { LOGIN, LOGOUT } from 'modules/utils/actionType';
import { asyncResponseType } from 'modules/utils/asyncUtils';
import history from 'history';

// 로그인
function* loginSaga({ payload }) {
  try {
    const { data } = yield call(authApi.login, payload);
    const { failCount } = data;

    if ( failCount || failCount > 0 ) {
      yield put(asyncResponseType.error(LOGIN, 'INVALID_USER'));
    } else {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('target_ids', data.target_ids);

      yield put(asyncResponseType.success(LOGIN, data));
      history.push('/');
    }
  } catch (e) {
    yield put(asyncResponseType.error(LOGIN, e));
  }
};

// 로그아웃
function* logoutSaga() {
  yield call(authApi.logout);
  yield put(asyncResponseType.default(LOGOUT));
  history.push('/auth');
}

export default function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGIN, logoutSaga);
};