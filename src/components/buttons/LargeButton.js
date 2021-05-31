import React from 'react';

function LargeButton({ action, type, name }) {
  return (
    <button type="button" className={type} onClick={action}>
      <span className="material-icons-outlined">add</span> {name}
    </button>
  );
}

export default LargeButton;
