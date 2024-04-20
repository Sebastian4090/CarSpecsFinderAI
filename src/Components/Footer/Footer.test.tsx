import Footer from "./Footer";

describe("<Footer /> Component", () => {
  it("renders correctly", () => {
    expect(<Footer />).toMatchSnapshot();
  });
});
