import React from "react";
import renderer from "react-test-renderer";

import TableCellAccordionBtn from "./TableCellAccordionBtn";

it("renders when no text is passed as prop", () => {
  const element = renderer.create(<TableCellAccordionBtn />).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when text and row id is passed as prop", () => {
  const element = renderer.create(<TableCellAccordionBtn text="+" />).toJSON();

  expect(element).toMatchSnapshot();
});
