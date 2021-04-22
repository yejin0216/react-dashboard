import React from 'react';
import {NavLink} from "react-router-dom";

import SidebarItem from "./SidebarItem";

function Sidebar({match, location}) {
  //메뉴
  const menus = [
    { name: "dashboard", path: "/" },
    { name: "book", path: "/bookmarks" },
    { name: "developer_board", path: "/devices" },
    { name: "info", path: "/guide" },
    { name: "settings", path: "/settings" },
  ];
  //로그아웃
  function signOut() {
    localStorage.clear();
  }
  return (
    <div className="wm-nav" id="gnb">
      <ul className="gnb">
        {
          menus.map((menu, index) => {
            return (
              <NavLink exact
                       key={index}
                       to={menu.path}
                       isActive={(match) => {
                         if (!match) return;
                         else if (match.url === menu.path) return true;
                       }}
              >
                <SidebarItem menu={menu} index={index} />
              </NavLink>
            );
          })
        }
        <a href="/auth" className="a-logout">
          <li className="logout" onClick={signOut}>
              <span className="mdi-gnb-icon-outline mdi mdi-logout theme--light"></span>
          </li>
        </a>
      </ul>
    </div>
  )
}

export default Sidebar;