import React from 'react';
import Header from 'components/layout/Header';

function ContentWrapper({ breadcrumbs, children }) {
  return (
    <>
      <div className="wrapper wrapper-layout">
        <div className="wm-container">
          <div className="wm-space" />
          <div className="wm-content">
            <Header breadcrumb={breadcrumbs} />
            <div className="content-container">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentWrapper;
