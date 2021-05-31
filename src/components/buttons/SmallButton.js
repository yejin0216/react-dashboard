import React from 'react';

/**
 * Buttons > Small Size
 * @param title
 * @param action
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
function SmallButton({ title, action, type }) {
  const style = `btn ${type}`;
  return (
    <button type="button" className={style} onClick={action}>
      {title}
    </button>
  );
}

export default SmallButton;
