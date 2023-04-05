import NavBarDesk from "./navigation/nav-bar-desk";
import NavBarMobile from "./navigation/nav-bar-mobile";
import Content from "./content/content";
import NavMenuMobile from "./navigation/nav-menu-mobile";

import { useState } from "react";

const temp = ({ children }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-screen h-screen bg-black">
        <NavBarMobile />
        <NavBarDesk />
        <Content>{children}</Content>
      </div>
    </>
  );
};

export default temp;
