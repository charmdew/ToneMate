import NavMenu from "./nav-menu";
import UserCard from "../card/user-card";

export default function NavMenuMobile() {
  return (
    <>
      <div className="flex lg:hidden flex-col absolute bottom-0 w-full items-center justify-center bg-gray-500">
        <UserCard />
        <NavMenu />
      </div>
    </>
  );
}
