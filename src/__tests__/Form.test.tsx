import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../components/Form";

test("renders a message", () => {
  render(<Form />);
  const radioElements = screen.getAllByPlaceholderText(/radio/i);
  expect(radioElements.length).toBe(5);
  expect(screen.getByPlaceholderText(/keyword/i)).toBeTruthy();
});
