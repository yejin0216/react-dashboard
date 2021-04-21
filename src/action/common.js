import {HOST_OPENSERVICE_API, GET_CATEGORIES, HOST_DASHBOARD_API} from 'store/constants';
import axios from 'axios';

/**
 * 공통코드(대시보드 카테고리) 조회
 * @returns {function(*): Promise<any>}
 */
function getCategories() {
  return (dispatch) => {
    return axios.get(`${HOST_DASHBOARD_API}/codes/categories`)
      .then(response => { dispatch({ type:GET_CATEGORIES, response }) })
      .catch(error => { console.log(error) });
  };
}

export {
  getCategories,
}