import React from "react";
import renderer from "react-test-renderer";

import TableCellLink from "./TableCellLink";

it("renders when no text and link is passed as prop", () => {
  const element = renderer.create(<TableCellLink />).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when only text is passed as prop", () => {
  const element = renderer.create(<TableCellLink text="EMBL" />).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when only link is passed as prop", () => {
  const element = renderer
    .create(<TableCellLink link="https://www.embl.org" />)
    .toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when both link and text is passed as prop", () => {
  const element = renderer
    .create(<TableCellLink link="https://www.embl.org" text="EMBL" />)
    .toJSON();

  expect(element).toMatchSnapshot();
});
