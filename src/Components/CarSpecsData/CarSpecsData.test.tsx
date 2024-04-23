import { render, screen } from "@testing-library/react";
import CarSpecsData from "./CarSpecsData";
import userEvent from "@testing-library/user-event";

describe("<CarSpecsData /> Component", () => {
  const mockData = {
    data1: "dataMock1",
    data2: "dataMock2",
    data3: "dataMock3",
    data4: "dataMock4",
  };

  it("should render spinner when data is not loaded", () => {
    render(<CarSpecsData data={{}} set={() => {}} />);
    const spinner = screen.getByRole("img", { name: /Loading.../i });
    expect(spinner).toBeInTheDocument();
  });

  it("should display error message when recieving empty string response", async () => {
    render(<CarSpecsData data={""} set={() => {}} />);
    const errorMessage = await screen.getByRole("heading", {
      name: /AI Error/i,
    });
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render specs correctly when data is provided", () => {
    render(<CarSpecsData data={mockData} set={() => {}} />);

    const firstSpec = screen.getAllByRole("generic", { name: /Element data/i });

    if (firstSpec.length === Object.keys(mockData).length) {
      for (const [key, value] of Object.entries(mockData)) {
        expect(screen.getByText(key + ":")).toBeInTheDocument();
        expect(screen.getByText(value)).toBeInTheDocument();
      }
    } else {
      throw new Error(
        "Number of matching elements displayed does not match number of elements provided"
      );
    }
  });

  it("should close window when close button is clicked", async () => {
    const mockSetFunction = vi.fn();
    render(<CarSpecsData data={mockData} set={mockSetFunction} />);
    const closeButton = screen.getByRole("button", {
      name: /Close window/i,
    });
    await userEvent.click(closeButton);
    expect(mockSetFunction).toHaveBeenCalledWith(false);
  });
});
