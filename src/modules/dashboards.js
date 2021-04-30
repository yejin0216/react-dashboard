import * as type from 'modules/utils/dashboardsType';
import { handleAsyncActions, reducerUtils } from './utils/asyncUtils';

// action
// 기본, 성공, 실패
// eslint-disable-next-line no-shadow
export const dashboardsAction = (type, payload) => {
  return { type, payload };
};

const initialState = {
  dashboards: reducerUtils.initial(),
  dashboard: reducerUtils.initial(),
};

// reducer
export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_DASHBOARDS_SUCCESS:
    case type.GET_DASHBOARDS_ERROR:
      return handleAsyncActions(type.GET_DASHBOARDS, 'dashboards')(
        state,
        action,
      );
    case type.GET_DASHBOARD_SUCCESS:
    case type.GET_DASHBOARD_ERROR:
      return handleAsyncActions(type.GET_DASHBOARD, 'dashboard')(state, action);
    default:
      return state;
  }
}
