import SingleProject from "@/components/SingleProject";
import { projects } from "@/utils/constants";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useInView } from "framer-motion";

jest.mock("framer-motion", () => {
  const actual = jest.requireActual("framer-motion");
  return { ...actual, useInView: () => true };
});

describe("Single Project", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<SingleProject {...projects[0]} />);
    expect(getByTestId("single-project")).toBeInTheDocument();
  });
  
  test("conditionally renders video or photo", () => {
    const { getByTestId: testVideo } = render(
      <SingleProject {...projects[0]} hasDemoVideo image={projects[1].image} />
    );
    expect(testVideo("video-demo")).toBeInTheDocument();
    const { getByTestId: testPhoto } = render(
      <SingleProject {...projects[0]} hasDemoVideo={false} image={projects[1].image} />
    );
    expect(testPhoto("photo-demo")).toBeInTheDocument();
  });
});
