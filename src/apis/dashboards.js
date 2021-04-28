import { AUTH_AXIOS } from 'axios.config';
import { HOST_DASHBOARDS_API } from './constants';

// 대시보드 목록 조회
export const getDashboards = async (queryParams) => {
  return await AUTH_AXIOS.get(`${HOST_DASHBOARDS_API}?${queryParams}`);
}

// 대시보드 상세 조회
export const getDashobard = async (dashboardId) => {
  return await AUTH_AXIOS.get(`${HOST_DASHBOARDS_API}/${dashboardId}`);
}

// 신규 대시보드 등록
export const saveDashboard = async (param) => {
  return await AUTH_AXIOS.post(`${HOST_DASHBOARDS_API}`, param);
}

// 대시보드 수정
export const updateDashboard = async (dashboardId, request) => {
  return await AUTH_AXIOS.put(`${HOST_DASHBOARDS_API}/${dashboardId}`, request);
}

// 대시보드 삭제
export const deleteDashboard = async (dashboardId) => {
  return await AUTH_AXIOS.delete(`${HOST_DASHBOARDS_API}/${dashboardId}`);
}

// 즐겨찾기 목록 조회
export const getBookmarks = async () => {
  return await AUTH_AXIOS.get(`${HOST_DASHBOARDS_API}/bookmarks`);
}

