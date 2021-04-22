import {GET_DASHBOARDS} from 'store/constants';

const dashboard = (state, action) => {
  switch (action.type) {
    case GET_DASHBOARDS:
      return {
        list: action
      };
    default:
      return state;
  }
}

const dashboards = (state = [], action) => {
  switch (action.type) {
    case GET_DASHBOARDS:
      return {...state, list:action.response.data};
    default:
      return state;
  }
}

export default dashboards;


