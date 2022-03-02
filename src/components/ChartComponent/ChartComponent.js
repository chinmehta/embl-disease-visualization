import React from "react";
import { Bar, Radar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

function ChartComponent({ type, data }) {
  let chartType;
  const EMBL_PRIMARY_BLUE = "#3489ca";
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Data Type Score: ${data.approvedSymbol} and lung carcinoma`,
      },
    },
  };

  let state = {
    labels: data.label,
    datasets: [
      {
        data: data.chartDataArray,
        backgroundColor: EMBL_PRIMARY_BLUE,
        borderColor: EMBL_PRIMARY_BLUE,
      },
    ],
  };
  if (type === "bar") {
    options["scales"] = {
      yAxes: {
        title: {
          display: true,
          text: "Association Score",
        },
      },
      xAxes: {
        title: {
          display: true,
          text: "Data Type",
        },
      },
    };
    chartType = (
      <Bar options={options} className="max-h-full max-w-full" data={state} />
    );
  } else if (type === "radar") {
    state.datasets[0].backgroundColor = "transparent";
    chartType = (
      <Radar options={options} className="max-h-full max-w-full" data={state} />
    );
  }
  return <>{chartType}</>;
}

export default ChartComponent;
