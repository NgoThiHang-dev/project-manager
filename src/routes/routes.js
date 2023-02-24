import routesConfig from '~/config/routes';
import Dashboard from '~/pages/Admin/Dashboard/Dashboard';
// Pages
import Home from "~/pages/Home";

//  public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },

];

// private routes
const privateRoutes = [
    { path: routesConfig.dashboard, component: Dashboard }
];

export { publicRoutes, privateRoutes };
