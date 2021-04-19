import App from 'App';
import Login from 'container/auth/Login';
import Dashboards from 'container/dashboard/Dashboards'
import Dashboard from 'container/dashboard/Dashboard'
import Devices from 'container/manage/Devices';
import Bookmarks from 'container/manage/Bookmarks';

const routes = [
  {
    path: "/",
    exact: true,
    src: Dashboards
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
    path: "/list/:id",
    src: Dashboards
  },
];

export default routes;