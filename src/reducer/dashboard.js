import actions from 'action';

const { GET_DASHBOARDS } = actions.dashboard;

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
      return [
        ...state,
        dashboard(undefined, action)
      ];
  }
}

export default dashboards;


