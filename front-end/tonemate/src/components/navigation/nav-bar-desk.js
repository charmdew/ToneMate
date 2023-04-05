// 컴포넌트 임포트
import UserCard from "../card/user-card";
import NavMenu from "./nav-menu";
import Logo from "../common/logo-button";

export default function NavBarDesk() {
  const clickLogout = () => {
    console.log("logout");
  };

  return (
    <>
      <div className="hidden lg:flex flex-col w-80 h-screen bg-transparent border-r-2 border-gray-600">
        <Logo />
        <div className="flex flex-col justify-start grow mx-2">
          <div className="flex justify-center">
            <UserCard />
          </div>
          <NavMenu />
        </div>
        <div className="flex flex-col w-full justify-center items-center mb-6 ">
          <div className="flex flex-col w-5/6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 rounded-lg">
            <button
              onClick={clickLogout}
              className="flex flex-col w-full h-10 justify-center items-center bg-black rounded-lg"
            >
              <p className="text-white lg:text-xl font-nanum">로그아웃</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
