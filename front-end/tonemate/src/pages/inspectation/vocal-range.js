import Head from "next/head";
import Layout from "@/components/layout";
import TitleContainer from "@/components/content/title-container";
import MainContainer from "@/components/content/main-container";

export default function VocalRange() {
  return (
    <>
      <Head>
        <title>음역대검사</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <TitleContainer>
            <p className="text-xl lg:text-4xl text-white">음역대 검사</p>
          </TitleContainer>
          <MainContainer>
            {/* 음색 검사 주의사항 및 방법 */}
            <div className="w-full h-44 lg:h-60 bg-white">1</div>
            {/* 명령어(high, low) */}
            <div className="w-full h-44 lg:h-60 bg-white">2</div>
            {/* 녹음 버튼 및 오디오 비주얼라이제이션 */}
            <div className="w-full h-44 lg:h-60 bg-white">3</div>
          </MainContainer>
        </Layout>
      </main>
    </>
  );
}
