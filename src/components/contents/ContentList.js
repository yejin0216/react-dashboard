import React from 'react';
import ContentListItem from 'components/contents/ContentListItem';

function ContentList({ list }) {
  return (
    <ul className="dash-list">
      {list.map(item => {
        return <ContentListItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default ContentList;
