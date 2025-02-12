import { render, screen } from "@testing-library/react";

import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "../App";

test('renders "React" text', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/react/i);
    expect(helloWorldElement).toBeInTheDocument();
});

test("has correct class names", () => {
    render(<App />);
    const helloWorldElement = screen.getByTestId("heading");
    expect(helloWorldElement).toHaveClass("text-3xl");
    expect(helloWorldElement).toHaveClass("font-bold");
    expect(helloWorldElement).toHaveClass("underline");
    expect(helloWorldElement).toHaveClass("text-blue-600");
    expect(helloWorldElement).toHaveClass("align-text-top");
});
