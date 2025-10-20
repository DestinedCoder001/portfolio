import Skills from "@/components/Skills";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { icons } from "@/utils/constants";

jest.mock("framer-motion", () => {
  const actual = jest.requireActual("framer-motion");
  return {
    ...actual,
    useInView: () => true,
  };
});

describe("Skills Section", () => {
  test("component renders correctly", () => {
    const { getByText } = render(<Skills />);
    const text = getByText(/tech stack/i);
    expect(text).toBeInTheDocument();
  });

  test("renders list of skills", () => {
    const { getAllByTestId } = render(<Skills />);
    const skills = getAllByTestId("skills");
    expect(skills.length).toEqual(icons.length);
  });
});
