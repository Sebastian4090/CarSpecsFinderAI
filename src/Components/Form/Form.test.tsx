import Form from "./Form";
import { render, waitFor, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Mock } from "vitest";

const mockedFetch = vi.fn(async () =>
  Promise.resolve({
    ok: true,
    json: async () => ["Brand 1", "Brand 2"],
  })
);

global.fetch = mockedFetch as Mock;

describe("<Form /> Component", () => {
  beforeEach(() => {
    mockedFetch.mockClear();
  });

  it("should render", () => {
    render(<Form />);
    expect(
      screen.getByText(/Choose a Manufactuer, Model, Generation and Engine!/i)
    ).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");

    if (buttons.length === 4) {
      buttons.forEach((button) => {
        expect(button).toBeInTheDocument();
      });
    } else {
      throw new Error("Wrong number of buttons is present");
    }
  });

  it("should fetch brand data on component mount", async () => {
    render(<Form />);
    await waitFor(() => expect(fetch).toHaveBeenCalledOnce());
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/data/65f046a87e9d5263e088681c/Brands"
    );
  });

  it("should display a dropdown when button is clicked", async () => {
    render(<Form />);
    await waitFor(() => expect(mockedFetch).toHaveBeenCalledOnce());

    const brandButton = screen.getByText("Brands");
    userEvent.click(brandButton);

    await waitFor(() => {
      screen.getByText("Brand 1");
      screen.getByText("Brand 2");
    });
    screen.debug();
  });
});
