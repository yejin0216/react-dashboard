import axios from 'axios';
import { HOST_DASHBOARD_API } from './constants';

// 로그인
export const login = async (userInfo) => {
  return await axios.post(`${HOST_DASHBOARD_API}/auth`, userInfo);
};

// 로그아웃
export const logout = () => {
  localStorage.clear();
}

