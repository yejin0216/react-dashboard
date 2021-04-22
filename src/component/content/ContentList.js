import React from 'react';

function ContentList({list}) {
  return (
    <ul className="dash-list">
      {
        list.map((item, index) => {
          return (
            <li className="list-wrap" data-link="link" key={index}>
              <div className="tit">{item.name}</div>
              <div className="rt">
                <div className="cat">{item.categoryType}</div>
                <div className="div"><span></span></div>
                <div className="name">{item.creator}</div>
                <div className="div"><span></span></div>
                <div className="date">{item.createdDate}</div>
                <div className="div trsp"><span></span></div>
                <div className="btr">
                  <button type="button" className="btn btn-view-detail">상세보기</button>
                  <button type="button" className="btn btn-view-detail">삭제</button>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  );
}

export default ContentList;