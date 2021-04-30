import DashboardsPage from 'pages/dashboard/DashboardsPage';
import DashboardPage from 'pages/dashboard/DashboardPage';

const routes = [
  {
    path: '/dashboards',
    exact: true,
    source: DashboardsPage,
    routes: [
      {
        path: '/dashboards/:dashboard_id',
        source: DashboardPage,
      },
    ],
  },
  {
    path: '/devices',
    source: DashboardsPage,
  },
  {
    path: '/bookmarks',
    source: DashboardsPage,
  },
  {
    path: '/guide',
    source: DashboardsPage,
  },
  {
    path: '/settings',
    source: DashboardsPage,
  },
];

export default routes;
