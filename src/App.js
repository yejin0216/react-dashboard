import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import routes from 'router/index';
import 'container/layout/normalize.css';
import 'container/layout/common.css';
import 'container/layout/styles.css';

function App() {
  //메뉴
  const menus = [
    { name: "dashboard", path: "/list" },
    { name: "book", path: "/bookmarks" },
    { name: "developer_board", path: "/devices" },
    { name: "info", path: "/" },
    { name: "settings", path: "/" },
  ];

  return (
    <div className="App">
      <div className="wrapper wrapper-layout">
        <div className="wm-nav" id="gnb">
          <ul className="gnb">
            {
              menus.map((menu, index) => {
                return (
                  <li key={index} className={"menu-"+(index+1)} title={menu.name}>
                    <span className="material-icons-outlined">
                      <Link to={menu.path}>{menu.name}</Link>
                    </span>
                  </li>
                );
              })
            }
            <li className="logout">
              <a href="#none" className="menu-7" title="로그아웃">
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
      {/*<Switch>*/}
    </div>
  );
}

export default App;
