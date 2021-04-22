import React from 'react';

import AddButton from 'component/button/AddButton'

function Content(props) {
  return (
    <>
      <div className="content-area-top">
         <AddButton title={props.topButtonTitle} />
      </div>
      <div className="content-area mt20">
        {props.children}
      </div>
    </>
  );
}

export default Content;
