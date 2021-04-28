import { AUTH_AXIOS } from 'axios.config';
import { HOST_WIDGETS_API } from 'store/constants';

// 위젯 템플릿 조회
export const getWidgetTemplates = async () => {
  return await AUTH_AXIOS.get(`${HOST_WIDGETS_API}/templates/map`);
}

// 위젯 목록 조회
export const getWidgetsByDashboard = async (dashboardId) => {
  return await AUTH_AXIOS.get(`${HOST_WIDGETS_API}/${dashboardId}`);
}

// 위젯 상세 조회
export const getWidget = async (dashboardId, widgetId) => {
  return await AUTH_AXIOS.get(`${HOST_WIDGETS_API}/${dashboardId}/${widgetId}`);
}

// 위젯 신규 등록
export const saveWidget = async (dashboardId, request) => {
  return await AUTH_AXIOS.post(`${HOST_WIDGETS_API}/${dashboardId}`, request);
}

// 위젯 수정
export const updateWidget = async (dashboardId, widgetId, request) => {
  return await AUTH_AXIOS.put(`${HOST_WIDGETS_API}/${dashboardId}/${widgetId}`, request);
}

// 위젯 삭제
export const deleteWidget = async (dashboardId, widgetId) => {
  return await AUTH_AXIOS.delete(`${HOST_WIDGETS_API}/${dashboardId}/${widgetId}`);
}


