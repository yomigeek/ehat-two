import { Route } from 'react-router-dom';
import Main from '../components/user/Main';
import NotFound from './../components/shared/NotFound';
import CompareBoard from './../components/compare';
import ResultPage from '../components/compare/ResultPage';
import History from './../components/history/index';
import Login from '../components/user/Login'

export const landingRoutes = [
  {
    type: Route,
    path: '/',
    component: Login,
    exact: true,
  },
  {
    type: Route,
    path: '/main',
    component: Main,
    exact: true,
  },
  {
    type: Route,
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    type: Route,
    path: '/compare',
    component: CompareBoard,
    exact: true,
  },
  {
    type: Route,
    path: '/history',
    component: History,
    exact: true,
  },
  {
    type: Route,
    path: '/compare/result',
    component: ResultPage,
    exact: true,
  },
  {
    type: Route,
    path: '*',
    component: NotFound,
  },
];


