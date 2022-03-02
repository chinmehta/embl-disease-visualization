import React from "react";
import renderer from "react-test-renderer";
import ChartComponent from "./ChartComponent";

it("renders when no data and type is passed as prop", () => {
  const element = renderer.create(<ChartComponent />).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when data and type is passed as prop -radar", () => {
  const data = {
    label: ["label 1", "label 2", "label 3"],
    chartDataArray: [0.3, 0.2, 0.9],
    approvedSymbol: "EMB",
  };
  const element = renderer
    .create(<ChartComponent type="radar" data={data} />)
    .toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when data and type is passed as prop -bar", () => {
  const data = {
    label: ["label 1", "label 2", "label 3"],
    chartDataArray: [0.3, 0.2, 0.9],
    approvedSymbol: "EMB",
  };
  const element = renderer
    .create(<ChartComponent type="bar" data={data} />)
    .toJSON();

  expect(element).toMatchSnapshot();
});
