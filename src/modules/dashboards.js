import * as type from 'modules/utils/dashboardsType';
import { reducerUtils } from './utils/asyncUtils';

// action
// 기본, 성공, 실패
// eslint-disable-next-line no-shadow
export const dashboardsAction = (type, payload) => {
  return { type, payload };
};

const initialState = {
  dashboards: reducerUtils.initial(),
};

// reducer
export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_DASHBOARDS:
      return {
        ...state,
        dashboards: reducerUtils.loading(state.dashboards.response),
      };
    case type.GET_DASHBOARDS_SUCCESS:
      return {
        ...state,
        dashboards: reducerUtils.success(action.payload),
      };
    case type.GET_DASHBOARDS_ERROR:
      return {
        ...state,
        dashboards: reducerUtils.error(action.error),
      };
    case type.POST_DASHBOARD:
      return {
        ...state,
        dashboards: reducerUtils.loading(state.dashboards.response),
      };
    case type.POST_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboards: reducerUtils.success([
          action.payload,
          ...state.dashboards.response,
        ]),
      };
    case type.POST_DASHBOARD_ERROR:
      return {
        ...state,
        dashboards: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
}
