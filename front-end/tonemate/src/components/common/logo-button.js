import Router from "next/router";

function Logo() {
  function clickLogo() {
    Router.push("/home");
  }

  return (
    <>
      <button
        className="flex flex-col justify-center items-center w-full mt-3"
        onClick={clickLogo}
      >
        <p className="block font-alatsi my-2 text-2xl md:text-3xl text-white">
          TONEMATE
        </p>
      </button>
    </>
  );
}

export default Logo;
