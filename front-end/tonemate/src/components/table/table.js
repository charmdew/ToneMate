import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Table() {
  const [page, setPage] = useState(1);
  const [basePage, setBasePage] = useState(1);
  const [endPage, setEndPage] = useState(12);

  function clickHeart() {
    console.log("clickHeart");
  }

  function prevPages() {
    console.log("prevPage");
  }

  function nextPages() {
    console.log("nextPage");
  }

  function clickPage(page) {
    console.log("clickPage" + page);
  }

  return (
    <>
      <div className="flex flex-col w-full h-full justify-start items-center">
        {/* Table Head : 테이블 태그로 작성시에 사이즈 조절에 문제가 생겨서 div태그로 커스터마이징 */}
        <div className="flex flex-row justify-between w-full h-10 border-y mb-3 border-yellow-400 fade-in-custom-15s">
          <div className="flex flex-row w-4/12 mx-2 items-center bg-black">
            <p className="font-nanum text-sm lg:text-lg text-white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제목
            </p>
          </div>
          <div className="flex flex-row w-4/12 justify-center items-center bg-black">
            <p className="font-nanum text-sm lg:text-lg text-white">가수</p>
          </div>
          <div className="flex flex-row w-1/12 justify-center items-center bg-black">
            <p className="font-nanum text-sm lg:text-lg text-white">TJ</p>
          </div>
          <div className="flex flex-row w-1/12 justify-center items-center bg-black">
            <p className="font-nanum text-sm lg:text-lg text-white">KY</p>
          </div>
          <div className="flex flex-row w-1/12 mx-2 justify-center items-center bg-black">
            <p className="font-nanum text-sm lg:text-lg text-white">담기</p>
          </div>
        </div>
        {/* Table Body : 테이블 태그로 작성시에 사이즈 조절에 문제가 생겨 div태그로 커스터마이징 */}
        <div className="flex flex-col w-full mb-2 fade-in-custom-15s">
          <div className="flex flex-row justify-between w-full h-14 mb-1 rounded-full bg-white opacity-40">
            <div className="flex flex-row w-4/12 mx-2 items-center ">
              <p className="font-nanum text-sm lg:text-lg text-white">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사건의
                지평선
              </p>
            </div>
            <div className="flex flex-row w-4/12 justify-center items-center ">
              <p className="font-nanum text-sm lg:text-lg text-white">
                윤하 (feat. 션)
              </p>
            </div>
            <div className="flex flex-row w-1/12 justify-center items-center ">
              <p className="font-nanum text-sm lg:text-lg text-white">88888</p>
            </div>
            <div className="flex flex-row w-1/12 justify-center items-center ">
              <p className="font-nanum text-sm lg:text-lg text-white">88888</p>
            </div>
            <div className="flex flex-row w-1/12 mx-2 justify-center items-center ">
              <button onClick={clickHeart}>
                <HeartIcon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Page Nation : 한페이지에 15개씩 화면에 노출되도록 설정 */}
        <div className="flex flex-row justify-between items-center w-2/5 lg:w-1/5 h-10 mb-2 fade-in-custom-20s">
          <button onClick={prevPages}>
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => clickPage(basePage)}
            className="font-nanum text-sm lg:text-lg text-white"
          >
            {basePage}
          </button>
          <button
            onClick={() => clickPage(basePage + 1)}
            className="font-nanum text-sm lg:text-lg text-white"
          >
            {basePage + 1}
          </button>
          <button
            onClick={() => clickPage(basePage + 2)}
            className="font-nanum text-sm lg:text-lg text-white"
          >
            {basePage + 2}
          </button>
          <button
            onClick={() => clickPage(basePage + 3)}
            className="font-nanum text-sm lg:text-lg text-white"
          >
            {basePage + 3}
          </button>
          <button
            onClick={() => clickPage(basePage + 4)}
            className="font-nanum text-sm lg:text-lg text-white"
          >
            {basePage + 4}
          </button>
          <button onClick={nextPages}>
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Table;

{
  /* <table className="w-full px-3 border">
          <thead>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">제목</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">가수</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">KY</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">TJ</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">담기</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </button>
              </td>
            </tr>
            <tr className="border border-gray-500">
              <td className="w-3/12 h-8 px-3 text-white">사건의 지평선</td>
              <td className="w-3/12 h-8 px-3 text-center text-white">윤하</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">11111</td>
              <td className="w-1/12 h-8 px-3 text-center text-white">81870</td>
              <td className="w-1/12 h-8 px-3 justify-center items-center">
                <button className="flex flex-row w-full justify-center items-center">
                  <HeartIcon className="w-6 h-6 text-white border-white border" />
                </button>
              </td>
            </tr>
          </tbody>
        </table> */
}
