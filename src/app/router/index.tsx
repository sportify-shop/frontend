import {createBrowserRouter, RouteObject} from "react-router-dom";

import Layout from '@/common/components/layout';
import {PrivateGuard, PublicGuard, TokenGuard} from './guards';
import HomePage from "@/common/pages/HomePage";
import LogoutPage from "@/features/authentication/pages/LogoutPage";
import LoginPage from "@/features/authentication/pages/LoginPage";
import Error404Page from "@/common/pages/Error404Page";

export const mainRoutes: Array<RouteObject> = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
    ],
  },
];


export const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      ...mainRoutes,
      {
        element: <TokenGuard/>,
        children: [
          {
            element: <PrivateGuard/>, // uniquement si connecté
            children: [
              {
                path: "/logout",
                element: <LogoutPage/>,
              },
            ],
          },
        ]
      },
      {
        element: <PublicGuard/>, // uniquement si déconnecté
        children: [
          {
            path: "/login",
            element: <LoginPage/>,
          },
          {
            path: '/*',
            element: <Error404Page />,
          },
        ],
      },
    ],
  },
];

export const ApplicationRouter = createBrowserRouter(routes);

export default ApplicationRouter;
