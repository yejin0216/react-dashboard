import { AUTH_AXIOS } from 'axios.config';
import { HOST_CODES_API, HOST_OPENSERVICE_API } from './constants';

// Open Service 공통코드 조회
export const getOpenCommonCodes = async codeId => {
  const language = localStorage.getItem('language') || 'KOR';
  return await AUTH_AXIOS.get(
    `${HOST_OPENSERVICE_API}/codes/${codeId}?language=${language}`,
    {
      useCache: true,
    },
  );
};

// Dashboard 공통코드 조회 (카테고리)
export const getCategories = async () => {
  return await AUTH_AXIOS.get(`${HOST_CODES_API}/categories`, {
    useCache: true,
  });
};

// FAQ 목록 조회
export const getFAQs = async () => {
  const language = localStorage.getItem('language') || 'KOR';
  return await AUTH_AXIOS.get(
    `${HOST_OPENSERVICE_API}/bbs/0002/0004?pageNum=1&pageCon=15&langCd=${language}`,
    {
      useCache: true,
    },
  );
};
