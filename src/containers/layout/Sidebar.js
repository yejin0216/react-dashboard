import React from 'react';
import { NavLink } from 'react-router-dom';

import SidebarItem from 'components/layout/SidebarItem';

function Sidebar() {
  // 메뉴
  const menus = [
    { name: 'dashboard', path: '/dashboards' },
    { name: 'book', path: '/bookmarks' },
    { name: 'developer_board', path: '/devices' },
    { name: 'info', path: '/guide' },
    { name: 'settings', path: '/settings' },
  ];
  // 로그아웃
  function signOut() {
    localStorage.clear();
  }
  return (
    <div className="wm-nav" id="gnb">
      <ul className="gnb">
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              key={index.toString()}
              to={menu.path}
              isActive={match => {
                if (!match) return false;
                if (match.url === menu.path) {
                  return true;
                }
                return false;
              }}
            >
              <SidebarItem menu={menu} index={index} />
            </NavLink>
          );
        })}
        <a href="/auth" className="a-logout">
          <li className="logout" onClick={signOut}>
            <span className="mdi-gnb-icon-outline mdi mdi-logout theme--light" />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Sidebar;
