import { render, screen, waitFor } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { Mock } from "vitest";
import CarSpecs from "./CarSpecs";
import userEvent from "@testing-library/user-event";

vi.mock("react-router-dom", () => {
  const originalModule = vi.importActual("react-router-dom");
  return {
    ...originalModule,
    useLocation: vi.fn(),
  };
});

describe("<CarSpecs /> Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const location = {
    state: {
      brand: { name: "BMW" },
      model: { name: "5 Series" },
      gen: { name: "F10/F11/F07" },
      engine: { name: "4.4" },
    },
  };

  useLocation.mockReturnValue(location);

  it("should render correctly", () => {
    render(<CarSpecs />);

    expect(screen.getByRole("button", { name: /Engine/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Transmission/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Suspension/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Size/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Fuel/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Common/i })).toBeInTheDocument();
  });

  it("should fetch specs when button is clicked", async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve('{"Spec1": "Data1","Spec2": "Data2"}'),
      })
    );

    global.fetch = mockFetch as Mock;

    render(<CarSpecs />);

    userEvent.click(screen.getByRole("button", { name: /Engine/i }));

    await waitFor(() =>
      expect(mockFetch).toHaveBeenCalledWith(
        "http://localhost:3000/specs",
        expect.objectContaining({
          method: "post",
          body: JSON.stringify({
            userPrompt: `Give me engine specifications of ${location.state.brand.name} ${location.state.model.name} ${location.state.gen.name} ${location.state.engine.name}`,
          }),
        })
      )
    );

    expect(screen.getAllByText(/Spec/i).length).toBe(2);
    expect(screen.getAllByText(/Data/i).length).toBe(2);
    screen.debug();
  });

  it("should close when button is clicked", async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve('{"Spec1": "Data1","Spec2": "Data2"}'),
      })
    );

    global.fetch = mockFetch as Mock;

    render(<CarSpecs />);

    const button = screen.getByRole("button", { name: /Engine/i });
    userEvent.click(button);
    await waitFor(() => expect(screen.getByText(/Data1/i)).toBeInTheDocument());
    await userEvent.click(button);
    expect(screen.queryByText(/Data1/)).toBeNull();
  });
});
