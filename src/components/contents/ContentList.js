import React from 'react';
import ContentListItem from 'components/contents/ContentListItem';

function ContentList({ list, onClick }) {
  return (
    <ul className="dash-list">
      {list.map(item => {
        return <ContentListItem key={item.id} item={item} onClick={onClick} />;
      })}
    </ul>
  );
}

export default React.memo(
  ContentList,
  (prevProps, nextProps) => prevProps.list === nextProps.list,
);

// export default ContentList;
