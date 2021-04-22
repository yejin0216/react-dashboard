import React from 'react';
import Header from "./Header";

function ContentWrapper(props) {
  return (
    <div className="wrapper wrapper-layout">
      <div className="wm-container">
        <div className="wm-space"></div>
        <div className="wm-content">
          <Header breadcumb={["대시보드 목록","대시보드"]} />
          <div className="content-container">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentWrapper;
