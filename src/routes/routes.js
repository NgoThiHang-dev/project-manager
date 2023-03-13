import routesConfig from '~/config/routes';
import Blog from '~/pages/Admin/Blog/Blog';
import Dashboard from '~/pages/Admin/Dashboard/Dashboard';
import Project from '~/pages/Admin/Project/Project';
import Users from '~/pages/Admin/Users/Users';
// Pages
import Home from "~/pages/Home";
import DetailRecruitment from '~/pages/Recruitment/component/DetailRecruitment/DetailRecruitment';
import Recruitment from '~/pages/Recruitment/Recruitment';

//  public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.recruitment, component: Recruitment },
    { path: routesConfig.recruitmentDetail, component: DetailRecruitment },

];

// private routes
const privateRoutes = [
    { path: routesConfig.dashboard, component: Dashboard },
    { path: routesConfig.user, component: Users },
    { path: routesConfig.project, component: Project },
    { path: routesConfig.blog, component: Blog },
];

export { publicRoutes, privateRoutes };
