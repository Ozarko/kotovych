import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./layout/Router";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  return <RouterProvider router={routers} />;
};

export default App;
