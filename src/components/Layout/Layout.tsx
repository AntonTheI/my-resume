import AppBar from "./appBar/AppBar";
import Footer from "./Footer";
import Sidebar from "./sidebar/Sidebar";

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen h-5">
      <AppBar></AppBar>
      <div className="flex flex-1 border-x border-black divide-x divide-black">
        <Sidebar></Sidebar>
        <main className="flex flex-1 flex-col overflow-auto bg-(--color-bg-secondary) ">
          {children}
        </main>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
