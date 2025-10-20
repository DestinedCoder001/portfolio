import Hero from "@/components/Hero";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Hero Section", () => {
  test("component renders correctly", () => {
    const { getByText, getByRole } = render(<Hero />);
    const text = getByText(/frontend developer/i);
    const image = getByRole("img", { name: "hero image" });
    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
