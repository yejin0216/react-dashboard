import { call, put, takeLatest } from 'redux-saga/effects';
import * as authApi from 'apis/auth';
import * as type from 'modules/utils/authType';
import * as actions from 'modules/auth';
import history from 'stores/history';

// 로그인
function* loginSaga({ payload }) {
  try {
    // 로그인은 동기로 처리
    const { data } = yield call(authApi.login, payload);
    const { failCount } = data;

    if (failCount || failCount > 0) {
      // 로그인 실패 횟수 카운트
      // 5회 이상 실패할 경우 비밀번호를 초기화한다.
      // TODO: 메시지 처리 필요함. Alert 미작성.
      yield put(actions.loginErrorAction('INVALID_USER'));
      localStorage.clear();
    } else {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('target_ids', data.target_ids);

      yield put(actions.loginSuccessAction(data));
      yield history.push('/dashboards');
    }
  } catch (e) {
    yield put(actions.loginErrorAction(e));
    localStorage.clear();
  }
}

// 로그아웃
function* logoutSaga() {
  yield call(authApi.logout);
  yield put(actions.logoutAction);
  history.push('/auth');
}

// 액션이 디스패치되면 실행된다.
export default function* authSaga() {
  // 로그인, 로그아웃은 디바운스로 처리
  yield takeLatest(type.LOGIN, loginSaga);
  yield takeLatest(type.LOGOUT, logoutSaga);
}
