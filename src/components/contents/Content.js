import React from 'react';
import AddButton from 'components/buttons/AddButton';

function Content({ topButtonTitle, children }) {
  return (
    <>
      <div className="content-area-top">
        <AddButton title={topButtonTitle} />
      </div>
      <div className="content-area mt20">{children}</div>
    </>
  );
}

export default Content;
