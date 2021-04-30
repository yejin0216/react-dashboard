import React from 'react';
import Header from 'components/layout/Header';

function ContentWrapper({ children }) {
  return (
    <>
      <div className="wrapper wrapper-layout">
        <div className="wm-container">
          <div className="wm-space" />
          <div className="wm-content">
            <Header breadcrumb={['대시보드 목록', '대시보드']} />
            <div className="content-container">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentWrapper;
