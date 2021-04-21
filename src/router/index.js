import Login from 'container/auth/Login';
import Dashboards from 'container/dashboard/Dashboards'
import Dashboard from 'container/dashboard/Dashboard'
import Devices from 'container/manage/Devices';
import Bookmarks from 'container/manage/Bookmarks';

const routes = [
  {
    path: "/",
    exact: true,
    src: Dashboards,
    routes: [
      {
        path: "/:dashboard_id",
        src: Dashboard
      }
    ]
  },
  {
    path: "/auth",
    src: Login
  },
  {
    path: "/devices",
    src: Devices
  },
  {
    path: "/bookmarks",
    src: Bookmarks
  },
  {
    path: "/guide",
    src: Bookmarks
  },
  {
    path: "/settings",
    src: Bookmarks
  },
];

export default routes;