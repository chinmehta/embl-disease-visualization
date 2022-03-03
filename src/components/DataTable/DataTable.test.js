import React from "react";
import renderer from "react-test-renderer";
import DataTable from "./DataTable";

it("renders when no data  is passed as prop", () => {
  const element = renderer.create(<DataTable />).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when data  is passed as prop", () => {
  const tableData = [
    {
      approvedSymbol: "EGFR",
      approvedName: "epidermal growth factor receptor",
      score: 0.890384,
      label: ["label1", "label2"],
      chartDataArray: [0.4, 0.9],
    },
    {
      approvedSymbol: "KRAS",
      approvedName: "KRAS proto-oncogene, GTPase",
      score: 0.790384,
      label: ["label1", "label2"],
      chartDataArray: [0.4, 0.9],
    },
  ];
  const tableDataHeader = [
    "",
    "Approved Symbol",
    "Gene Name",
    "Overall Association Score",
  ];
  const element = renderer
    .create(
      <DataTable tableData={tableData} tableDataHeader={tableDataHeader} />
    )
    .toJSON();

  expect(element).toMatchSnapshot();
});
