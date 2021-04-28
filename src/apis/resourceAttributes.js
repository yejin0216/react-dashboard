import { AUTH_AXIOS } from 'axios.config';
import {HOST_RESOURCE_WIDGETS_API, HOST_DEVICE_LOGS_API, HOST_DEVICE_API} from './constants';

// 리소스 속성 조회
export const getResourceAttributes = async (widgetId) => {
  return await AUTH_AXIOS.get(`${HOST_RESOURCE_WIDGETS_API}/${widgetId}`);
}

// 리소스 속성 신규 등록
export const saveResourceAttributes = async (widgetId, request) => {
  return await AUTH_AXIOS.post(`${HOST_RESOURCE_WIDGETS_API}/${widgetId}?name=${request.name}`, request);
}

// 리소스 지도 속성 조회
export const getResourceMapAttributes = async (widgetId) => {
  return await AUTH_AXIOS.get(`${HOST_RESOURCE_WIDGETS_API}/${widgetId}/location`);
}

// 리소스 지도 속성 신규 등록
export const saveResourceMapAttributes = async (widgetId, request) => {
  return await AUTH_AXIOS.post(`${HOST_RESOURCE_WIDGETS_API}/${widgetId}/location?name=${request.name}`, request);
}

// 리소스 수집 이력 조회
export const getDeviceCollectLogs = async (deviceId, resourceId, queryParam) => {
  return await AUTH_AXIOS.get(`${HOST_DEVICE_LOGS_API}/collect/${deviceId}/resources/${resourceId}?${queryParam}`);
}

// 리소스 제어 이력 조회
export const getDeviceControlLogs = async (deviceId, resourceId, queryParam) => {
  return await AUTH_AXIOS.get(`${HOST_DEVICE_LOGS_API}/control/${deviceId}/resources/${resourceId}?${queryParam}`);
}

// 디바이스 제어
export const controlDevice = async (deviceId, resourceId, request) => {
  return await AUTH_AXIOS.get(`${HOST_DEVICE_API}/${deviceId}/resources/${resourceId}`, request);
}