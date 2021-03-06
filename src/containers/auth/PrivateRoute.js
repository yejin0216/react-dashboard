import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import ContentWrapper from 'components/contents/ContentWrapper';
import Sidebar from 'containers/layout/Sidebar';

// 토큰 만료일자 검증
const checkTokenExpiration = jwtToken => {
  if (!jwtToken || jwtToken === null) {
    return true;
  }
  const expirationDate =
    JSON.parse(atob(jwtToken.split('.')[1])).exp * 1000 || null;

  return Date.now() > expirationDate;
};

// 로그인 된 사용자만 접근할 수 있는 경로 설정
// 로그인 된 사용자가 아니면 LoginPage로 리다이렉트한다.
function PrivateRoute({ component: Component, ...rest }) {
  // access token 유효성 검증
  const isExpired = checkTokenExpiration(
    localStorage.getItem('access_token') || null,
  );

  return (
    <Route
      {...rest}
      render={props =>
        isExpired ? (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        ) : (
          <ContentWrapper breadcrumbs={rest.breadcrumbs}>
            <Sidebar />
            <Component {...props} />
          </ContentWrapper>
        )
      }
    />
  );
}

export default PrivateRoute;
