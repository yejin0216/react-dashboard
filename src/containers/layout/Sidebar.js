import React from 'react';
import { NavLink } from 'react-router-dom';

import SidebarItem from 'components/layout/SidebarItem';

function Sidebar() {
  // 메뉴
  const menus = [
    { name: '대시보드 목록', icon: 'dashboard', path: '/dashboards' },
    { name: '즐겨찾기', icon: 'book', path: '/bookmarks' },
    { name: '나의 자산', icon: 'developer_board', path: '/devices' },
    { name: '이용 가이드', icon: 'info', path: '/guide' },
    { name: '설정', icon: 'settings', path: '/settings' },
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
              key={menu.name}
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
