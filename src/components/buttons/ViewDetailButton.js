import React from 'react';

function ViewDetailButton({ title, onClick }) {
  return (
    <button type="button" className="btn btn-view-detail" onClick={onClick}>
      {title}
    </button>
  );
}

export default ViewDetailButton;
