import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Background } from "../components/Background";
import "./layout.scss";
import { Footer } from "./Footer";

function Layout() {
  return (
    <Background>
      <Nav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </Background>
  );
}

export default Layout;
