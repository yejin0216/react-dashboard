import { AUTH_AXIOS } from 'axios.config';
import { HOST_EVENT_WIDGETS_API, HOST_EVENT_API } from './constants';

// 이벤트 속성 조회
export const getEventAttributes = async (widgetId) => {
  return await AUTH_AXIOS.get(`${HOST_EVENT_WIDGETS_API}/${widgetId}`);
}

// 이벤트 속성 신규 등록
export const saveEventAttributes = async (widgetId, requests) => {
  return await AUTH_AXIOS.post(`${HOST_EVENT_WIDGETS_API}/${widgetId}?name=${requests.name}`, request);
}

// 이벤트 목록 조회
export const getEvents = async (queryParam) => {
  return await AUTH_AXIOS.get(`${HOST_EVENT_API}?${queryParam}`);
}

// 이벤트 조회
export const getEvent = async (eventId) => {
  return await AUTH_AXIOS.get(`${HOST_EVENT_API}/${eventId}`);
}

