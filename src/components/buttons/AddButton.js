import React from 'react';

function AddButton({ onClick, title }) {
  return (
    <button type="button" className="btn-add-obj" onClick={onClick}>
      <span className="material-icons-outlined">add</span> {title}
    </button>
  );
}

export default AddButton;
