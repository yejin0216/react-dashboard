import {HOST_DASHBOARD_API, POST_AUTHENTICATION} from "../store/constants";
import axios from 'axios';

/**
 * token 정보를 header에 주입한다.
 * @param response
 * @returns {{response: *, type: string}}
 */
function saveAuthentication(response) {
  if ( !response.failCount || response.failCount === 0 ) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access_token}`; //inject to header
  }
  return {type:POST_AUTHENTICATION, response};
}

/**
 * login api 호출
 * @param userInfo
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
function login(userInfo) {
  return (dispatch) => {
    return axios.post(`${HOST_DASHBOARD_API}/auth/`, userInfo)
      .then(response => { dispatch(saveAuthentication(response)) })
      .catch(error => { console.log(error) });
  };
}

export default login;