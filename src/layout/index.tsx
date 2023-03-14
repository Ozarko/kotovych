import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Background } from "../components/Background";
import { Footer } from "./Footer";
import "./layout.scss";
import { TranslationProvider } from "../context/useTranslation";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Layout: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <Background>
          <Nav />
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </Background>
      </TranslationProvider>
    </QueryClientProvider>
  );
};

export default Layout;
