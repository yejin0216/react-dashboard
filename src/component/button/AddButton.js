import React from 'react';

function AddButton(props) {
  return (
    <button type="button" className="btn-add-obj">
      <span className="material-icons-outlined">add</span> {props.title}
    </button>
  );
}

export default AddButton;