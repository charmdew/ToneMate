import { Chart } from "react-chartjs-2";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

function ResultChart(props) {
  // ChartJs 설정
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

  // 차트 데이터
  const data = {
    labels: [
      "mfccMean",
      "stftMean",
      "zcrMean",
      "spcMean",
      "sprMean",
      "rmsMean",
      "mfccVar",
      "stftVar",
      "zcrVar",
      "spcVar",
      "sprVar",
      "rmsVar",
    ],
    datasets: [],
  };

  // 차트옵션
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: true,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        display: false,
      },
      y: {
        grid: {
          color: "white",
        },
        min: -3,
        max: 3,
        ticks: {
          color: "white",
        },
      },
    },
  };

  // useEffect - DidMount
  useEffect(() => {
    // 유저 데이터
    const userData = {
      type: "line",
      label: "User",
      data: [],
      fill: false,
      borderColor: "red",
      borderWidth: 2,
    };
    userData.data.push(parseFloat(props.result.mfccMean));
    userData.data.push(parseFloat(props.result.stftMean));
    userData.data.push(parseFloat(props.result.zcrMean));
    userData.data.push(parseFloat(props.result.spcMean));
    userData.data.push(parseFloat(props.result.sprMean));
    userData.data.push(parseFloat(props.result.rmsMean));
    userData.data.push(parseFloat(props.result.mfccVar));
    userData.data.push(parseFloat(props.result.stftVar));
    userData.data.push(parseFloat(props.result.zcrVar));
    userData.data.push(parseFloat(props.result.spcVar));
    userData.data.push(parseFloat(props.result.sprVar));
    userData.data.push(parseFloat(props.result.rmsVar));
    data.datasets.push(userData);

    // 가수 데이터
    const singerData = {
      type: "line",
      label: "singer",
      data: [],
      fill: false,
      borderColor: "blue",
      borderWidth: 2,
    };
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);
    singerData.data.push(0);

    for (let idx = 0; idx < 5; idx++) {
      singerData.data[0] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].mfccMean
      );
      singerData.data[1] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].stftMean
      );
      singerData.data[2] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].zcrMean
      );
      singerData.data[3] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].spcMean
      );
      singerData.data[4] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].sprMean
      );
      singerData.data[5] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].rmsMean
      );
      singerData.data[6] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].mfccVar
      );
      singerData.data[7] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].stftVar
      );
      singerData.data[8] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].zcrVar
      );
      singerData.data[9] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].spcVar
      );
      singerData.data[10] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].sprVar
      );
      singerData.data[11] += parseFloat(
        props.result.singerDetails[props.index].songList[idx].rmsVar
      );
    }

    for (let index = 0; index < 12; index++) {
      singerData.data[index] /= 5;
    }

    data.datasets.push(singerData);
  });

  return (
    <>
      <div className="flex flex-col w-11/12 justify-center items-center my-3">
        <p className="text-white">유사도 그래프</p>
        <Chart data={data} options={options} className="w-full" />
      </div>
    </>
  );
}

export default ResultChart;
