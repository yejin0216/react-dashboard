import React from 'react';

function ViewDetailButton({ title }) {
  return (
    <button type="button" className="btn btn-view-detail">
      {title}
    </button>
  );
}

export default ViewDetailButton;
