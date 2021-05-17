import { call, put, takeLatest } from 'redux-saga/effects';
import * as authApi from 'apis/auth';
import * as type from 'modules/utils/authType';
import * as actions from 'modules/auth';
import * as alerts from 'modules/alerts';
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
      yield put(actions.loginErrorAction(type.INVALID_USER_INFO));
      yield put(
        alerts.setAlertsAction({
          color: 'danger',
          message: '아이디나 비밀번호가 일치하지 않습니다.',
          visible: true,
        }),
      );
      yield call(authApi.clearAllItems);
    } else {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('target_ids', data.target_ids);

      yield put(actions.loginSuccessAction(data));
      yield history.push('/dashboards');
    }
  } catch (e) {
    yield put(actions.loginErrorAction(e));
    yield put(
      alerts.setAlertsAction({
        color: 'danger',
        message: '탈퇴했거나 존재하지 않는 계정입니다.',
        visible: true,
      }),
    );
    yield call(authApi.clearAllItems);
  }
}

// 로그아웃
function* logoutSaga() {
  yield call(authApi.clearAllItems);
  yield put(actions.logoutAction);
  history.push('/auth');
}

// 액션이 디스패치되면 실행된다.
export default function* authSaga() {
  yield takeLatest(type.LOGIN, loginSaga);
  yield takeLatest(type.LOGOUT, logoutSaga);
}
