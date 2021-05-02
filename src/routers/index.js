import DashboardsPage from 'pages/dashboard/DashboardsPage';
import DashboardPage from 'pages/dashboard/DashboardPage';

const routes = [
  {
    path: '/dashboards',
    exact: true,
    source: DashboardsPage,
    breadcrumbs: ['대시보드 목록', '대시보드'],
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
    breadcrumbs: ['대시보드 목록', '대시보드'],
  },
  {
    path: '/bookmarks',
    source: DashboardsPage,
    breadcrumbs: ['대시보드 목록', '대시보드'],
  },
  {
    path: '/guide',
    source: DashboardsPage,
    breadcrumbs: ['대시보드 목록', '대시보드'],
  },
  {
    path: '/settings',
    source: DashboardsPage,
    breadcrumbs: ['대시보드 목록', '대시보드'],
  },
];

export default routes;
