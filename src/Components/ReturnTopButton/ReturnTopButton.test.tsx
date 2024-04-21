import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReturnTopButton from "./ReturnTopButton";

describe("<ReturnTopButton /> Component", () => {
  const scrollToMock = vi.fn();

  beforeEach(() => {
    window.scrollTo = scrollToMock;
  });

  it("should render button initially hidden", () => {
    render(<ReturnTopButton />);
    const button = screen.queryByRole("button", { name: /Return to Top/i });
    expect(button).not.toBeInTheDocument();
  });

  it("should render button when scrolled past 400 pixels", async () => {
    render(<ReturnTopButton />);
    fireEvent.scroll(window, { target: { scrollY: 500 } });
    await waitFor(() => {
      const button = screen.getByRole("button", { name: /Return to Top/i });
      expect(button).toBeInTheDocument();
    });
  });

  it("should scroll to top when button is clicked", async () => {
    render(<ReturnTopButton />);
    fireEvent.scroll(window, { target: { scrollY: 500 } });
    await waitFor(() => {
      const button = screen.getByRole("button", { name: /Return to Top/i });
      userEvent.click(button);
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: "smooth",
      });
    });
  });
});
