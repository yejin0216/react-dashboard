import React, { useRef } from 'react';
import ViewDetailButton from 'components/buttons/ViewDetailButton';
import { UncontrolledTooltip } from 'reactstrap';

function ContentListItem({ item, onClick }) {
  const itemRef = useRef(null);
  return (
    <>
      <li className="list-wrap" data-link="link" ref={itemRef}>
        <div className="tit">{item.name}</div>
        <div className="rt">
          <div className="cat">{item.categoryType}</div>
          <div className="div">
            <span />
          </div>
          <div className="name">{item.creator}</div>
          <div className="div">
            <span />
          </div>
          <div className="date">{item.createdDate}</div>
          <div className="div trsp">
            <span />
          </div>
          <div className="btr">
            <ViewDetailButton title="수정" onClick={e => onClick(e, item.id)} />
          </div>
        </div>
      </li>
      <UncontrolledTooltip placement="bottom" target={itemRef}>
        상세 화면으로 이동
      </UncontrolledTooltip>
    </>
  );
}

export default ContentListItem;
