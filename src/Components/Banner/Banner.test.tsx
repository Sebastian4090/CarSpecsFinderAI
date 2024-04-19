import { expect, it } from "vitest";
import Banner from "./Banner";

it("renders correctly", () => {
  expect(<Banner />).toMatchSnapshot();
});
