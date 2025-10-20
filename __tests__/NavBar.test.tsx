import NavBar from "@/components/NavBar";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<NavBar />);
    const nav = getByTestId("navbar");
    expect(nav).toBeInTheDocument();
  });

  test("desktop links are rendered", () => {
    // (nav open state is false initially and desktop links are rendered)
    const { queryByTestId } = render(<NavBar />);
    const linksContainer = queryByTestId("desktop-links");
    expect(linksContainer).toBeInTheDocument();
  });

  test("mobile links are hidden", () => {
    const { queryByTestId } = render(<NavBar />);
    const linksContainer = queryByTestId("mobile-links");
    expect(linksContainer).not.toBeInTheDocument();
  });

  test("mobile links toggle open/close state", async () => {
    const user = userEvent.setup();
    const { queryByTestId, getByRole } = render(<NavBar />);
    const button = getByRole("button");

    expect(queryByTestId("mobile-links")).not.toBeInTheDocument();

    await user.click(button);
    expect(queryByTestId("mobile-links")).toBeInTheDocument();

    await user.click(button);
    expect(queryByTestId("mobile-links")).not.toBeInTheDocument();
  });

  test("desktop links are hidden on resize", () => {
    const { queryByTestId } = render(<NavBar />);
    expect(queryByTestId("desktop-links")).toBeInTheDocument();
    window.innerWidth = 768;
    window.dispatchEvent(new Event("resize"));
    expect(queryByTestId("desktop-links")).not.toBeVisible();
  });
});
