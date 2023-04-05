import { useCallback } from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import LandingContainer from "@/components/content/lading-container";

export default function Intro(props) {
  const introClass = `bg-intro-${props.index}`;
  const hiddenUp = props.index === 0 ? "hidden" : "";
  const hiddenDown = props.index === 2 ? "hidden" : "";
  const scrollUp = useCallback(() => {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  const scrollDown = useCallback(() => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Head name="이상현">
        <title>Tonemate 서비스 소개</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`w-screen h-screen relative ${introClass}`}>
        <div className="justify-center flex relative">
          <div className="bg-indigo-900 h-44 mt-20 intro-box blur-3xl backdrop-blur-3xl w-screen opacity-50 relative"></div>

          <div className="absolute text-center px-20 mt-20 w-screen">
            <p className="text-white text-5xl font-sm my-10">{props.title}</p>
            <p className="text-white text-2xl">{props.content}</p>
          </div>
        </div>
        <div
          className={`flex justify-center top-10 absolute w-screen ${hiddenUp}`}
        >
          <div className="arrow arrow-up relative" onClick={scrollUp}></div>
        </div>
        <div
          className={`flex justify-center bottom-10 absolute w-screen ${hiddenDown}`}
        >
          <div className="arrow arrow-down relative" onClick={scrollDown}></div>
        </div>
      </div>
    </>
  );
}
