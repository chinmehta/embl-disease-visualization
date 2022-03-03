import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Tabs from "./Tabs";
import Tab from "../Tab/Tab";

it("renders when no children is passed as prop", () => {
  const element = renderer.create(<Tabs></Tabs>).toJSON();

  expect(element).toMatchSnapshot();
});

it("renders when children is passed as prop - snapshot", () => {
  const element = renderer
    .create(
      <Tabs>
        <div label="tab text 1">Tab1</div>
        <div label="tab text 2">Tab2</div>
      </Tabs>
    )
    .toJSON();

  expect(element).toMatchSnapshot();
});

test("renders when children without tab label is passed as prop", () => {
  render(
    <table>
      <tbody>
        <tr>
          <Tabs>
            <Tab>Tab1</Tab>
            <Tab>Tab2</Tab>
          </Tabs>
        </tr>
      </tbody>
    </table>
  );
  const tabElement = screen.getByText(/Tab 1/i);
  expect(tabElement).toBeInTheDocument();
});

test("renders when children with tab label is passed as prop", () => {
  render(
    <table>
      <tbody>
        <tr>
          <Tabs>
            <Tab label="tab text 1">Tab1</Tab>
            <Tab label="tab text 2">Tab2</Tab>
          </Tabs>
        </tr>
      </tbody>
    </table>
  );
  const tabElement = screen.getByText(/tab text 1/i);
  expect(tabElement).toBeInTheDocument();
});
