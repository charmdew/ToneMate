import Image from "next/image";
import Profile from "../../assets/temp.jpg";

export default function UserCard() {
  let user = {
    nickName: "이상현",
    profile:
      "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F9%2F201810231620057741.jpg",
  };
  return (
    <>
      <div className="flex flex-row w-11/12 justify-around items-center m-1 border-gray-500 border-y-2 my-3">
        <div className="flex w-2/5 my-5 mx-2 ">
          <img
            className="rounded-full w-16 h-16"
            src={user.profile}
            alt={user.nickName}
          />
        </div>
        <div className="flex flex-col justify-between items-center w-3/5 my-5 mx-2">
          <div className="flex flex-row justify-center items-center w-full my-1">
            <p className="text-sm 2xl:text-sm text-white">안녕하세요</p>
          </div>
          <div className="flex flex-row justify-center items-center w-full my-1">
            <p className="text-2xl  text-white">{user.nickName} 님</p>
          </div>
        </div>
      </div>
    </>
  );
}
