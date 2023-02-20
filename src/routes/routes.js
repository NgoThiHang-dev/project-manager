import routesConfig from '~/config/routes';
// Pages
import Home from "~/pages/Home";

//  public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home }
];

// private routes
const privateRoutes = [
];

export { publicRoutes, privateRoutes };
