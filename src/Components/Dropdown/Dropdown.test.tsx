import { screen, render, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("<Dropdown /> Component", () => {
  const mockData = ["data1", "data2", "data3"];

  it("should render dropdown data", () => {
    render(
      <Dropdown
        data={mockData}
        set={() => {}}
        setIsOpen={() => {}}
        isOpen={true}
        handler={() => {}}
        resetState={() => {}}
      />
    );

    mockData.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("should call handler when an option is clicked", () => {
    const mockHandler = vi.fn();

    render(
      <Dropdown
        data={mockData}
        set={() => {}}
        setIsOpen={() => {}}
        isOpen={true}
        handler={mockHandler}
        resetState={() => {}}
      />
    );

    const optionButton = screen.getByText("data1");
    fireEvent.click(optionButton);

    expect(mockHandler).toHaveBeenCalledOnce();
    expect(mockHandler).toHaveBeenCalledWith(expect.any(Function), "data1");
  });
});
