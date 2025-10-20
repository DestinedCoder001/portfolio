import Contact from "@/components/Contact";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import emailjs from "@emailjs/browser";

jest.mock("framer-motion", () => {
  const actual = jest.requireActual("framer-motion");
  return { ...actual, useInView: () => true };
});

describe("Contact section", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly", () => {
    const { getByText, getAllByRole, getByRole } = render(<Contact />);
    expect(getByText(/get in touch/i)).toBeInTheDocument();
    expect(getAllByRole("textbox").length).toBe(3);
    expect(getByRole("button", { name: /send message/i })).toBeInTheDocument();
    expect(getByText(/my email/i)).toBeInTheDocument();
  });

  test("input values should change", async () => {
    const { getByRole } = render(<Contact />);
    const emailInput = getByRole("textbox", { name: /email/i });
    const subjectInput = getByRole("textbox", { name: /subject/i });
    const messageInput = getByRole("textbox", { name: /message/i });
    const testValue = "hello";
    const user = userEvent.setup();
    await user.type(emailInput, testValue);
    expect(emailInput).toHaveValue(testValue);
    await user.type(subjectInput, testValue);
    expect(subjectInput).toHaveValue(testValue);
    await user.type(messageInput, testValue);
    expect(messageInput).toHaveValue(testValue);
  });

  test("button is disabled when submitting form", async () => {
    const mockSendForm = jest
      .fn()
      .mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ status: 200 }), 100)
          )
      );
    (emailjs.sendForm as jest.Mock) = mockSendForm;

    const { getByRole, getByLabelText } = render(<Contact />);
    const button = getByRole("button", { name: /send message/i });
    const user = userEvent.setup();

    await user.type(getByLabelText(/your email/i), "test@gmail.com");
    await user.type(getByLabelText(/subject/i), "Test subject");
    await user.type(getByLabelText(/message/i), "Hello!");

    await user.click(button);

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent("Sending...");

    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });

  test("success toast is shown when form is submitted successfully", async () => {
    const mockSendForm = jest
      .fn()
      .mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ status: 200 }), 100)
          )
      );
    (emailjs.sendForm as jest.Mock) = mockSendForm;

    const { getByRole, getByLabelText, queryByText } = render(<Contact />);
    const button = getByRole("button", { name: /send message/i });
    const user = userEvent.setup();

    await user.type(getByLabelText(/your email/i), "test@gmail.com");
    await user.type(getByLabelText(/subject/i), "Test subject");
    await user.type(getByLabelText(/message/i), "Hello!");

    await user.click(button);

    await waitFor(() => {
      expect(queryByText(/sent successfully/i)).toBeInTheDocument();
    });
  });

  test("error toast is shown on submission error", async () => {
    (emailjs.sendForm as jest.Mock).mockRejectedValue(
      new Error("Server error")
    );

    const { getByRole, getByLabelText, queryByText } = render(<Contact />);
    const button = getByRole("button", { name: /send message/i });
    const user = userEvent.setup();

    await user.type(getByLabelText(/your email/i), "test@gmail.com");
    await user.type(getByLabelText(/subject/i), "Test subject");
    await user.type(getByLabelText(/message/i), "Hello!");

    await user.click(button);

    await waitFor(() => {
      expect(queryByText(/message could not be sent/i)).toBeInTheDocument();
    });
  });

  test("all inputs are cleared when form is submitted", async () => {
    const mockSendForm = jest
      .fn()
      .mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ status: 200 }), 100)
          )
      );
    (emailjs.sendForm as jest.Mock) = mockSendForm;

    const { getByRole, getByLabelText } = render(<Contact />);
    const button = getByRole("button", { name: /send message/i });
    const user = userEvent.setup();

    await user.type(getByLabelText(/your email/i), "test@gmail.com");
    await user.type(getByLabelText(/subject/i), "Test subject");
    await user.type(getByLabelText(/message/i), "Hello!");

    await user.click(button);

    await waitFor(() => {
      expect(getByLabelText(/your email/i)).toHaveValue("");
      expect(getByLabelText(/subject/i)).toHaveValue("");
      expect(getByLabelText(/message/i)).toHaveValue("");
    });
  });
});
