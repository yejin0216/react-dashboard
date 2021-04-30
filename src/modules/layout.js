import { GET_BREADCRUMBS } from 'modules/utils/actionType';

// breadcrumb 받기
export const getBreadcrumbs = path => {
  return {type: GET_BREADCRUMBS, payload: path};
}

// initial state
const initialState = null;

// reducer
export default function layoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BREADCRUMBS:
      return { ...state, response: action.payload };
    default:
      return state;
  }
}
