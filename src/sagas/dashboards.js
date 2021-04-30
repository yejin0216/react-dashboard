import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from 'apis/dashboards';
import * as actions from 'modules/dashboards';
import * as type from 'modules/utils/dashboardsType';

// 대시보드 목록 조회
function* getDashboardsSaga({ payload }) {
  try {
    const { data } = yield call(api.getDashboards, payload);
    yield put(actions.dashboardsAction(type.GET_DASHBOARDS_SUCCESS, data));
  } catch (e) {
    yield put(actions.dashboardsAction(type.GET_DASHBOARDS_ERROR, e));
  }
}

// 대시보드 조회
function* getDashboardSaga({ payload }) {
  try {
    const { data } = yield call(api.getDashboard, payload);
    yield put(actions.dashboardsAction(type.GET_DASHBOARD_SUCCESS, data));
  } catch (e) {
    yield put(actions.dashboardsAction(type.GET_DASHBOARD_ERROR, e));
  }
}

// 액션이 디스패치되면 실행된다.
export default function* dashboardSaga() {
  yield takeEvery(type.GET_DASHBOARDS, getDashboardsSaga);
  yield takeEvery(type.GET_DASHBOARD, getDashboardSaga);
}
