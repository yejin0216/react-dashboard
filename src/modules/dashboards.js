// export const GET_DASHBOARDS = 'GET_DASHBOARDS';
//
// /**
//  * 대시보드 목록 조회
//  * @param queryParams
//  * @returns {function(*): Promise<any>}
//  */
// function getDashboards(queryParams) {
//   return (dispatch) => {
//     return axios.get(`${HOST_DASHBOARD_API}/dashboards?${queryParams}`)
//       .then(response => { dispatch({ type:GET_DASHBOARDS, payload:response.data }) })
//       .catch(error => { console.log(error) });
//   };
// }
//
// export {
//   getDashboards
// }