import NavBarDesk from "./navigation/nav-bar-desk";
import NavBarMobile from "./navigation/nav-bar-mobile";
import Content from "./content/content";
import NavMenuMobile from "./navigation/nav-menu-mobile";

import { useState } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-screen h-screen bg-black">
        <div id="stars" className="w-screen h-screen overflow-hidden"></div>
        <div id="stars2" className="w-screen h-screen overflow-hidden"></div>
        <div id="stars3" className="w-screen h-screen overflow-hidden"></div>
        <NavBarMobile />
        <NavBarDesk />
        <Content>{children}</Content>
      </div>
    </>
  );
};

export default Layout;
