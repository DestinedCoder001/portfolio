import Projects from "@/components/Projects";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { projects } from "@/utils/constants";

jest.mock("framer-motion", () => {
  const actual = jest.requireActual("framer-motion");
  return {
    ...actual,
    useInView: () => true,
  };
});

describe("Projects section", () => {
  test("renders correctly", () => {
    const { getByText } = render(<Projects />);
    const element = getByText(/selection of projects/i);
    expect(element).toBeInTheDocument();
  });

  test("renders projects correctly with props", () => {
    const { getAllByTestId } = render(<Projects />);
    const items = getAllByTestId("single-project");
    expect(items.length).toEqual(projects.length);
    projects.forEach((p, i) => {
      expect(items[i]).toHaveTextContent(p.description);
    });
  });
});
