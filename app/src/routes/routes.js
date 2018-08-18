import Home from '../views/home';
import { NotFound } from '../views/error';

const routes = [
  {
    route: '/',
    Component: Home,
  },
  {
    route: '*',
    Component: NotFound,
  },
];

export default routes;
