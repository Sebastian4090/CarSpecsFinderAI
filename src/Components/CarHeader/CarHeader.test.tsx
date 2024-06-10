import { render, screen, waitFor } from "@testing-library/react";
import CarHeader from "./CarHeader";
import { useLocation } from "react-router-dom";
import { vi, Mock } from "vitest";

vi.mock("react-router-dom", () => {
  const originalModule = vi.importActual("react-router-dom");
  return {
    ...originalModule,
    useLocation: vi.fn(),
  };
});

const mockFetch = vi.fn(async () => {
  return Promise.resolve({
    json: async () => "mockImageURL",
  });
});

global.fetch = mockFetch as Mock;

describe("<CarHeader /> Component", () => {
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

  (useLocation as Mock).mockReturnValue(location);

  it("should render car details correctly", async () => {
    render(<CarHeader />);

    screen.debug();

    await waitFor(() => {
      expect(screen.getByText("BMW")).toBeInTheDocument();
      expect(screen.getByText("5 Series")).toBeInTheDocument();
      expect(screen.getByText("F10/F11/F07")).toBeInTheDocument();
      expect(screen.getByText("4.4")).toBeInTheDocument();
    });
  });

  it("should render spinner while loading", async () => {
    render(<CarHeader />);
    expect(
      screen.getByRole("img", { name: "Please wait" })
    ).toBeInTheDocument();
  });

  it("should fetch, receive and display image", async () => {
    render(<CarHeader />);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledOnce();
      expect(mockFetch).toHaveBeenCalledWith(
        `${import.meta.env.VITE_REACT_APP_IMAGE}/BMW%205 Series%20F10`
      );
    });

    await waitFor(() => {
      expect(
        screen.getByRole("img", {
          name: `${location.state.brand.name} ${location.state.model.name} ${location.state.gen.name} image`,
        })
      ).toBeInTheDocument();
    });

    screen.debug();
  });

  it("should display error message when encountering error", async () => {
    const errorFetch = vi.fn(async () => {
      throw new Error("Internal server error");
    });

    global.fetch = errorFetch as Mock;

    render(<CarHeader />);

    await waitFor(() => {
      expect(screen.getByText(/Error/i)).toBeInTheDocument();
    });
  });
});
