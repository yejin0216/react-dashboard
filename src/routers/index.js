import DashboardsPage from 'pages/dashboard/DashboardsPage';

const routes = [
  {
    path: "/",
    exact: true,
    source: DashboardsPage,
    routes: [
      {
        path: "/:dashboard_id",
        source: DashboardsPage
      }
    ]
  },
  {
    path: "/devices",
    source: DashboardsPage
  },
  {
    path: "/bookmarks",
    source: DashboardsPage
  },
  {
    path: "/guide",
    source: DashboardsPage
  },
  {
    path: "/settings",
    source: DashboardsPage
  },
  // {
  //   path: "*",
  //   source: NoMatch
  // },
];

export default routes;