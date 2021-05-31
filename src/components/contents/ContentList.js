import React from 'react';
import ContentListItem from 'components/contents/ContentListItem';

function ContentList({ list, action }) {
  return (
    <ul className="dash-list">
      {list.map(item => {
        return <ContentListItem key={item.id} item={item} action={action} />;
      })}
    </ul>
  );
}

export default React.memo(
  ContentList,
  (prevProps, nextProps) => prevProps.list === nextProps.list,
);
