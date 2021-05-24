import React from 'react';
import ContentCardItem from './ContentCardItem';

function ContentCard({ list }) {
  return (
    <ul className="bookmark">
      {list.map(item => {
        return <ContentCardItem key={item.id} {...item} />;
      })}
    </ul>
  );
}

export default ContentCard;
