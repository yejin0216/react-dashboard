import React from 'react';
import ContentAreaTop from 'components/contents/ContentAreaTop';
import ContentArea from 'components/contents/ContentArea';
import ContentCard from 'components/contents/ContentCard';
import { useAsync, IfFulfilled, IfRejected } from 'react-async';
import { getBookmarks } from 'apis/dashboards';

function Bookmarks() {
  const bookmarks = useAsync(getBookmarks);

  return (
    <>
      <ContentAreaTop />
      <ContentArea>
        <IfFulfilled state={bookmarks}>
          {resp => <ContentCard list={resp.data} />}
        </IfFulfilled>
        <IfRejected state={bookmarks}>
          <div>데이터가 없습니다.</div>
        </IfRejected>
      </ContentArea>
    </>
  );
}

export default Bookmarks;
