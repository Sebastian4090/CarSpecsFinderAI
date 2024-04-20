import Banner from "./Banner";

describe("<Banner /> Component", () => {
  it("renders correctly", () => {
    expect(<Banner />).toMatchSnapshot();
  });
});
