import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/themecontext";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={`d-flex flex-column min-vh-100 ${theme}`}>
      <Navbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
