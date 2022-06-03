import { render, screen } from "@testing-library/react";
import Products from "../Products";
import "@testing-library/jest-dom/extend-expect";

test("render Product screen and find container class", async () => {
  render(<Products />);
  const getElementByClassName = await screen.findByTestId("parent-container");
  expect(getElementByClassName).toHaveClass("container");
});
