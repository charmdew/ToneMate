import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useUser } from '@/features/auth';
import { LoadingFallback } from '@/components/Fallbacks';
import Layout from '@/components/layout';
import HalfContainer from '@/components/content/half-container';

export default function HomePage() {
  const router = useRouter();

  const { user, isUserLoading } = useUser({ redirectTo: '/', redirectIfFound: false });
  if (isUserLoading || !user) {
    return <LoadingFallback />;
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <HalfContainer>
            <div className="flex h-full w-full flex-row">
              <div className="bg-home z-0 flex h-full w-full flex-row items-end justify-end lg:w-140">
                <div className="bg-trasparent my-5 flex grow flex-col items-start justify-center lg:hidden">
                  <div className="mx-3 my-2 flex flex-row rounded-full border border-black px-2">
                    <p className="font-alatsi text-sm text-red-600 ">TONEMATE</p>
                  </div>
                  <div className="mx-3 flex flex-col  px-2 ">
                    <p className="font-nanum text-xl text-red-600">톤메이트와 함께</p>
                    <p className="font-nanum text-xl text-red-600">
                      내 목소리에 딱 맞는 노래 찾자!
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden grow flex-col items-start justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:flex">
                <div className="mx-3 my-2 flex flex-row rounded-full border border-black px-2">
                  <p className="font-alatsi text-white ">TONEMATE</p>
                </div>
                <div className="mx-3 flex flex-col  px-2 ">
                  <p className="font-nanum text-3xl text-white">톤메이트와 함께</p>
                  <p className="font-nanum text-3xl text-white">내 목소리에 딱 맞는 노래 찾자!</p>
                </div>
              </div>
            </div>
          </HalfContainer>
          <HalfContainer>
            <div className="m-3 flex flex-row">
              <p className="text-2xl text-white">TONEMATE 서비스 바로가기 </p>
            </div>
            <div className="flex w-full grow snap-x flex-row flex-nowrap items-center justify-start overflow-x-auto scrollbar-hide ">
              <div className="mx-3 h-5/6 w-4/5 flex-shrink-0 grow-0 basis-auto snap-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 lg:w-1/4">
                <button
                  className="h-full w-full rounded-xl bg-black"
                  onClick={() => router.push('/inspectation/vocal-color')}
                >
                  <p className="text-2xl text-white">음색 검사</p>
                </button>
              </div>
              <div className="mx-3 h-5/6 w-4/5 flex-shrink-0 grow-0 basis-auto snap-center  rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 lg:w-1/4">
                <button
                  className="h-full w-full rounded-xl bg-black"
                  onClick={() => router.push('/inspectation/vocal-range')}
                >
                  <p className="text-2xl text-white">음역대 검사</p>
                </button>
              </div>
              <div className="mx-3 h-5/6 w-4/5 flex-shrink-0 grow-0 basis-auto snap-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 lg:w-1/4">
                <button
                  className="h-full w-full rounded-xl bg-black"
                  onClick={() => router.push('/inspectation/result-list')}
                >
                  <p className="text-2xl text-white">검사 결과</p>
                </button>
              </div>
              <div className="mx-3 h-5/6 w-4/5 flex-shrink-0 grow-0 basis-auto snap-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 lg:w-1/4">
                <button
                  className="h-full w-full rounded-xl bg-black"
                  onClick={() => router.push('/search')}
                >
                  <p className="text-2xl text-white">노래 검색</p>
                </button>
              </div>
              <div className="mx-3 h-5/6 w-4/5 flex-shrink-0 grow-0 basis-auto snap-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 lg:w-1/4">
                <button
                  className="h-full w-full rounded-xl bg-black"
                  onClick={() => router.push('/user/music-list')}
                >
                  <p className="text-2xl text-white">애창곡 리스트</p>
                </button>
              </div>
              <div className="mx-3 h-5/6 w-4/5 flex-shrink-0 grow-0 basis-auto snap-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 lg:w-1/4">
                <button
                  className="h-full w-full rounded-xl bg-black"
                  onClick={() => router.push('/about')}
                >
                  <p className="text-2xl text-white">서비스</p>
                </button>
              </div>
            </div>
          </HalfContainer>
        </Layout>
      </main>
    </>
  );
}
