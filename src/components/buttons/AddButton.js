import React from 'react';

function AddButton({ title }) {
  return (
    <button type="button" className="btn-add-obj">
      <span className="material-icons-outlined">add</span> {title}
    </button>
  );
}

export default AddButton;
