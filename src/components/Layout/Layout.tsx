import AppBar from "./AppBar/AppBar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen h-5">
      <AppBar></AppBar>
      <div className="flex flex-1 ">
        <Sidebar></Sidebar>
        <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-(--color-bg-secondary)">
          {children}
        </main>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
