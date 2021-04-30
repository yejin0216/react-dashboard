import React from 'react';

function SidebarItem({ ...props }) {
  return (
    <li className={`menu-${props.index + 1}`} title={props.menu.name}>
      <span className="material-icons-outlined">{props.menu.name}</span>
    </li>
  );
}

export default SidebarItem;
