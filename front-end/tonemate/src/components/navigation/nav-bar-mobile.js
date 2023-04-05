import { Bars3Icon } from "@heroicons/react/24/solid";
import NavMenuMobile from "./nav-menu-mobile";
import Logo from "../common/logo-button";
import { useState } from "react";

export default function NavBarMobile() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((menu) => !menu);
  };

  return (
    <>
      <div className="flex lg:hidden justify-between items-center h-14 md:h-14 bg-transparent">
        <div className="flex justify-center items-center ml-4 md:ml-6">
          <Logo />
        </div>
        <div className="flex justify-center items-center mr-4 md:mr-6">
          <Bars3Icon
            className="w-7 h-7 md:w-8 md:h-8 text-white"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {menu ? <NavMenuMobile /> : ""}
    </>
  );
}
