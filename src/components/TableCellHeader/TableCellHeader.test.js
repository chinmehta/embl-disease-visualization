import React from "react";
import renderer from "react-test-renderer";

import TableCellHeader from "./TableCellHeader";

it("renders when no text  is passed as prop", () => {
  const element = renderer.create(<TableCellHeader />).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when header text is passed as prop", () => {
  const element = renderer.create(<TableCellHeader text="EMBL" />).toJSON();

  expect(element).toMatchSnapshot();
});
