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
  if (type === "bar") {
    const state = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: "#3489ca",
          borderWidth: 0,
          data: [65, 59, 80, 81, 56],
        },
      ],
    };
    chartType = <Bar className="max-h-full max-w-full" data={state} />;
  } else if (type === "radar") {
    const state = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: "transparent",
          borderColor: "#3489ca",
          data: [65, 59, 80, 81, 56],
        },
      ],
    };
    chartType = <Radar className="max-h-full max-w-full" data={state} />;
  }
  return <React.Fragment>{chartType}</React.Fragment>;
}

export default ChartComponent;
