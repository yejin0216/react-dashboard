import * as actions from 'modules/layout';
import { put, select, takeLatest } from 'redux-saga/effects';
import * as type from '../modules/utils/layoutType';

export function* getBreadcrumbsSaga(path) {
  const breadcrumbs = yield select(state => state.breadcrumbs);
  // 기존 정보와 다를 경우에만 업데이트한다.
  if (breadcrumbs !== path) {
    yield put(actions.getBreadcrumbs(path));
  }
}

export default function* layoutSaga() {
  yield takeLatest(type.GET_BREADCRUMBS, getBreadcrumbsSaga);
}
