import Dashboards from 'container/dashboard/Dashboards'
import Dashboard from 'container/dashboard/Dashboard'
import Devices from 'container/manage/Devices';
import Bookmarks from 'container/manage/Bookmarks';

const routes = [
  {
    path: "/",
    exact: true,
    source: Dashboards,
    routes: [
      {
        path: "/:dashboard_id",
        source: Dashboard
      }
    ]
  },
  {
    path: "/devices",
    source: Devices
  },
  {
    path: "/bookmarks",
    source: Bookmarks
  },
  {
    path: "/guide",
    source: Bookmarks
  },
  {
    path: "/settings",
    source: Bookmarks
  },
  // {
  //   path: "*",
  //   source: NoMatch
  // },
];

export default routes;