import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders data table ", () => {
  render(<App />);
  const dataTableElement = screen.getByText(
    /Genes associated with lung carcinoma/i
  );
  expect(dataTableElement).toBeInTheDocument();
});
