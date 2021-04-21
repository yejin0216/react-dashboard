import { HOST_DASHBOARD_API, GET_DASHBOARDS } from 'store/constants';

function addDashboards(list) {
  return { type: GET_DASHBOARDS, list };
}

/**
 * 대시보드 목록 조회
 * @param queryParams
 * @returns {function(*): Promise<any>}
 */
function getDashboards(queryParams) {
  return (dispatch) => {
    return fetch(`${HOST_DASHBOARD_API}/dashboards?${queryParams}`)
      .then(res => res.json())
      .then(data => dispatch(addDashboards(data)))
  };
}

export {
  addDashboards
}