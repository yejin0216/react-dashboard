import axios from 'axios';
import { HOST_DASHBOARD_API } from '../store/constants';

// 로그인
export const auth = async (userInfo) => {
  return await axios.post(`${HOST_DASHBOARD_API}/auth`, userInfo);
};
