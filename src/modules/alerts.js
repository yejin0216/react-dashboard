import * as type from './utils/alertType';

export const setAlertsAction = payload => {
  return { type: type.SET_ALERT, payload };
};
export const resetAlertsAction = payload => {
  return { type: type.RESET_ALERT, payload };
};

const initialState = {
  color: 'success',
  message: '',
  visible: false,
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case type.SET_ALERT:
      return {
        state,
        ...action.payload
      };
    case type.RESET_ALERT:
      return {
        state,
        ...initialState
      };
    default:
      return state;
  }
}
