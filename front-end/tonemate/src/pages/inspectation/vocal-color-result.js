import Head from "next/head";
import Layout from "@/components/layout";
import TitleContainer from "@/components/content/title-container";
import MainContainer from "@/components/content/main-container";
import ResultChart from "@/components/table/result-chart";

import { PlayIcon } from "@heroicons/react/24/solid";

// npm install react-chartjs-2 chart.js
export default function VoiceColorResult() {
  const result = {
    timbreId: 27,
    mfccMean: -0.16980843,
    stftMean: 0.11731798,
    zcrMean: 0.04844619,
    spcMean: 0.43117818,
    sprMean: 0.8990291,
    rmsMean: -0.5818689,
    mfccVar: -0.8695488,
    stftVar: 0.08629258,
    zcrVar: 0.60193247,
    spcVar: 0.80899286,
    sprVar: 1.125779,
    rmsVar: 0.15260659,
    time: "2023-04-03T15:36:19.5588106",
    singerDetails: [
      {
        singerId: 93,
        name: "폴킴",
        similarityPercent: 0.05456686,
        songList: [
          {
            songId: 23825,
            mfccMean: -0.0440075,
            stftMean: -0.208222,
            zcrMean: 1.02249,
            spcMean: 1.2055,
            sprMean: 1.45517,
            rmsMean: -0.589093,
            mfccVar: -0.333149,
            stftVar: -0.167701,
            zcrVar: 0.803009,
            spcVar: 0.616384,
            sprVar: -0.150572,
            rmsVar: -0.0963761,
            octaveLow: 44,
            octaveHigh: 241,
            title: "Additional",
            numKy: null,
            numTj: null,
          },
          {
            songId: 23826,
            mfccMean: 0.166215,
            stftMean: -0.0353391,
            zcrMean: 0.175931,
            spcMean: 0.412295,
            sprMean: 0.87992,
            rmsMean: -0.374495,
            mfccVar: -0.442528,
            stftVar: 0.0246057,
            zcrVar: 1.03072,
            spcVar: 1.0607,
            sprVar: 1.02737,
            rmsVar: -0.00348258,
            octaveLow: 38,
            octaveHigh: 234,
            title: "Always With You",
            numKy: null,
            numTj: null,
          },
          {
            songId: 23827,
            mfccMean: -0.155638,
            stftMean: 0.149996,
            zcrMean: 0.138088,
            spcMean: 0.320705,
            sprMean: 0.616679,
            rmsMean: -0.299754,
            mfccVar: -0.0260492,
            stftVar: 0.0884927,
            zcrVar: -0.0640177,
            spcVar: -0.0636966,
            sprVar: -0.220217,
            rmsVar: -0.111858,
            octaveLow: 37,
            octaveHigh: 299,
            title: "Christmas Love",
            numKy: null,
            numTj: null,
          },
          {
            songId: 23828,
            mfccMean: -0.0835183,
            stftMean: -0.295664,
            zcrMean: 0.42191,
            spcMean: 0.412978,
            sprMean: 0.551612,
            rmsMean: -0.219351,
            mfccVar: -0.583678,
            stftVar: -0.0810107,
            zcrVar: 1.507,
            spcVar: 1.31223,
            sprVar: 1.33305,
            rmsVar: 0.102313,
            octaveLow: 51,
            octaveHigh: 240,
            title: "Dream",
            numKy: null,
            numTj: null,
          },
          {
            songId: 23829,
            mfccMean: 0.0504896,
            stftMean: 0.792446,
            zcrMean: -0.335476,
            spcMean: 0.0961138,
            sprMean: 0.905882,
            rmsMean: 0.31686,
            mfccVar: -0.496832,
            stftVar: 0.38261,
            zcrVar: 0.107036,
            spcVar: 0.0561224,
            sprVar: 0.189657,
            rmsVar: 0.592584,
            octaveLow: 45,
            octaveHigh: 153,
            title: "Ex",
            numKy: null,
            numTj: null,
          },
        ],
      },
      {
        singerId: 23,
        name: "김조한",
        similarityPercent: 0.049102977,
        songList: [
          {
            songId: 20840,
            mfccMean: -0.425157,
            stftMean: -0.240193,
            zcrMean: -1.07377,
            spcMean: -0.715262,
            sprMean: -0.556934,
            rmsMean: 0.201351,
            mfccVar: 0.284783,
            stftVar: -0.150838,
            zcrVar: -1.31164,
            spcVar: -1.34904,
            sprVar: -1.49521,
            rmsVar: -1.27045,
            octaveLow: 58,
            octaveHigh: 275,
            title: "AMAZING GRACE",
            numKy: null,
            numTj: null,
          },
          {
            songId: 20841,
            mfccMean: -0.770248,
            stftMean: 0.361348,
            zcrMean: -1.1957,
            spcMean: -0.927199,
            sprMean: -0.287611,
            rmsMean: 0.247498,
            mfccVar: -0.201422,
            stftVar: -0.151768,
            zcrVar: -1.3977,
            spcVar: -1.36696,
            sprVar: -0.656838,
            rmsVar: -1.08208,
            octaveLow: 77,
            octaveHigh: 330,
            title: "Baby Plese Dont Go",
            numKy: null,
            numTj: null,
          },
          {
            songId: 20842,
            mfccMean: -0.308681,
            stftMean: -0.425292,
            zcrMean: -0.663975,
            spcMean: -0.822386,
            sprMean: -0.763444,
            rmsMean: -0.828888,
            mfccVar: 0.682729,
            stftVar: 0.111176,
            zcrVar: 0.291452,
            spcVar: 0.270812,
            sprVar: 0.949312,
            rmsVar: -1.23174,
            octaveLow: 28,
            octaveHigh: 271,
            title: "Collage",
            numKy: null,
            numTj: null,
          },
          {
            songId: 20843,
            mfccMean: 0.328344,
            stftMean: -0.700833,
            zcrMean: -0.521363,
            spcMean: -1.7048,
            sprMean: -2.8084,
            rmsMean: -2.53519,
            mfccVar: -1.31165,
            stftVar: -0.127653,
            zcrVar: -0.0976938,
            spcVar: 0.864465,
            sprVar: 1.86509,
            rmsVar: -1.89748,
            octaveLow: 52,
            octaveHigh: 215,
            title: "Curse ",
            numKy: null,
            numTj: null,
          },
          {
            songId: 20844,
            mfccMean: -0.140878,
            stftMean: -0.10259,
            zcrMean: -0.15397,
            spcMean: -0.0490243,
            sprMean: 0.133625,
            rmsMean: 1.50564,
            mfccVar: 0.388475,
            stftVar: -0.0871355,
            zcrVar: -0.209413,
            spcVar: -0.111528,
            sprVar: -0.240452,
            rmsVar: 0.971899,
            octaveLow: 76,
            octaveHigh: 315,
            title: "Curse (악담)",
            numKy: null,
            numTj: null,
          },
        ],
      },
      {
        singerId: 19,
        name: "김범수",
        similarityPercent: 0.04235223,
        songList: [
          {
            songId: 20639,
            mfccMean: 0.450794,
            stftMean: 0.594055,
            zcrMean: 0.474295,
            spcMean: 0.420357,
            sprMean: 0.370856,
            rmsMean: -1.67652,
            mfccVar: -1.04719,
            stftVar: 0.314531,
            zcrVar: 1.8614,
            spcVar: 1.53804,
            sprVar: 1.58058,
            rmsVar: -1.45107,
            octaveLow: 57,
            octaveHigh: 270,
            title: "1994년 어느 늦은 밤",
            numKy: null,
            numTj: null,
          },
          {
            songId: 20640,
            mfccMean: -0.0253286,
            stftMean: 0.34291,
            zcrMean: 2.86489,
            spcMean: 2.36779,
            sprMean: 1.57594,
            rmsMean: -1.935,
            mfccVar: -0.961308,
            stftVar: -0.10917,
            zcrVar: 3.07962,
            spcVar: 2.60017,
            sprVar: 1.57721,
            rmsVar: -1.60331,
            octaveLow: 99,
            octaveHigh: 169,
            title: "Back At One",
            numKy: null,
            numTj: null,
          },
          {
            songId: 20641,
            mfccMean: 0.252045,
            stftMean: 0.41778,
            zcrMean: 1.27023,
            spcMean: 0.68815,
            sprMean: 0.109658,
            rmsMean: -2.17111,
            mfccVar: -1.27828,
            stftVar: 0.120164,
            zcrVar: 1.23331,
            spcVar: 1.43912,
            sprVar: 2.49304,
            rmsVar: -1.66782,
            octaveLow: 60,
            octaveHigh: 289,
            title: "ENCORE (하루+보고싶다)",
            numKy: null,
            numTj: null,
          },
          {
            songId: 20642,
            mfccMean: 0.489878,
            stftMean: 0.81289,
            zcrMean: 2.57423,
            spcMean: 1.9521,
            sprMean: 0.850579,
            rmsMean: -1.76174,
            mfccVar: -1.23611,
            stftVar: 0.123095,
            zcrVar: 3.21219,
            spcVar: 3.3727,
            sprVar: 3.05978,
            rmsVar: -1.33238,
            octaveLow: 66,
            octaveHigh: 183,
            title: "Fine (The end)",
            numKy: null,
            numTj: null,
          },
          {
            songId: 20643,
            mfccMean: -0.0700884,
            stftMean: -0.00998031,
            zcrMean: 0.648969,
            spcMean: 0.419858,
            sprMean: -0.0613466,
            rmsMean: -0.281918,
            mfccVar: -0.407726,
            stftVar: 0.0922887,
            zcrVar: 1.46424,
            spcVar: 1.39553,
            sprVar: 1.24102,
            rmsVar: 0.0171604,
            octaveLow: 50,
            octaveHigh: 300,
            title: "Fixed On You",
            numKy: null,
            numTj: null,
          },
        ],
      },
      {
        singerId: 66,
        name: "이승열",
        similarityPercent: 0.041737735,
        songList: [
          {
            songId: 22615,
            mfccMean: 0.00046925,
            stftMean: 0.455888,
            zcrMean: -1.28068,
            spcMean: -1.16005,
            sprMean: -0.593114,
            rmsMean: -0.592207,
            mfccVar: -0.555652,
            stftVar: 0.134135,
            zcrVar: -0.80115,
            spcVar: -0.850322,
            sprVar: -0.0322356,
            rmsVar: -0.937578,
            octaveLow: 72,
            octaveHigh: 258,
            title: "5am",
            numKy: null,
            numTj: null,
          },
          {
            songId: 22616,
            mfccMean: -0.240672,
            stftMean: 0.657039,
            zcrMean: 1.17422,
            spcMean: 1.12225,
            sprMean: 0.859163,
            rmsMean: 0.65631,
            mfccVar: 0.228192,
            stftVar: 0.104919,
            zcrVar: 1.05798,
            spcVar: 1.04511,
            sprVar: 0.627645,
            rmsVar: 1.01318,
            octaveLow: 53,
            octaveHigh: 281,
            title: "A Letter From",
            numKy: null,
            numTj: null,
          },
          {
            songId: 22617,
            mfccMean: -0.0697752,
            stftMean: 0.227643,
            zcrMean: -1.26175,
            spcMean: -1.1288,
            sprMean: -0.741635,
            rmsMean: 0.326486,
            mfccVar: -0.330322,
            stftVar: 0.180285,
            zcrVar: -0.129766,
            spcVar: -0.209816,
            sprVar: 0.155923,
            rmsVar: -0.831783,
            octaveLow: 27,
            octaveHigh: 279,
            title: "Acrobat",
            numKy: null,
            numTj: null,
          },
          {
            songId: 22618,
            mfccMean: 0.0941809,
            stftMean: 0.244804,
            zcrMean: 0.0496119,
            spcMean: 0.171342,
            sprMean: 0.0935685,
            rmsMean: -0.847573,
            mfccVar: -0.631877,
            stftVar: 0.194939,
            zcrVar: 0.416001,
            spcVar: 0.593138,
            sprVar: 0.810145,
            rmsVar: -0.6718,
            octaveLow: 38,
            octaveHigh: 201,
            title: "Adonai",
            numKy: null,
            numTj: null,
          },
          {
            songId: 22619,
            mfccMean: -0.0291764,
            stftMean: 0.158368,
            zcrMean: -0.4886,
            spcMean: -0.708862,
            sprMean: -0.629918,
            rmsMean: 0.48333,
            mfccVar: -0.124621,
            stftVar: 0.0346195,
            zcrVar: -0.331288,
            spcVar: -0.0286263,
            sprVar: 0.882798,
            rmsVar: 1.32283,
            octaveLow: 90,
            octaveHigh: 219,
            title: "All the Welcomes",
            numKy: null,
            numTj: null,
          },
        ],
      },
      {
        singerId: 90,
        name: "케이윌",
        similarityPercent: 0.041296516,
        songList: [
          {
            songId: 23645,
            mfccMean: 0.187283,
            stftMean: 0.100654,
            zcrMean: -0.265747,
            spcMean: -0.310514,
            sprMean: -0.373102,
            rmsMean: 0.177004,
            mfccVar: -0.441863,
            stftVar: -0.0247667,
            zcrVar: 0.953749,
            spcVar: 1.06074,
            sprVar: 1.50483,
            rmsVar: 0.468726,
            octaveLow: 36,
            octaveHigh: 236,
            title: "All I Have is My Heart",
            numKy: null,
            numTj: null,
          },
          {
            songId: 23646,
            mfccMean: -0.46201,
            stftMean: -0.263942,
            zcrMean: -1.09864,
            spcMean: -0.899116,
            sprMean: -0.265672,
            rmsMean: -0.290128,
            mfccVar: -0.0350204,
            stftVar: 0.0681848,
            zcrVar: -1.01978,
            spcVar: -0.820002,
            sprVar: 0.518194,
            rmsVar: -0.682121,
            octaveLow: 30,
            octaveHigh: 243,
            title: "BLUFFING",
            numKy: null,
            numTj: null,
          },
          {
            songId: 23647,
            mfccMean: -0.27491,
            stftMean: -0.0433945,
            zcrMean: -0.213888,
            spcMean: 0.166415,
            sprMean: 0.98266,
            rmsMean: 0.717745,
            mfccVar: 0.129709,
            stftVar: 0.126284,
            zcrVar: 0.116657,
            spcVar: -0.024484,
            sprVar: 0.30307,
            rmsVar: 0.649352,
            octaveLow: 21,
            octaveHigh: 158,
            title: "BUTTERFLY",
            numKy: null,
            numTj: null,
          },
          {
            songId: 23648,
            mfccMean: -0.324215,
            stftMean: -0.836042,
            zcrMean: -1.97797,
            spcMean: -2.29533,
            sprMean: -2.14592,
            rmsMean: 1.51951,
            mfccVar: 0.234,
            stftVar: -0.270449,
            zcrVar: -1.60938,
            spcVar: -1.38549,
            sprVar: 0.562103,
            rmsVar: 1.01318,
            octaveLow: 78,
            octaveHigh: 311,
            title: "Delete",
            numKy: null,
            numTj: null,
          },
          {
            songId: 23649,
            mfccMean: -0.0337031,
            stftMean: 0.105182,
            zcrMean: 0.702229,
            spcMean: 0.956926,
            sprMean: 1.45701,
            rmsMean: 0.74549,
            mfccVar: -0.103477,
            stftVar: 0.125815,
            zcrVar: 1.27394,
            spcVar: 0.950968,
            sprVar: 0.300265,
            rmsVar: 1.10092,
            octaveLow: 63,
            octaveHigh: 330,
            title: "FALL IN LOVE",
            numKy: null,
            numTj: null,
          },
        ],
      },
    ],
  };

  function clickVideo(name, keyword) {
    const url = 'https://www.youtube.com/results?search_query=' + name + " " + keyword;
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
            <p className="text-xl lg:text-4xl text-white">음색 검사 결과</p>
          </TitleContainer>
          <MainContainer>
            <div className="lg:flex flex-col lg:flex-row w-full h-2/6 justify-between bg-black fade-in-custom-10s">

              <div className="flex flex-col w-full lg:w-1/4">
                <p className="text-white text-center lg:text-left text-md font-nanum mx-2 lg:text-2xl">000님의 00일 </p>
                <p className="text-white text-center lg:text-left text-md font-nanum mx-2 lg:text-2xl mb-4">음색 검사 결과입니다.</p>
                <p className="text-white text-center lg:text-left text-sm font-nanum mx-2 lg:text-lg mb-2">유사도 1위 : {result.singerDetails[0].name}</p>
                <p className="text-white text-center lg:text-left text-sm font-nanum mx-2 lg:text-lg mb-2">유사도 2위 : {result.singerDetails[1].name}</p>
                <p className="text-white text-center lg:text-left text-sm font-nanum mx-2 lg:text-lg mb-2">유사도 3위 : {result.singerDetails[2].name}</p>
                <p className="text-white text-center lg:text-left text-sm font-nanum mx-2 lg:text-lg mb-2">유사도 4위 : {result.singerDetails[3].name}</p>
                <p className="text-white text-center lg:text-left text-sm font-nanum mx-2 lg:text-lg mb-2">유사도 5위 : {result.singerDetails[4].name}</p>
              </div>

              <div className="hidden lg:flex lg:flex-row w-full lg:w-2/3 lg:w-1/5 h-full justify-center lg:justify-between items-center border rounded-2xl ">

                <div className="flex flex-col w-full lg:w-1/4 h-1/4 lg:h-full justify-center items-center bg-white rounded-t-2xl lg:rounded-2xl">
                  <div className="flex flex-row w-2/3 h-2/3 bg-black justify-center items-center rounded-full">
                    <p className="text-white text-center text-sm font-alatsi mx-2 lg:text-2xl">
                      1st
                    </p>
                    <p className="text-white text-center text-2xl font-nanum mx-2 lg:text-4xl">
                      {result.singerDetails[0].name}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-full lg:w-2/5">
                  <ResultChart result={result} index={0} />
                </div>

                <div className="flex flex-col w-full lg:w-1/4 justify-start items-center mb-3 lg:mr-3">
                  <p className="text-white text-center text-lg mb-2">
                    [ 대표 노래 ]
                  </p>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[0].name, result.singerDetails[0].songList[0].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[0].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[0].name, result.singerDetails[0].songList[1].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[1].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[0].name, result.singerDetails[0].songList[2].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[2].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[0].name, result.singerDetails[0].songList[3].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[3].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[1].name, result.singerDetails[1].songList[4].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[4].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full h-5/9 justify-between items-center bg-black fade-in-custom-15s">
              {/* 1번 카드 */}
              <div className="flex flex-col w-full lg:w-1/5 lg:h-full justify-between items-center border rounded-2xl lg:hidden mb-4">
                <div className="flex flex-col w-full h-1/4 justify-center items-center bg-white rounded-t-2xl">
                  <div className="flex flex-row w-2/3 h-2/3 bg-black justify-center items-center rounded-full">
                    <p className="text-white text-center text-sm font-alatsi mx-2">
                      1st
                    </p>
                    <p className="text-white text-center text-2xl font-nanum mx-2">
                      {result.singerDetails[0].name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={0} />
                <div className="flex flex-col w-full justify-start items-center mb-3">
                  <p className="text-white text-center text-lg mb-2">
                    [ 대표 노래 ]
                  </p>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[0].name, result.singerDetails[0].songList[0].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[0].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[0].name, result.singerDetails[0].songList[1].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[1].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[0].name, result.singerDetails[0].songList[2].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[2].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[0].name, result.singerDetails[0].songList[3].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[3].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[0].name, result.singerDetails[0].songList[4].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[0].songList[4].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                </div>
              </div>

              {/* 2번 카드 */}
              <div className="flex flex-col w-full lg:w-1/5 lg:h-full justify-between items-center border rounded-2xl mb-4">
                <div className="flex flex-col w-full h-1/4 justify-center items-center bg-white rounded-t-2xl">
                  <div className="flex flex-row w-2/3 h-2/3 bg-black justify-center items-center rounded-full">
                    <p className="text-white text-center text-sm font-alatsi mx-2">
                      2nd
                    </p>
                    <p className="text-white text-center text-2xl font-nanum mx-2">
                      {result.singerDetails[1].name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={1} />
                <div className="flex flex-col w-full justify-start items-center mb-3">
                  <p className="text-white text-center text-lg mb-2">
                    [ 대표 노래 ]
                  </p>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[1].name, result.singerDetails[1].songList[0].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[1].songList[0].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[1].name, result.singerDetails[1].songList[1].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[1].songList[1].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[1].name, result.singerDetails[1].songList[2].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[1].songList[2].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[1].name, result.singerDetails[1].songList[3].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[1].songList[3].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[1].name, result.singerDetails[1].songList[4].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[1].songList[4].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                </div>
              </div>
              {/* 3번 카드 */}
              <div className="flex flex-col w-full lg:w-1/5 lg:h-full justify-between items-center border rounded-2xl mb-4">
                <div className="flex flex-col w-full h-1/4 justify-center items-center bg-white rounded-t-2xl">
                  <div className="flex flex-row w-2/3 h-2/3 bg-black justify-center items-center rounded-full">
                    <p className="text-white text-center text-sm font-alatsi mx-2">
                      3rd
                    </p>
                    <p className="text-white text-center text-2xl font-nanum mx-2">
                      {result.singerDetails[2].name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={2} />
                <div className="flex flex-col w-full justify-start items-center mb-3">
                  <p className="text-white text-center text-lg mb-2">
                    [ 대표 노래 ]
                  </p>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[2].name, result.singerDetails[2].songList[0].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[2].songList[0].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[2].name, result.singerDetails[2].songList[1].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[2].songList[1].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[2].name, result.singerDetails[2].songList[2].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[2].songList[2].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[2].name, result.singerDetails[2].songList[3].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[2].songList[3].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[2].name, result.singerDetails[2].songList[4].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[2].songList[4].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                </div>
              </div>
              {/* 4번 카드 */}
              <div className="flex flex-col w-full lg:w-1/5 lg:h-full justify-between items-center border rounded-2xl mb-4">
                <div className="flex flex-col w-full h-1/4 justify-center items-center bg-white rounded-t-2xl">
                  <div className="flex flex-row w-2/3 h-2/3 bg-black justify-center items-center rounded-full">
                    <p className="text-white text-center text-sm font-alatsi mx-2">
                      4th
                    </p>
                    <p className="text-white text-center text-2xl font-nanum mx-2">
                      {result.singerDetails[3].name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={3} />
                <div className="flex flex-col w-full justify-start items-center mb-3">
                  <p className="text-white text-center text-lg mb-2">
                    [ 대표 노래 ]
                  </p>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[3].name, result.singerDetails[3].songList[0].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[3].songList[0].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[3].name, result.singerDetails[3].songList[1].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[3].songList[1].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[3].name, result.singerDetails[3].songList[2].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[3].songList[2].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[3].name, result.singerDetails[3].songList[3].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[3].songList[3].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[3].name, result.singerDetails[3].songList[4].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[3].songList[4].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                </div>
              </div>
              {/* 5번 카드 */}
              <div className="flex flex-col w-full lg:w-1/5 lg:h-full justify-between items-center border rounded-2xl">
                <div className="flex flex-col w-full h-1/4 justify-center items-center bg-white rounded-t-2xl">
                  <div className="flex flex-row w-2/3 h-2/3 bg-black justify-center items-center rounded-full">
                    <p className="text-white text-center text-sm font-alatsi mx-2">
                      5th
                    </p>
                    <p className="text-white text-center text-2xl font-nanum mx-2">
                      {result.singerDetails[4].name}
                    </p>
                  </div>
                </div>
                <ResultChart result={result} index={4} />
                <div className="flex flex-col w-full justify-start items-center mb-3">
                  <p className="text-white text-center text-lg mb-2">
                    [ 대표 노래 ]
                  </p>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[4].name, result.singerDetails[4].songList[0].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[4].songList[0].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[4].name, result.singerDetails[4].songList[1].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[4].songList[1].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[4].name, result.singerDetails[4].songList[2].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[4].songList[2].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[4].name, result.singerDetails[4].songList[3].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[4].songList[3].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
                  </button>
                  <button className="flex flex-row w-full justify-between items-center mb-1" onClick={() => clickVideo(result.singerDetails[4].name, result.singerDetails[4].songList[4].title)}>
                    <p className="flex text-white ml-4">
                      1. {result.singerDetails[4].songList[4].title}
                    </p>
                    <PlayIcon className="flex w-6 h-6 text-red-600 mr-4" />
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
