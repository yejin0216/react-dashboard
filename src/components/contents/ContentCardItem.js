import React from 'react';
import { dateFormatter } from 'shared/utils';

function ContentCardItem({ ...props }) {
  const bgImage = `url('assets/images/bookmark/f_${props.categoryType}.png')`;
  return (
    <li data-link="link">
      <div className="list-wrap">
        <div className="tit">{props.name}</div>
        <div className="rt">
          <div className="cat">{props.categoryType}</div>
          <div className="div" />
          <div className="name">{props.creator}</div>
          <div className="div" />
          <div className="date">{dateFormatter(props.createdDate)}</div>
        </div>
      </div>
      <div className="bg" style={{ backgroundImage: bgImage }} />
    </li>
  );
}

export default ContentCardItem;
