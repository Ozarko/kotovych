import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "..";
import Main from "../../screens/Main";
import NotFound from "../../screens/NotFound";

export const routersSettings = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Main />,
        index: true,
      }
    ],
  },
];

export const routers = createBrowserRouter(routersSettings, {
  basename: "/kotovych",
});
