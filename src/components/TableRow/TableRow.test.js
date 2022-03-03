import React from "react";
import renderer from "react-test-renderer";
import TableRow from "./TableRow";

it("renders when no data  is passed as prop", () => {
  const element = renderer.create(<TableRow />).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when data  is passed as prop", () => {
  const singleRow = {
    approvedSymbol: "EGFR",
    approvedName: "epidermal growth factor receptor",
    score: 0.890384,
    label: ["label1", "label2"],
    chartDataArray: [0.4, 0.9],
  };
  const element = renderer.create(<TableRow data={singleRow} />).toJSON();

  expect(element).toMatchSnapshot();
});
