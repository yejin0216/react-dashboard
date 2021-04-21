import React from 'react';
import { useSelector } from "react-redux";
import Login from 'container/auth/Login'
import {Switch, Route, Link, NavLink} from 'react-router-dom';

import routes from 'router/index';

function App() {

  let isAuthenticated = false;
  const auth = useSelector(state => state.auth);
  if ( auth.access_token !== undefined ) {
    isAuthenticated = true;
  }

  return (
    <div className="App">
      {
        isAuthenticated ?
          <Main /> : <Login />
      }
    </div>
  );
}

function Main() {
  //메뉴
  const menus = [
    { name: "dashboard", path: "/" },
    { name: "book", path: "/bookmarks" },
    { name: "developer_board", path: "/devices" },
    { name: "info", path: "/guide" },
    { name: "settings", path: "/settings" },
  ];

  function signOut() {
    localStorage.clear();
  }
  return (
    <div className="wrapper wrapper-layout">
      <div className="wm-nav" id="gnb">
        <ul className="gnb">
          {
            menus.map((menu, index) => {
              return (
                <li key={index} className={"menu-"+(index+1)} title={menu.name}>
                    <span className="material-icons-outlined">
                      <NavLink exact to={menu.path}>{menu.name}</NavLink>
                    </span>
                </li>
              );
            })
          }
          <li className="logout">
            <a href="/auth" onClick={signOut}>
              <span className="mdi-gnb-icon-outline mdi mdi-logout theme--light"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="wm-container">
        <div className="wm-space"></div>
        <Switch>
          { routes.map((route, index) => (
            <Route
              {...route}
              key={index}
              render={props => (
                //props에는 match, location, history 객체가 담겨있다.
                <route.src {...props} />
              )}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default App;
