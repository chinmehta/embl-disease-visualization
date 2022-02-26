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
  let state = {
    labels: ["january", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        data: [65, 59, 80, 81, 56],
        backgroundColor: EMBL_PRIMARY_BLUE,
        borderColor: EMBL_PRIMARY_BLUE,
      },
    ],
  };
  if (type === "bar") {
    chartType = <Bar className="max-h-full max-w-full" data={state} />;
  } else if (type === "radar") {
    state.datasets[0].backgroundColor = "transparent";
    chartType = <Radar className="max-h-full max-w-full" data={state} />;
  }
  return <React.Fragment>{chartType}</React.Fragment>;
}

export default ChartComponent;
