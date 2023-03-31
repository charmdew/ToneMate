import Head from "next/head";
import Layout from "@/components/layout";
import TitleContainer from "@/components/content/title-container";
import MainContainer from "@/components/content/main-container";

// npm install tw-elements
//animate-[spinner-grow_2s_ease-in-out]

// npm install tailwindcss-animation-delay

export default function ResultList() {
  return (
    <>
      <Head>
        <title>검사결과</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <TitleContainer>
            <p className="text-xl lg:text-4xl text-white">검사 결과</p>
          </TitleContainer>
          <MainContainer>
            <div className="flex flex-col w-full h-12 justify-center items-center lg:items-start fade-in-custom-10s">
              <p className="text-md lg:text-2xl text-white">
                000님은 총 0건의 검사 결과를 가지고 있습니다.
              </p>
            </div>
            <div className="flex flex-col w-full h-2/5 fade-in-custom-15s">
              <div className="flex flex-col w-full h-10 justify-center items-center lg:items-start">
                <p className="text-sm lg:text-xl text-white">
                  음색 검사 결과 : 0 건
                </p>
              </div>
              <div className="flex flex-row grow bg-gray-500"></div>
            </div>
            <div className="flex flex-col w-full h-2/5 fade-in-custom-20s ">
              <div className="flex flex-col w-full h-10 justify-center items-center lg:items-start ">
                <p className="text-sm lg:text-xl text-white">
                  음역대 검사 결과 : 0 건
                </p>
              </div>
              <div className="flex flex-row grow bg-gray-500"></div>
            </div>
          </MainContainer>
        </Layout>
      </main>
    </>
  );
}
