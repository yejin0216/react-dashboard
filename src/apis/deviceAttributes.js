import { AUTH_AXIOS } from 'axios.config';
import { HOST_DEVICE_WIDGETS_API, HOST_DEVICE_API, HOST_DEVICE_MODEL_API, HOST_OPENSERVICE_API } from 'store/constants';

// 디바이스 속성 조회
export const getDeviceAttributes = async (widgetId, isLocation) => {
  const location = isLocation === true ? isLocation : false;
  return await AUTH_AXIOS.get(`${HOST_DEVICE_WIDGETS_API}/${widgetId}?incloudeLocation=${location}`);
}

// 디바이스 속성 신규 등록
export const saveDeviceAttributes = async (widgetId, request) => {
  return await AUTH_AXIOS.post(`${HOST_DEVICE_WIDGETS_API}/${widgetId}?name=${request.name}`, request);
}

// 디바이스 상태 조회
export const getDeviceStatus = async (deviceId) => {
  return await AUTH_AXIOS.get(`${HOST_DEVICE_API}/${deviceId}/connectionStatus`);
}

// 디바이스 상세 조회
export const getDevices = async (deviceId, includeLatestStatus) => {
  const latestStatus = includeLatestStatus === true ? includeLatestStatus : false;
  return await AUTH_AXIOS.get(`${HOST_DEVICE_API}/${deviceId}?includeLatestStatus=${latestStatus}`);
}

// 디바이스 이미지 조회
export const getDeviceImage = async (deviceId) => {
  return await AUTH_AXIOS.get(`${HOST_OPENSERVICE_API}/${deviceId}/image}`);
}

// 디바이스 모델 상세 조회
export const getDeviceModel = async (modelId) => {
  return await AUTH_AXIOS.get(`${HOST_DEVICE_MODEL_API}/${modelId}`);
}