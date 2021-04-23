import React from 'react';

/**
 * jwt token 만료일자 체크
 * @param jwtToken 사용자의 jwt token
 * @returns {number} 만료 일자
 */
let getExpirationDate = ( jwtToken ) => {
  if ( jwtToken === "undefined" || jwtToken == null ) {
    return null;
  }

  const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

  return jwt && jwt.exp && jwt.exp*1000 || null;
}

/**
 * jwt token 만료 여부 체크
 * @param expirationDate 만료일자
 * @returns {boolean} 만료 여부
 */
let isExpired = ( expirationDate ) => {
  if ( !expirationDate ) {
    return true;
  }

  return Date.now() > expirationDate;
}

/**
 * jwt token 만료 여부를 체크하는 hook이다.
 * @param jwtToken 사용자의 jwt token
 * @returns {[boolean]} 만료 여부
 */
export default function useExpired( jwtToken ) {
  const expirationDate = getExpirationDate(jwtToken);

  return [ isExpired(expirationDate) ]
}