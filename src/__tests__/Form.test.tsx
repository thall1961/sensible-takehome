import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../components/Form";

/**
 * Initially, I wanted to have this little project heavily tested with a high code coverage
 * but soon realized that 4 hours was shorter than I had anticipated 😂.  I wanted to include
 * a brief testing preview but decided to spend more time on implementing a better UI/UX
 * in "Ship Mode" and skip tests for now.
 */

test("renders a message", () => {
  render(<Form />);
  const radioElements = screen.getAllByPlaceholderText(/radio/i);
  expect(radioElements.length).toBe(5);
  expect(screen.getByPlaceholderText(/keyword/i)).toBeTruthy();
});
