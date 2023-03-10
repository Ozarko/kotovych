import { RouterProvider } from "react-router-dom";
import { routers } from "./layout/router";

const App = () => {
  return <RouterProvider router={routers} />;
}

export default App;
