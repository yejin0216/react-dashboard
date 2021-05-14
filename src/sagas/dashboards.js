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

// 신규 대시보드 등록
function* postDashboardSaga({ payload }) {
  try {
    const { data } = yield call(api.saveDashboard, payload);
    yield put(actions.dashboardsAction(type.POST_DASHBOARD_SUCCESS, data));
  } catch (e) {
    yield put(actions.dashboardsAction(type.POST_DASHBOARD_ERROR, e));
  }
}

// 대시보드 수정
function* putDashboardSaga({ payload }) {
  try {
    const { data } = yield call(api.updateDashboard, payload);
    yield put(actions.dashboardsAction(type.PUT_DASHBOARD_SUCCESS, data));
  } catch (e) {
    yield put(actions.dashboardsAction(type.PUT_DASHBOARD_ERROR, e));
  }
}

// 대시보드 삭제
function* deleteDashboardSaga({ payload }) {
  try {
    const { data } = yield call(api.deleteDashboard, payload);
    yield put(actions.dashboardsAction(type.DELETE_DASHBOARD_SUCCESS, data));
  } catch (e) {
    yield put(actions.dashboardsAction(type.DELETE_DASHBOARD_ERROR, e));
  }
}

// 액션이 디스패치되면 실행된다.
export default function* dashboardSaga() {
  yield takeEvery(type.GET_DASHBOARDS, getDashboardsSaga);
  yield takeEvery(type.POST_DASHBOARD, postDashboardSaga);
  yield takeEvery(type.PUT_DASHBOARD, putDashboardSaga);
  yield takeEvery(type.DELETE_DASHBOARD, deleteDashboardSaga);
}
