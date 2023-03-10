import { createBrowserRouter } from "react-router-dom";
import Layout from "..";
import { Redirect } from "../../components/Redirect";
import { Home } from "../../screens/Home";
import LevelCheck from "../../screens/LevelCheck";
import { RoutesPath } from "../../types/layout";

export const routersSettings = [
  {
    path: RoutesPath.HOME,
    element: <Layout />,
    errorElement: <Redirect />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: RoutesPath.LEVEL_CHECK,
        element: <LevelCheck />,
      },
      {
        path: RoutesPath.CONTACTS,
        element: <LevelCheck />,
      },
    ],
  },
];

export const routers = createBrowserRouter(routersSettings);
