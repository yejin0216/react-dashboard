import DashboardsPage from 'pages/dashboard/DashboardsPage';
import DashboardPage from 'pages/dashboard/DashboardPage';
import Bookmarks from 'pages/dashboard/Bookmarks';

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
    source: Bookmarks,
    breadcrumbs: ['즐겨찾기', '대시보드'],
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
