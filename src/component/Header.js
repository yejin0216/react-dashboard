import React from 'react';

function Header( props ) {
  return (
    <div className="wm-top-header">
      <div className="page-title">
        <h1 className="h1">{props.breadcumb[0]}</h1>
        <ul className="breadcumb">
          <li><a href="#none">{props.breadcumb[1]}</a></li>
          <li className="sep">></li>
          <li><a href="#none">{props.breadcumb[0]}</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;