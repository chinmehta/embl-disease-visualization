import React from "react";
import renderer from "react-test-renderer";

import TableCellText from "./TableCellText";

it("renders when no text is passed as prop", () => {
  const element = renderer.create(<TableCellText />).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when text is passed as prop", () => {
  const element = renderer.create(<TableCellText text="0.987" />).toJSON();

  expect(element).toMatchSnapshot();
});
