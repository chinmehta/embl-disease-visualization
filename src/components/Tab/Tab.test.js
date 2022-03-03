import React from "react";
import renderer from "react-test-renderer";

import Tab from "./Tab";

it("renders when no children is passed as prop", () => {
  const element = renderer.create(<Tab />).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when children is passed as prop", () => {
  const element = renderer
    .create(
      <Tab>
        <div>Test Text</div>
      </Tab>
    )
    .toJSON();

  expect(element).toMatchSnapshot();
});
