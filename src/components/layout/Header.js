import React from 'react';

function Header({ breadcrumb }) {
  return (
    <div className="wm-top-header">
      <div className="page-title">
        <h1 className="h1">{breadcrumb[0]}</h1>
        <ul className="breadcumb">
          <li>
            <a href="#none">{breadcrumb[1]}</a>
          </li>
          <li className="sep">{'>'}</li>
          <li>
            <a href="#none">{breadcrumb[0]}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
