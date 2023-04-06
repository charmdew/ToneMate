import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { axios } from '@/lib/axios';

import { useUser } from '@/features/auth';
// import { useResultTimbre } from '@/features/inspectation';
import { LoadingFallback } from '@/components/Fallbacks';
import Layout from '@/components/layout';
import TitleContainer from '@/components/content/title-container';
import MainContainer from '@/components/content/main-container';
import ResultChart from '@/components/table/result-chart';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function VoiceColorresult() {
  const router = useRouter();
  const { timbreId } = router.query;

  const getResultTimbre = ({ timbreId }) => {
    return axios.get(`/music/result/timbre/${timbreId}`);
  };

  const useResultTimbre = ({ timbreId, config }) => {
    return useQuery({
      ...config,
      queryKey: ['timbre', timbreId],
      queryFn: () => getResultTimbre({ timbreId }),
    });
  };
  const resultTimbreQuery = useResultTimbre({ timbreId });

  const { user, isUserLoading } = useUser({ redirectTo: '/', redirectIfFound: false });
  if (isUserLoading || !user || resultTimbreQuery.isLoading) {
    return <LoadingFallback />;
  }

  const result = resultTimbreQuery.data;
  console.log(result);

  function clickVideo(name, keyword) {
    const url = 'https://www.youtube.com/results?search_query=' + name + ' ' + keyword;
    window.open(url);
  }

  return (
    <>
      <Head>
        <title>음색검사결과</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <TitleContainer>
            <p className="text-xl text-white lg:text-4xl">음색 검사 결과</p>
          </TitleContainer>
          <MainContainer>
            <div className="fade-in-custom-10s h-2/6 w-full flex-col justify-between bg-black lg:flex lg:flex-row">
              <div className="flex w-full flex-col lg:w-1/4">
                <p className="text-md mx-2 text-center font-nanum text-white lg:text-left lg:text-2xl">
                  {user?.nickname}님의 {result?.time}
                </p>
                <p className="text-md mx-2 mb-4 text-center font-nanum text-white lg:text-left lg:text-2xl">
                  음색 검사 결과입니다.
                </p>
                <p className="mx-2 mb-2 text-center font-nanum text-sm text-white lg:text-left lg:text-lg">
                  유사도 1위 : {result?.singerDetails?.[0]?.name}
                </p>
                <p className="mx-2 mb-2 text-center font-nanum text-sm text-white lg:text-left lg:text-lg">
                  유사도 2위 : {result?.singerDetails?.[1]?.name}
                </p>
                <p className="mx-2 mb-2 text-center font-nanum text-sm text-white lg:text-left lg:text-lg">
                  유사도 3위 : {result?.singerDetails?.[2]?.name}
                </p>
                <p className="mx-2 mb-2 text-center font-nanum text-sm text-white lg:text-left lg:text-lg">
                  유사도 4위 : {result?.singerDetails?.[3]?.name}
                </p>
                <p className="mx-2 mb-2 text-center font-nanum text-sm text-white lg:text-left lg:text-lg">
                  유사도 5위 : {result?.singerDetails?.[4]?.name}
                </p>
              </div>

              <div className="hidden h-full w-full items-center justify-center rounded-2xl border lg:flex lg:w-2/3 lg:flex-row lg:justify-between ">
                <div className="flex h-1/4 w-full flex-col items-center justify-center rounded-t-2xl bg-white lg:h-full lg:w-1/4 lg:rounded-2xl">
                  <div className="flex h-2/3 w-2/3 flex-row items-center justify-center rounded-full bg-black">
                    <p className="mx-2 text-center font-alatsi text-sm text-white lg:text-2xl">
                      1st
                    </p>
                    <p className="mx-2 text-center font-nanum text-2xl text-white lg:text-4xl">
                      {result?.singerDetails?.[0]?.name}
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-col lg:w-2/5">
                  <ResultChart result={result} index={0} />
                </div>

                <div className="mb-3 flex w-full flex-col items-center justify-start lg:mr-3 lg:w-1/4">
                  <p className="mb-2 text-center text-lg text-white">[ 대표 노래 ]</p>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[0]?.name,
                        result?.singerDetails?.[0]?.songs?.[0]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[0]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[0]?.name,
                        result?.singerDetails?.[0]?.songs?.[1]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[1]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[0]?.name,
                        result?.singerDetails?.[0]?.songs?.[2]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[2]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[0]?.name,
                        result?.singerDetails?.[0]?.songs?.[3]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[3]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[1]?.name,
                        result?.singerDetails?.[1]?.songs?.[4]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[4]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
            <div className="fade-in-custom-15s flex h-5/9 w-full flex-col items-center justify-between bg-black lg:flex-row">
              {/* 1번 카드 */}
              <div className="mb-4 flex w-full flex-col items-center justify-between rounded-2xl border lg:hidden lg:h-full lg:w-1/5">
                <div className="flex h-1/4 w-full flex-col items-center justify-center rounded-t-2xl bg-white">
                  <div className="flex h-2/3 w-2/3 flex-row items-center justify-center rounded-full bg-black">
                    <p className="mx-2 text-center font-alatsi text-sm text-white">1st</p>
                    <p className="mx-2 text-center font-nanum text-2xl text-white">
                      {result?.singerDetails?.[0]?.name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={0} />
                <div className="mb-3 flex w-full flex-col items-center justify-start">
                  <p className="mb-2 text-center text-lg text-white">[ 대표 노래 ]</p>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[0]?.name,
                        result?.singerDetails?.[0]?.songs?.[0]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[0]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[0]?.name,
                        result?.singerDetails?.[0]?.songs?.[1]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[1]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[0]?.name,
                        result?.singerDetails?.[0]?.songs?.[2]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[2]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[0]?.name,
                        result?.singerDetails?.[0]?.songs?.[3]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[3]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[0]?.name,
                        result?.singerDetails?.[0]?.songs?.[4]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[0]?.songs?.[4]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                </div>
              </div>

              {/* 2번 카드 */}
              <div className="mb-4 flex w-full flex-col items-center justify-between rounded-2xl border lg:h-full lg:w-1/5">
                <div className="flex h-1/4 w-full flex-col items-center justify-center rounded-t-2xl bg-white">
                  <div className="flex h-2/3 w-2/3 flex-row items-center justify-center rounded-full bg-black">
                    <p className="mx-2 text-center font-alatsi text-sm text-white">2nd</p>
                    <p className="mx-2 text-center font-nanum text-2xl text-white">
                      {result?.singerDetails?.[1]?.name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={1} />
                <div className="mb-3 flex w-full flex-col items-center justify-start">
                  <p className="mb-2 text-center text-lg text-white">[ 대표 노래 ]</p>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[1]?.name,
                        result?.singerDetails?.[1]?.songs?.[0]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[1]?.songs?.[0]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[1]?.name,
                        result?.singerDetails?.[1]?.songs?.[1]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[1]?.songs?.[1]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[1]?.name,
                        result?.singerDetails?.[1]?.songs?.[2]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[1]?.songs?.[2]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[1]?.name,
                        result?.singerDetails?.[1]?.songs?.[3]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[1]?.songs?.[3]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[1]?.name,
                        result?.singerDetails?.[1]?.songs?.[4]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[1]?.songs?.[4]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                </div>
              </div>
              {/* 3번 카드 */}
              <div className="mb-4 flex w-full flex-col items-center justify-between rounded-2xl border lg:h-full lg:w-1/5">
                <div className="flex h-1/4 w-full flex-col items-center justify-center rounded-t-2xl bg-white">
                  <div className="flex h-2/3 w-2/3 flex-row items-center justify-center rounded-full bg-black">
                    <p className="mx-2 text-center font-alatsi text-sm text-white">3rd</p>
                    <p className="mx-2 text-center font-nanum text-2xl text-white">
                      {result?.singerDetails?.[2]?.name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={2} />
                <div className="mb-3 flex w-full flex-col items-center justify-start">
                  <p className="mb-2 text-center text-lg text-white">[ 대표 노래 ]</p>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[2]?.name,
                        result?.singerDetails?.[2]?.songs?.[0]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[2]?.songs?.[0]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[2]?.name,
                        result?.singerDetails?.[2]?.songs?.[1]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[2]?.songs?.[1]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[2]?.name,
                        result?.singerDetails?.[2]?.songs?.[2]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[2]?.songs?.[2]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[2]?.name,
                        result?.singerDetails?.[2]?.songs?.[3]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[2]?.songs?.[3]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[2]?.name,
                        result?.singerDetails?.[2]?.songs?.[4]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[2]?.songs?.[4]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                </div>
              </div>
              {/* 4번 카드 */}
              <div className="mb-4 flex w-full flex-col items-center justify-between rounded-2xl border lg:h-full lg:w-1/5">
                <div className="flex h-1/4 w-full flex-col items-center justify-center rounded-t-2xl bg-white">
                  <div className="flex h-2/3 w-2/3 flex-row items-center justify-center rounded-full bg-black">
                    <p className="mx-2 text-center font-alatsi text-sm text-white">4th</p>
                    <p className="mx-2 text-center font-nanum text-2xl text-white">
                      {result?.singerDetails?.[3]?.name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={3} />
                <div className="mb-3 flex w-full flex-col items-center justify-start">
                  <p className="mb-2 text-center text-lg text-white">[ 대표 노래 ]</p>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[3]?.name,
                        result?.singerDetails?.[3]?.songs?.[0]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[3]?.songs?.[0]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[3]?.name,
                        result?.singerDetails?.[3]?.songs?.[1]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[3]?.songs?.[1]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[3]?.name,
                        result?.singerDetails?.[3]?.songs?.[2]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[3]?.songs?.[2]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[3]?.name,
                        result?.singerDetails?.[3]?.songs?.[3]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[3]?.songs?.[3]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[3]?.name,
                        result?.singerDetails?.[3]?.songs?.[4]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[3]?.songs?.[4]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                </div>
              </div>
              {/* 5번 카드 */}
              <div className="flex w-full flex-col items-center justify-between rounded-2xl border lg:h-full lg:w-1/5">
                <div className="flex h-1/4 w-full flex-col items-center justify-center rounded-t-2xl bg-white">
                  <div className="flex h-2/3 w-2/3 flex-row items-center justify-center rounded-full bg-black">
                    <p className="mx-2 text-center font-alatsi text-sm text-white">5th</p>
                    <p className="mx-2 text-center font-nanum text-2xl text-white">
                      {result?.singerDetails?.[4]?.name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={4} />
                <div className="mb-3 flex w-full flex-col items-center justify-start">
                  <p className="mb-2 text-center text-lg text-white">[ 대표 노래 ]</p>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[4]?.name,
                        result?.singerDetails?.[4]?.songs?.[0]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[4]?.songs?.[0]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[4]?.name,
                        result?.singerDetails?.[4]?.songs?.[1]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[4]?.songs?.[1]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[4]?.name,
                        result?.singerDetails?.[4]?.songs?.[2]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[4]?.songs?.[2]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[4]?.name,
                        result?.singerDetails?.[4]?.songs?.[3]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[4]?.songs?.[3]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                  <button
                    className="mb-1 flex w-full flex-row items-center justify-between"
                    onClick={() =>
                      clickVideo(
                        result?.singerDetails?.[4]?.name,
                        result?.singerDetails?.[4]?.songs?.[4]?.title
                      )
                    }
                  >
                    <p className="ml-4 flex text-white">
                      1. {result?.singerDetails?.[4]?.songs?.[4]?.title}
                    </p>
                    <PlayIcon className="mr-4 flex h-6 w-6 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          </MainContainer>
        </Layout>
      </main>
    </>
  );
}
