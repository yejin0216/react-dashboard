import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'action/common';

import Header from 'component/Header';

function Dashboards() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categories = useSelector(state => ({
    categories: state.categories
  }));

  console.log(categories)

  return (
    <div className="wm-content">
      <Header breadcumb={["대시보드 목록","대시보드"]} />
      <div className="content-container">
        <div className="content-area-top">
          <button type="button" className="btn-add-obj"><span className="material-icons-outlined">add</span> 추가하기</button>
        </div>
        <div className="content-area mt20">
          <ul className="dash-list">
            <li className="list-wrap" data-link="link">
              <div className="tit">
                제목글체는 최대 몇자까지 들어가면 될까요? 나머지는 글자가 줄임말로 나와야할까요????
              </div>
              <div className="rt">
                <div className="cat">
                  스마트팜
                </div>
                <div className="div"><span></span></div>
                <div className="name">
                  admin222
                </div>
                <div className="div"><span></span></div>
                <div className="date">
                  2020.12.9
                </div>
                <div className="div trsp"><span></span></div>
                <div className="btr">
                  <button type="button" className="btn btn-view-detail">상세보기</button>
                  <button type="button" className="btn btn-view-detail">삭제</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;